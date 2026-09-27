const { spawn } = require('child_process');
const fs = require('fs');

async function checkUserScreen() {
  const port = 9675;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--window-size=1536,864`,
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
  fs.writeFileSync('scratch/user_view_1536.png', Buffer.from(shot.data, 'base64'));

  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const g = document.querySelector('.photography-gallery');
      const header = document.querySelector('.photography-header');
      const rows = document.querySelectorAll('.gallery-row');
      const row1Cards = rows[0].querySelectorAll('.photo-card');
      const row2Cards = rows[1].querySelectorAll('.photo-card');
      const nav = document.querySelector('.nav-pill').getBoundingClientRect();
      return {
        winW: window.innerWidth,
        clientW: document.documentElement.clientWidth,
        nav: { left: nav.left, right: window.innerWidth - nav.right, width: nav.width },
        galleryW: g.offsetWidth,
        headerLeft: header ? header.getBoundingClientRect().left : null,
        headerW: header ? header.offsetWidth : null,
        row1: {
          firstCardLeft: row1Cards[0].getBoundingClientRect().left,
          lastCardRight: row1Cards[2].getBoundingClientRect().right,
          spaceLeft: row1Cards[0].getBoundingClientRect().left,
          spaceRight: window.innerWidth - row1Cards[2].getBoundingClientRect().right
        },
        row2: {
          firstCardLeft: row2Cards[0].getBoundingClientRect().left,
          lastCardRight: row2Cards[2].getBoundingClientRect().right,
          spaceLeft: row2Cards[0].getBoundingClientRect().left,
          spaceRight: window.innerWidth - row2Cards[2].getBoundingClientRect().right
        }
      };
    })()`,
    returnByValue: true
  });
  console.log('User view (1536x864):', result.result.value);
  ws.close();
  proc.kill();
}
checkUserScreen();
