// Render case-study covers from tools/covers/scenes/*.html.
// Each scene declares where its JPEG goes with <meta name="out" content="src/assets/work/…/x.jpg">.
// Usage: node tools/covers/render.mjs            (all scenes)
//        node tools/covers/render.mjs cas holmes (only these scene names)
// Needs Playwright with Chromium (npx playwright install chromium if it isn't installed).
import { readdirSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const scenesDir = join(here, 'scenes');
const only = process.argv.slice(2);

const scenes = readdirSync(scenesDir).filter((f) => f.endsWith('.html')).filter((f) => !only.length || only.includes(f.replace(/\.html$/, '')));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 840 }, deviceScaleFactor: 1.5 });
for (const f of scenes) {
  const html = readFileSync(join(scenesDir, f), 'utf8');
  const out = html.match(/<meta name="out" content="([^"]+)"/)?.[1];
  if (!out) { console.warn(`skip ${f}: no <meta name="out">`); continue; }
  await page.goto(pathToFileURL(join(scenesDir, f)).href);
  await page.waitForFunction(() => window.coverReady === true || !window.Cover, null, { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(300);
  const target = join(root, out);
  mkdirSync(dirname(target), { recursive: true });
  await (await page.$('#c')).screenshot({ path: target, type: 'jpeg', quality: 90 });
  console.log(`${f} → ${out}`);
}
await browser.close();
