const { spawn } = require('child_process');
const fs = require('fs');

async function checkMobileTablet(w, h, shotName) {
  const port = 9679;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--window-size=${w},${h}`,
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

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(shotName, Buffer.from(shot.data, 'base64'));

  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const g = document.querySelector('.photography-gallery');
      const rows = document.querySelectorAll('.gallery-row');
      const row1Cards = rows[0].querySelectorAll('.photo-card');
      return {
        winW: window.innerWidth,
        clientW: document.documentElement.clientWidth,
        galleryW: g.offsetWidth,
        row1: {
          firstCardLeft: row1Cards[0].getBoundingClientRect().left,
          lastCardRight: row1Cards[row1Cards.length - 1].getBoundingClientRect().right,
          spaceLeft: row1Cards[0].getBoundingClientRect().left,
          spaceRight: document.documentElement.clientWidth - row1Cards[row1Cards.length - 1].getBoundingClientRect().right
        }
      };
    })()`,
    returnByValue: true
  });
  console.log(`Viewport ${w}x${h}:`, result.result.value);
  ws.close();
  proc.kill();
}

async function run() {
  await checkMobileTablet(768, 1024, 'scratch/shot_tablet_768.png');
  await checkMobileTablet(390, 844, 'scratch/shot_mobile_390.png');
}
run();
