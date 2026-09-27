const { spawn } = require('child_process');
const fs = require('fs');

async function testModal(index, filename) {
  const port = 9662;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=1440,900',
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

  // Click on the specified polaroid
  await send('Runtime.evaluate', {
    expression: `(() => {
      const polaroids = document.querySelectorAll(".scrapbook-polaroid");
      if (polaroids[${index}]) polaroids[${index}].click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const dialog = document.querySelector(".lightbox-dialog");
      const media = document.querySelector(".lightbox-media");
      const img = document.querySelector(".lightbox-img");
      return {
        dialog: dialog ? { w: dialog.offsetWidth, h: dialog.offsetHeight } : null,
        media: media ? { w: media.offsetWidth, h: media.offsetHeight } : null,
        img: img ? { naturalW: img.naturalWidth, naturalH: img.naturalHeight, renderedW: img.offsetWidth, renderedH: img.offsetHeight } : null
      };
    })()`,
    returnByValue: true
  });
  console.log(`Memory [${index}] info:`, info.result.value);

  ws.close();
  proc.kill();
}

async function main() {
  await testModal(2, 'scratch/current_modal_puppy.png'); // puppy cuddle
  await testModal(0, 'scratch/current_modal_trophy.png'); // trophy
}
main().catch(console.error);
