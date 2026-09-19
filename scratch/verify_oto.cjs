const { spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  const port = 9520;
  const proc = spawn('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
    'http://localhost:5173/#projects/muji'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await sleep(400);
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const tabs = await res.json();
      const tab = tabs.find(t => t.type === 'page');
      if (tab && tab.webSocketDebuggerUrl) {
        wsUrl = tab.webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  if (!wsUrl) {
    console.error('Failed to get WebSocket debugger URL');
    proc.kill();
    process.exit(1);
  }

  const WS = globalThis.WebSocket;
  const ws = new WS(wsUrl);
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
  await sleep(1500);

  // Navigate directly to hash
  await send('Runtime.evaluate', { expression: 'window.location.hash = "#projects/muji";' });
  await sleep(2000);

  // Take screenshot of section 1 (Narrowing down)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-narrowing-section")?.scrollIntoView({ block: "center" });'
  });
  await sleep(800);
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_ui_section_narrowing.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_ui_section_narrowing.png');

  // Take screenshot of section 2 (Blueprint showcase)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-blueprint-showcase-section")?.scrollIntoView({ block: "center" });'
  });
  await sleep(800);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_ui_section_blueprint.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_ui_section_blueprint.png');

  // Take screenshot of section 3 (Lifestyle flow row with white step and cat)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-lifestyle-flow-row")?.scrollIntoView({ block: "center" });'
  });
  await sleep(800);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_ui_section_final.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_ui_section_final.png');

  // Also take full screenshot showing the junction between blueprint canvas and lifestyle row
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-oto-showcase-flow")?.scrollIntoView({ block: "center" });'
  });
  await sleep(800);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_ui_showcase_junction.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_ui_showcase_junction.png');

  ws.close();
  proc.kill();
  console.log('Verification run complete!');
}

run().catch(console.error);
