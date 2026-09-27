const fs = require('fs');

// We have sketches-narrowing.png (1900 x 1040)
// Let's inspect where the grey pill is in sketches-narrowing.png using Edge!
const { spawn } = require('child_process');
const path = require('path');

async function run() {
  const imgPath = path.resolve('src/assets/projects/casestudies/oto_speaker/sketches-narrowing.png').replace(/\\/g, '/');
  const html = `<!DOCTYPE html>
<html>
<body>
<canvas id="c"></canvas>
<script>
window.analyze = async () => {
  const img = new Image();
  img.src = 'file:///${imgPath}';
  await new Promise(r => img.onload = r);
  const canvas = document.getElementById('c');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Background grey of pill in image is #707579 (112, 117, 121)
  // Let's find bounding box of the grey pill
  let minX = 9999, maxX = 0, minY = 9999, maxY = 0;
  for (let y = 100; y < 500; y += 4) {
    const row = ctx.getImageData(0, y, img.width, 1).data;
    for (let x = 0; x < img.width; x++) {
      const r = row[x * 4];
      const g = row[x * 4 + 1];
      const b = row[x * 4 + 2];
      // Grey pill: r ~ 112, g ~ 117, b ~ 121
      if (Math.abs(r - 112) < 20 && Math.abs(g - 117) < 20 && Math.abs(b - 121) < 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  return {
    width: img.width,
    height: img.height,
    pill: { minX, maxX, minY, maxY },
    pillPercent: {
      left: (minX / img.width * 100).toFixed(2) + '%',
      right: (maxX / img.width * 100).toFixed(2) + '%',
      width: ((maxX - minX) / img.width * 100).toFixed(2) + '%',
      top: (minY / img.height * 100).toFixed(2) + '%',
      height: ((maxY - minY) / img.height * 100).toFixed(2) + '%'
    }
  };
};
</script>
</body>
</html>`;
  fs.writeFileSync('scratch/analyze_narrow.html', html);

  const port = 9565;
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
    `file:///${path.resolve('scratch/analyze_narrow.html').replace(/\\/g, '/')}`
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

  const result = await send('Runtime.evaluate', {
    expression: 'window.analyze()',
    awaitPromise: true,
    returnByValue: true
  });
  console.log('Narrowing pill analysis:', result.result.value);

  ws.close();
  proc.kill();
}

run().catch(console.error);
