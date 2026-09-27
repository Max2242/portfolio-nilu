const { spawn } = require('child_process');
const fs = require('fs');

async function testSequence() {
  const port = 9680;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=1440,900',
    `--remote-debugging-port=${port}`,
    'http://localhost:5173/#ultimate'
  ]);

  console.log('Launching headless Edge for sequence verification...');
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

  // Open first memory
  await send('Runtime.evaluate', {
    expression: `new Promise((resolve) => {
      const check = setInterval(() => {
        const polaroids = document.querySelectorAll('.scrapbook-polaroid');
        if (polaroids.length >= 10) {
          clearInterval(check);
          polaroids[0].click();
          resolve(true);
        }
      }, 100);
    })`,
    awaitPromise: true
  });

  await new Promise(r => setTimeout(r, 600));

  const sequence = [];

  for (let i = 0; i < 12; i++) {
    const data = await send('Runtime.evaluate', {
      expression: `(() => {
        const title = document.querySelector('.lightbox-title')?.textContent;
        const tag = document.querySelector('.lightbox-handwritten-tag')?.textContent;
        const counter = document.querySelector('.lightbox-counter')?.textContent;
        const dialog = document.querySelector('.lightbox-dialog');
        const img = document.querySelector('.lightbox-img');
        const dW = dialog ? dialog.offsetWidth : 0;
        const iW = img ? img.offsetWidth : 0;
        const iH = img ? img.offsetHeight : 0;
        const ratio = iH > 0 ? (iW / iH) : 0;

        return {
          step: ${i + 1},
          title,
          tag,
          counter,
          dW,
          iW,
          iH,
          ratio: Number(ratio.toFixed(3)),
          isLandscape: ratio >= 1.0,
          isPortrait: ratio < 1.0,
          dialogMatchesImg: Math.abs(dW - iW) < 2
        };
      })()`,
      returnByValue: true
    });

    const info = data.result.value;
    sequence.push(info);
    console.log(`Item ${i + 1}/12: [${info.isLandscape ? 'LANDSCAPE' : 'PORTRAIT'}] "${info.title}" (ratio: ${info.ratio}, dW: ${info.dW}, iW: ${info.iW})`);

    // Click Next button for next step (unless last)
    if (i < 11) {
      await send('Runtime.evaluate', {
        expression: `document.querySelector('.lightbox-floating-nav-btn.next')?.click()`
      });
      await new Promise(r => setTimeout(r, 350));
    }
  }

  const allLandscapeFirst = sequence.slice(0, 7).every(s => s.isLandscape);
  const allPortraitSecond = sequence.slice(7).every(s => s.isPortrait);

  console.log('\n--- VERIFICATION RESULT ---');
  console.log('Items 1-7 all landscape:', allLandscapeFirst);
  console.log('Items 8-12 all portrait:', allPortraitSecond);
  console.log('All dialogs match image width:', sequence.every(s => s.dialogMatchesImg));

  ws.close();
  proc.kill();

  if (!allLandscapeFirst || !allPortraitSecond) {
    throw new Error('Sequence verification failed!');
  }
}

testSequence().catch(e => {
  console.error(e);
  process.exit(1);
});
