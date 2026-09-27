const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function run() {
  const port = 9670;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=1440,900',
    `--remote-debugging-port=${port}`,
    'http://localhost:5173/#ultimate'
  ]);

  console.log('Launching headless Edge...');
  await new Promise(r => setTimeout(r, 2500));

  const res = await fetch(`http://127.0.0.1:${port}/json/list`);
  const tabs = await res.json();
  const tab = tabs.find(t => t.type === 'page');
  const ws = new (globalThis.WebSocket)(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));

  let id = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const curId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === curId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  await send('Runtime.enable');
  await send('Page.enable');

  // Wait for polaroids to render
  await send('Runtime.evaluate', {
    expression: `new Promise((resolve) => {
      const check = setInterval(() => {
        if (document.querySelectorAll('.scrapbook-polaroid').length >= 10) {
          clearInterval(check);
          resolve(true);
        }
      }, 100);
    })`,
    awaitPromise: true
  });

  const testCases = [
    { index: 0, name: 'trophy_landscape', file: 'scratch/lightbox_landscape_arrows.png' },
    { index: 7, name: 'puppy_portrait', file: 'scratch/lightbox_portrait_arrows.png' },
    { index: 4, name: 'award_ceremony', file: 'scratch/lightbox_squareish_arrows.png' }
  ];

  for (const tc of testCases) {
    console.log(`\nTesting case: ${tc.name} (index ${tc.index})`);
    await send('Runtime.evaluate', {
      expression: `(() => {
        // If close button exists, close first
        const close = document.querySelector('.lightbox-close-btn');
        if (close) close.click();
        const polaroids = document.querySelectorAll('.scrapbook-polaroid');
        if (polaroids[${tc.index}]) polaroids[${tc.index}].click();
      })()`
    });

    await new Promise(r => setTimeout(r, 600));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(tc.file, Buffer.from(shot.data, 'base64'));

    const measurements = await send('Runtime.evaluate', {
      expression: `(() => {
        const dialog = document.querySelector('.lightbox-dialog');
        const media = document.querySelector('.lightbox-media');
        const img = document.querySelector('.lightbox-img');
        const prevBtn = document.querySelector('.lightbox-floating-nav-btn.prev');
        const nextBtn = document.querySelector('.lightbox-floating-nav-btn.next');

        const dRect = dialog ? dialog.getBoundingClientRect() : null;
        const mRect = media ? media.getBoundingClientRect() : null;
        const iRect = img ? img.getBoundingClientRect() : null;
        const pRect = prevBtn ? prevBtn.getBoundingClientRect() : null;
        const nRect = nextBtn ? nextBtn.getBoundingClientRect() : null;

        return {
          dialogRect: dRect,
          mediaRect: mRect,
          imgRect: iRect,
          prevRect: pRect,
          nextRect: nRect,
          dialogWidthEqualsImgWidth: iRect && dRect ? Math.abs(iRect.width - dRect.width) < 2 : false,
          prevOutsideDialog: pRect && dRect ? pRect.right < dRect.left : false,
          nextOutsideDialog: nRect && dRect ? nRect.left > dRect.right : false
        };
      })()`,
      returnByValue: true
    });

    console.log('Measurements:', measurements.result.value);
  }

  // Test next navigation button click
  console.log('\nTesting Next button click...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const nextBtn = document.querySelector('.lightbox-floating-nav-btn.next');
      if (nextBtn) nextBtn.click();
    })()`
  });

  await new Promise(r => setTimeout(r, 600));

  const shotNext = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/lightbox_after_next.png', Buffer.from(shotNext.data, 'base64'));

  const nextTitle = await send('Runtime.evaluate', {
    expression: `document.querySelector('.lightbox-title')?.textContent`,
    returnByValue: true
  });
  console.log('Title after next button click:', nextTitle.result.value);

  ws.close();
  proc.kill();
  console.log('\nAll tests completed!');
}

run().catch(console.error);
