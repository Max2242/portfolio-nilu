const { spawn } = require('child_process');
const fs = require('fs');

async function testMobile() {
  const port = 9675;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=390,844',
    `--remote-debugging-port=${port}`,
    'http://localhost:5173/#ultimate'
  ]);

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

  await send('Runtime.evaluate', {
    expression: `new Promise((resolve) => {
      const check = setInterval(() => {
        const cards = document.querySelectorAll('.mobile-card');
        if (cards.length > 0) {
          clearInterval(check);
          cards[0].click();
          resolve(true);
        }
      }, 100);
    })`,
    awaitPromise: true
  });

  await new Promise(r => setTimeout(r, 600));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/lightbox_mobile_puppy.png', Buffer.from(shot.data, 'base64'));

  const metrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const dialog = document.querySelector('.lightbox-dialog');
      const img = document.querySelector('.lightbox-img');
      return {
        viewportWidth: window.innerWidth,
        dialogWidth: dialog ? dialog.offsetWidth : null,
        imgWidth: img ? img.offsetWidth : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Mobile metrics:', metrics.result.value);

  ws.close();
  proc.kill();
}

testMobile().catch(console.error);
