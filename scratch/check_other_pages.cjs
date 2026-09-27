const { spawn } = require('child_process');
const fs = require('fs');

async function checkPage(url, shotName) {
  const port = 9671;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--window-size=1440,900`,
    `--remote-debugging-port=${port}`,
    url
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

  if (shotName) {
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(shotName, Buffer.from(shot.data, 'base64'));
  }

  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = document.querySelector('.nav-pill') ? document.querySelector('.nav-pill').getBoundingClientRect() : null;
      const main = document.querySelector('.app-content > *');
      const mainR = main ? main.getBoundingClientRect() : null;
      return {
        url: window.location.href,
        winW: window.innerWidth,
        nav: nav ? { left: nav.left, right: window.innerWidth - nav.right, width: nav.width } : null,
        main: mainR ? { left: mainR.left, right: window.innerWidth - mainR.right, width: mainR.width, tag: main.tagName, class: main.className } : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Page:', result.result.value);
  ws.close();
  proc.kill();
}

async function run() {
  await checkPage('http://localhost:5173/#projects', 'scratch/shot_projects.png');
  await checkPage('http://localhost:5173/#dashboard', 'scratch/shot_dashboard.png');
}
run();
