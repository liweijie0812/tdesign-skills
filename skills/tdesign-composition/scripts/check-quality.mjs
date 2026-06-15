import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = process.argv.slice(2);
const failures = [];
const warnings = [];

const supportedExtensions = new Set(['.vue', '.css', '.scss', '.less', '.html', '.tsx', '.jsx', '.ts', '.js']);

function addFailure(filePath, line, message) {
  failures.push(`${filePath}:${line}: ${message}`);
}

function addWarning(filePath, line, message) {
  warnings.push(`${filePath}:${line}: ${message}`);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function walk(filePath, files) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    for (const entry of fs.readdirSync(filePath, { withFileTypes: true })) {
      if (['.git', 'node_modules', 'dist', 'build', '.output'].includes(entry.name)) continue;
      walk(path.join(filePath, entry.name), files);
    }
    return;
  }

  if (stats.isFile() && supportedExtensions.has(path.extname(filePath))) {
    files.push(filePath);
  }
}

function lineNumberAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scanRegex(text, pattern, callback) {
  let match;
  while ((match = pattern.exec(text))) {
    callback(match, lineNumberAt(text, match.index));
  }
}

function cssBlocks(filePath, text) {
  const extension = path.extname(filePath);
  if (['.css', '.scss', '.less'].includes(extension)) {
    return [{ text, offset: 0 }];
  }

  const blocks = [];
  const styleBlockPattern = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = styleBlockPattern.exec(text))) {
    blocks.push({ text: match[1], offset: match.index + match[0].indexOf(match[1]) });
  }

  return blocks;
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function checkHardcodedColor(filePath, text) {
  for (const block of cssBlocks(filePath, text)) {
    scanRegex(block.text, /(?<![-\w])#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b|rgba?\(/g, (match, line) => {
      addFailure(filePath, lineNumberAt(text, block.offset + match.index), `DS-002 硬编码颜色 ${match[0]}，应使用 TDesign 语义 Token`);
    });
  }
}

function checkHardcodedPx(filePath, text) {
  const propertyPattern = /(?:margin|padding|gap|font-size|border-radius)\s*:\s*[^;{}]*?\b\d+px\b/gi;
  for (const block of cssBlocks(filePath, text)) {
    scanRegex(block.text, propertyPattern, (match, line) => {
      if (match[0].includes('var(--td-')) return;
      addWarning(filePath, lineNumberAt(text, block.offset + match.index), `DS-003 硬编码 px 样式 ${match[0].trim()}，优先使用 TDesign Token`);
    });
  }
}

function checkHeaderContract(filePath, text) {
  if (!/(<t-header\b|t-layout__header|app-header|<Header\b)/.test(text)) return;
  const hasToken = /var\(--td-comp-size-xxxl\)/.test(text);
  const hasHeight = /height\s*:\s*var\(--td-comp-size-xxxl\)/.test(text);
  const hasMinHeight = /min-height\s*:\s*var\(--td-comp-size-xxxl\)/.test(text);
  const hasFlexShrink = /flex-shrink\s*:\s*0/.test(text);

  if (!hasToken || !hasHeight || !hasMinHeight || !hasFlexShrink) {
    addFailure(filePath, 1, 'DS-004 Header 必须使用 var(--td-comp-size-xxxl)，并同时设置 height、min-height、flex-shrink: 0');
  }
}

function checkDangerConfirmation(filePath, text) {
  if (!/(删除|移除|禁用|下线|清空|delete|remove|disable)/i.test(text)) return;
  if (!/(<t-popconfirm|<t-dialog|DialogPlugin\.confirm|Popconfirm)/.test(text)) {
    addFailure(filePath, 1, 'DS-006 危险操作需要 Popconfirm、Dialog 或等价二次确认组件');
  }
}

function checkDataStates(filePath, text) {
  if (!/(<t-table|Table|columns\s*=|data\s*=)/.test(text)) return;
  if (!hasAny(text, [/<t-empty/i, /\bempty\b/i, /\bloading\b/i, /Skeleton/i, /加载失败|无权限|error/i])) {
    addWarning(filePath, 1, 'DS-007 数据区域缺少空状态、加载态、错误态或无权限状态线索');
  }
}

function checkIconSource(filePath, text) {
  if (/(emoji|iconfont|<svg\b|\.svg\b|twemoji|cdn[^\n]*(icon|png|jpg|webp))/i.test(text)) {
    addFailure(filePath, 1, 'DS-008 UI 图标应来自 TDesign Icons，不使用 Emoji、自绘 SVG、外部 iconfont 或临时网络图片');
  }
}

function checkFile(filePath) {
  const text = readText(filePath);
  const relativePath = path.relative(root, filePath);
  checkHardcodedColor(relativePath, text);
  checkHardcodedPx(relativePath, text);
  checkHeaderContract(relativePath, text);
  checkDangerConfirmation(relativePath, text);
  checkDataStates(relativePath, text);
  checkIconSource(relativePath, text);
}

if (!targets.length) {
  console.error('Usage: node <path-to-tdesign-composition>/scripts/check-quality.mjs <file-or-directory> [...more]');
  process.exit(1);
}

const files = [];
for (const target of targets) {
  const resolved = path.resolve(root, target);
  if (!fs.existsSync(resolved)) {
    failures.push(`${target}: path does not exist`);
    continue;
  }
  walk(resolved, files);
}

for (const file of files) {
  checkFile(file);
}

if (warnings.length) {
  console.warn(warnings.join('\n'));
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Quality gate OK (${files.length} files checked)`);
