const { spawn } = require('child_process');
const fs = require('fs');

async function testCss(css, memoryIndex, filename) {
  const port = 9665;
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

  await send('Runtime.evaluate', {
    expression: `(() => {
      const style = document.createElement('style');
      style.id = 'test-lightbox-override';
      style.textContent = \`${css}\`;
      document.head.appendChild(style);

      const polaroids = document.querySelectorAll(".scrapbook-polaroid");
      if (polaroids[${memoryIndex}]) polaroids[${memoryIndex}].click();
    })()`
  });

  await new Promise(r => setTimeout(r, 600));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const dialog = document.querySelector(".lightbox-dialog");
      const media = document.querySelector(".lightbox-media");
      const img = document.querySelector(".lightbox-img");
      return {
        dialog: dialog ? { w: dialog.offsetWidth, h: dialog.offsetHeight } : null,
        media: media ? { w: media.offsetWidth, h: media.offsetHeight } : null,
        img: img ? { renderedW: img.offsetWidth, renderedH: img.offsetHeight, naturalW: img.naturalWidth, naturalH: img.naturalHeight } : null
      };
    })()`,
    returnByValue: true
  });
  console.log(`Result [${filename}]:`, evalRes.result.value);

  ws.close();
  proc.kill();
}

async function main() {
  // Let's test a simple fit-content approach
  const css = `
    .lightbox-backdrop {
      padding: 2rem !important;
      position: fixed !important;
      inset: 0 !important;
    }
    .lightbox-dialog {
      width: fit-content !important;
      max-width: min(90vw, 840px) !important;
      min-width: 340px !important;
      margin: auto !important;
    }
    .lightbox-media {
      width: auto !important;
      display: flex !important;
      justify-content: center !important;
      background: transparent !important; /* No dark empty bars! */
    }
    .lightbox-img {
      display: block !important;
      width: auto !important;
      height: auto !important;
      max-width: 100% !important;
      max-height: 60vh !important;
      min-height: 280px !important; /* Ensure tiny images like puppy cuddles are viewable */
      object-fit: contain !important;
    }
  `;
  await testCss(css, 2, 'scratch/test_fit_puppy.png'); // puppy cuddles (index 2)
  await testCss(css, 0, 'scratch/test_fit_trophy.png'); // spirit trophy (index 0)
}
main().catch(console.error);
