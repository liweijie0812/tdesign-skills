import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = process.argv.slice(2);
const failures = [];
const warnings = [];

const supportedExtensions = new Set(['.vue', '.css', '.scss', '.less', '.html', '.tsx', '.jsx', '.ts', '.js']);
const uiExtensions = new Set(['.vue', '.html', '.tsx', '.jsx']);

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

function isUiFile(filePath) {
  return uiExtensions.has(path.extname(filePath));
}

function tagBlocks(text, tagName) {
  const blocks = [];
  const pattern = new RegExp(`<${tagName}\\b[\\s\\S]*?<\\/${tagName}>`, 'gi');
  let match;
  while ((match = pattern.exec(text))) {
    blocks.push({ text: match[0], index: match.index });
  }
  return blocks;
}

function declarationBlockAt(cssText, index) {
  const start = cssText.lastIndexOf('{', index);
  const end = cssText.indexOf('}', index);
  if (start === -1 || end === -1 || end < index) {
    return cssText.slice(Math.max(0, index - 200), Math.min(cssText.length, index + 200));
  }
  return cssText.slice(start + 1, end);
}

function checkRealTDesignComponents(filePath, text) {
  if (!isUiFile(filePath)) return;
  if (hasAny(text, [/<t-(?:layout|form|table|card|menu|dialog|popconfirm|button|pagination|empty|tag)\b/i, /<(?:Layout|Form|Table|Card|Menu|Dialog|Popconfirm|Button|Pagination|Empty|Tag)\b/])) return;

  addWarning(filePath, 1, 'DS-001 页面未发现关键 TDesign 组件标签，优先使用真实 Layout、Form、Table、Card、Menu 等组件');
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

function checkDuplicateBrand(filePath, text) {
  const asideBlocks = tagBlocks(text, 't-aside');
  const headerBlocks = tagBlocks(text, 't-header');
  if (!asideBlocks.length || !headerBlocks.length) return;

  const hasAsideBrand = asideBlocks.some((block) => /(logo|brand)/i.test(block.text));
  const headerBrandBlock = headerBlocks.find((block) => /(logo|brand)/i.test(block.text));
  if (hasAsideBrand && headerBrandBlock) {
    addWarning(filePath, lineNumberAt(text, headerBrandBlock.index), 'DS-005 <t-aside> 与 <t-header> 中同时出现 logo/brand 字符串，确认全页只保留一个品牌位');
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

function checkSolidColorContrast(filePath, text) {
  const solidColorPattern = /background(?:-color)?\s*:\s*[^;{}]*var\(--td-(?:brand|success|warning|error)-color(?:-(?!light\b)[\w-]+)?\)/gi;
  for (const block of cssBlocks(filePath, text)) {
    scanRegex(block.text, solidColorPattern, (match) => {
      const declarationBlock = declarationBlockAt(block.text, match.index);
      if (/--td-text-color-anti/.test(declarationBlock)) return;
      addWarning(filePath, lineNumberAt(text, block.offset + match.index), `DS-009 彩色实心底 ${match[0].trim()} 缺少 --td-text-color-anti 反色文字`);
    });
  }
}

function checkTableComponentUsage(filePath, text) {
  if (!isUiFile(filePath)) return;
  if (!/(表格|列表|数据|Table|table)/.test(text)) return;
  if (/(<t-table\b|<Table\b)/.test(text)) return;

  addWarning(filePath, 1, 'DS-010 页面出现表格、列表或数据关键词，但未发现真实 Table 组件');
}

function checkStatusExpression(filePath, text) {
  if (!isUiFile(filePath)) return;
  if (!/(success|warning|error)/i.test(text)) return;
  if (hasAny(text, [/<t-tag\b/i, /<Tag\b/, /<t-alert\b/i, /<Alert\b/, /<t-empty\b/i, /<Empty\b/, /<t-message\b/i, /MessagePlugin\./, /\btheme\s*=/, /\bstatus\s*=/, /\btype\s*=/, /\bloading\s*=/, /\bdisabled\s*=/])) return;

  addWarning(filePath, 1, 'DS-011 出现 success/warning/error 状态关键词，但缺少 Tag、theme/status、文本或组件状态等辅助表达');
}

function checkIconSource(filePath, text) {
  if (/(emoji|iconfont|<svg\b|\.svg\b|twemoji|cdn[^\n]*(icon|png|jpg|webp))/i.test(text)) {
    addFailure(filePath, 1, 'DS-008 UI 图标应来自 TDesign Icons，不使用 Emoji、自绘 SVG、外部 iconfont 或临时网络图片');
  }
}

function checkFile(filePath) {
  const text = readText(filePath);
  const relativePath = path.relative(root, filePath);
  checkRealTDesignComponents(relativePath, text);
  checkHardcodedColor(relativePath, text);
  checkHardcodedPx(relativePath, text);
  checkHeaderContract(relativePath, text);
  checkDuplicateBrand(relativePath, text);
  checkDangerConfirmation(relativePath, text);
  checkDataStates(relativePath, text);
  checkIconSource(relativePath, text);
  checkSolidColorContrast(relativePath, text);
  checkTableComponentUsage(relativePath, text);
  checkStatusExpression(relativePath, text);
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
