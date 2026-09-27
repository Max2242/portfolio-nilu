const { spawn } = require('child_process');
const fs = require('fs');

async function testPhotographyLightbox() {
  const port = 9677;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=1536,864',
    `--remote-debugging-port=${port}`,
    'http://localhost:5173/#photography'
  ]);
  await new Promise(r => setTimeout(r, 1500));
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
  await new Promise(r => setTimeout(r, 500));

  // Click on first photo card
  await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.photo-card');
      if (card) card.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/photo_lightbox.png', Buffer.from(shot.data, 'base64'));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const dialog = document.querySelector('.photo-lightbox-dialog');
      const media = document.querySelector('.photo-lightbox-media');
      const img = document.querySelector('.photo-lightbox-img');
      return {
        dialog: dialog ? dialog.getBoundingClientRect() : null,
        media: media ? media.getBoundingClientRect() : null,
        img: img ? img.getBoundingClientRect() : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Lightbox info:', info.result.value);

  ws.close();
  proc.kill();
}
testPhotographyLightbox();
