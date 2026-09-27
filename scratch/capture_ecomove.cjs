const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const port = 9635;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    'http://localhost:5173/#projects/ecomove'
  ]);

  await new Promise(r => setTimeout(r, 2000));
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

  await send('Page.enable');
  await new Promise(r => setTimeout(r, 1000));

  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('.cs-ecomove-showcase-bleed-wrap');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/current_ecomove.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scratch/current_ecomove.png');

  ws.close();
  proc.kill();
}
run().catch(console.error);
