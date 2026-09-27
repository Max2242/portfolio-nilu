const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function run() {
  const figmaImg = path.resolve('src/assets/projects/casestudy-ecomove.png').replace(/\\/g, '/');

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0; background:#111; overflow-y:scroll;">
  <img src="file:///${figmaImg}" style="width:1440px; display:block;">
</body>
</html>`;
  fs.writeFileSync('scratch/view_ref_eco.html', html);

  const port = 9632;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
    `file:///${path.resolve('scratch/view_ref_eco.html').replace(/\\/g, '/')}`
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
  await send('Runtime.enable');
  await new Promise(r => setTimeout(r, 1000));

  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, document.body.scrollHeight * 0.88);'
  });
  await new Promise(r => setTimeout(r, 800));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/ref_eco_showcase.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scratch/ref_eco_showcase.png');

  ws.close();
  proc.kill();
}
run().catch(console.error);
