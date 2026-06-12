import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let code = readFileSync(resolve(__dirname, '../references/manifest.json'), 'utf-8');
code = code.replace('export const manifest', 'globalThis.__manifest');
code = code.trim();
if (code.endsWith(';')) code = code.slice(0, -1);

eval(code);

const manifest = globalThis.__manifest;
writeFileSync(
  resolve(__dirname, '../references/manifest.json'),
  JSON.stringify(manifest)
);

let filledCount = 0, outlineCount = 0;
for (const [, v] of Object.entries(manifest.filled)) filledCount += v.icons.length;
for (const [, v] of Object.entries(manifest.outline)) outlineCount += v.icons.length;

console.log(`Converted: filled=${filledCount}, outline=${outlineCount}, total=${filledCount + outlineCount}`);
