const { spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  const port = 9521;
  const proc = spawn('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
    'http://localhost:5173/#projects/ecomove'
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
  await send('Runtime.evaluate', { expression: 'window.location.hash = "#projects/ecomove";' });
  await sleep(2000);

  // 1. Screenshot of Top: Hero Scrapbook + Title & Lead Text
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-hero-section")?.scrollIntoView({ block: "start" });'
  });
  await sleep(600);
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_01_hero.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_01_hero.png');

  // 2. Screenshot of Understanding the Gap
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-gap-sec")?.scrollIntoView({ block: "start" });'
  });
  await sleep(600);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_02_gap.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_02_gap.png');

  // 3. Screenshot of Persona Section
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-persona-sec")?.scrollIntoView({ block: "start" });'
  });
  await sleep(600);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_03_persona.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_03_persona.png');

  // 4. Screenshot of Wireframes (From Sketch to Screen)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-wireframes-sec")?.scrollIntoView({ block: "start" });'
  });
  await sleep(600);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_04_wireframes.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_04_wireframes.png');

  // 5. Screenshot of Final Banner with Scoop
  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-banner-bleed-wrap")?.scrollIntoView({ block: "center" });'
  });
  await sleep(600);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_05_banner.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_05_banner.png');

  // 6. Mobile 390px Viewport
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(800);

  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-gap-sec")?.scrollIntoView({ block: "start" });'
  });
  await sleep(500);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_mob_gap.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_mob_gap.png');

  await send('Runtime.evaluate', {
    expression: 'document.querySelector(".cs-ecomove-banner-bleed-wrap")?.scrollIntoView({ block: "center" });'
  });
  await sleep(500);
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_eco_mob_banner.png', Buffer.from(res.data, 'base64'));
  console.log('Saved scratch/verify_eco_mob_banner.png');

  ws.close();
  proc.kill();
  console.log('EcoMove verification run complete!');
}

run().catch(console.error);
