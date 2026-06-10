import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url);
const OUTPUT_ROOT = new URL('../references/api/', import.meta.url);

const STACKS = [
  {
    key: 'react',
    name: 'TDesign React',
    repo: 'Tencent/tdesign-react',
    branch: 'develop',
    indexPath: 'packages/components/index.ts',
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue-next',
    name: 'TDesign Vue Next',
    repo: 'Tencent/tdesign-vue-next',
    branch: 'develop',
    indexPath: 'packages/components/components.ts',
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue',
    name: 'TDesign Vue 2',
    repo: 'Tencent/tdesign-vue',
    branch: 'develop',
    indexPath: 'src/components.ts',
    docPath: (component) => `src/${component}/${component}.md`,
  },
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'tdesign-skills-api-sync',
      Accept: 'text/plain, text/markdown, */*',
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.text();
}

function rawUrl(stack, filePath) {
  return `https://raw.githubusercontent.com/${stack.repo}/${stack.branch}/${filePath}`;
}

function parseComponents(indexSource) {
  const components = [];
  const pattern = /export \* from ['"]\.\/([^'"]+)['"]/g;
  for (const match of indexSource.matchAll(pattern)) {
    const component = match[1];
    if (!component.includes('/') && component !== 'hooks' && component !== 'common' && component !== 'locale') {
      components.push(component);
    }
  }
  return [...new Set(components)].sort((a, b) => a.localeCompare(b));
}

function normalizeMarkdown(content, stack, component) {
  const source = rawUrl(stack, stack.docPath(component));
  const apiContent = extractApiSection(content, source);
  return [
    `# ${component}`,
    '',
    `来源：${stack.name}`,
    '',
    `上游文档：${source}`,
    '',
    apiContent,
    '',
  ].join('\n');
}

function extractApiSection(content, source) {
  const normalized = content.replace(/\r\n?/g, '\n').trim();
  const apiMatch = normalized.match(/^## API\s*$/m);
  if (!apiMatch || apiMatch.index === undefined) {
    throw new Error(`API section not found: ${source}`);
  }
  return normalized.slice(apiMatch.index).trim();
}

async function syncStack(stack) {
  const outDir = new URL(`${stack.key}/`, OUTPUT_ROOT);
  await fs.mkdir(outDir, { recursive: true });

  const indexSource = await fetchText(rawUrl(stack, stack.indexPath));
  const components = parseComponents(indexSource);
  const results = [];

  for (const component of components) {
    const sourcePath = stack.docPath(component);
    const sourceUrl = rawUrl(stack, sourcePath);
    try {
      const content = await fetchText(sourceUrl);
      const outputPath = new URL(`${component}.md`, outDir);
      await fs.writeFile(outputPath, normalizeMarkdown(content, stack, component));
      results.push({ component, status: 'ok' });
    } catch (error) {
      results.push({ component, status: 'missing', error: error.message });
    }
  }

  const ok = results.filter((item) => item.status === 'ok');
  const missing = results.filter((item) => item.status !== 'ok');
  const indexContent = [
    `# ${stack.name} API 文档索引`,
    '',
    `来源仓库：${stack.repo}`,
    '',
    `分支：${stack.branch}`,
    '',
    `同步组件数：${ok.length}`,
    '',
    '## 组件',
    '',
    ...ok.map((item) => `- [${item.component}](./${item.component}.md)`),
    '',
    ...(missing.length
      ? ['## 未同步', '', ...missing.map((item) => `- ${item.component}: ${item.error}`), '']
      : []),
  ].join('\n');
  await fs.writeFile(new URL('index.md', outDir), indexContent);

  return { stack: stack.key, ok: ok.length, missing: missing.length };
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  await fs.access(ROOT);
  const summary = [];
  for (const stack of STACKS) {
    summary.push(await syncStack(stack));
  }
  const summaryContent = [
    '# TDesign Web API 文档索引',
    '',
    '本文档由 `scripts/sync-web-api-docs.mjs` 生成，仅包含 Web 端技术栈。',
    '',
    '## 技术栈',
    '',
    '- [TDesign React](./react/index.md)',
    '- [TDesign Vue Next](./vue-next/index.md)',
    '- [TDesign Vue 2](./vue/index.md)',
    '',
    '## 同步结果',
    '',
    ...summary.map((item) => `- ${item.stack}: ${item.ok} 个成功，${item.missing} 个未同步`),
    '',
    '## 使用约束',
    '',
    '- React 项目只查阅 `react/` 下的 API 文档。',
    '- Vue 3 / Vue Next 项目只查阅 `vue-next/` 下的 API 文档。',
    '- Vue 2 项目只查阅 `vue/` 下的 API 文档。',
    '- 不同技术栈的 props、事件、插槽和组件命名不能混用。',
    '',
  ].join('\n');
  await fs.writeFile(new URL('index.md', OUTPUT_ROOT), summaryContent);
  console.table(summary);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
