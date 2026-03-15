const fs = require('fs');
const path = '.vercel/output/functions/_render.func/.vc-config.json';
if (fs.existsSync(path)) {
  const config = JSON.parse(fs.readFileSync(path, 'utf8'));
  config.runtime = 'nodejs20.x';
  fs.writeFileSync(path, JSON.stringify(config, null, '\t'));
}
