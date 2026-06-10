import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url);
const OUTPUT_ROOT = new URL('../api/', import.meta.url);
const META_ROOT = new URL('../meta/', import.meta.url);
const WORKSPACE_PARENT = fileURLToPath(new URL('../', ROOT));
const COMMON_COMPONENTS_SOURCE = {
  repo: 'Tencent/tdesign-common',
  branch: 'develop',
};
const COMMON_COMPONENTS_PATH = 'js/components.ts';
const COMMON_COMPONENTS_URL = rawUrl(COMMON_COMPONENTS_SOURCE, COMMON_COMPONENTS_PATH);
const CONCURRENCY = 4;
const MAX_FETCH_RETRIES = 3;
const execFileAsync = promisify(execFile);
const sourceCache = new Map();

const KNOWN_DIFFERENCES = {
  button: {
    react: '从 tdesign-react 导入 Button，按钮内容常用 children/content，点击事件为 onClick。',
    'vue-next': '使用 <t-button> 或注册组件，按钮内容可走 default/content 插槽，事件为 click。',
    vue2: '使用 <t-button> 或注册组件，事件为 click；按 Vue 2 模板和插槽写法实现。',
    'mobile-react': '从 tdesign-mobile-react 导入 Button，移动端尺寸、形状和主题以移动端 API 为准。',
    'mobile-vue': '使用移动端 Vue 组件写法，按钮事件和插槽以 api/mobile-vue/button.md 为准。',
    miniprogram: '使用 <t-button>，属性和事件采用小程序 kebab-case / bind 写法。',
  },
  dialog: {
    sharedContract: 'api/_shared/dialog.contract.md',
    react: '使用 visible 控制展示，事件为 onConfirm/onCancel/onClose，可用 dialog 或 DialogPlugin 函数式调用。',
    'vue-next': '使用 visible / v-model:visible 控制展示，事件为 confirm/cancel/close，可用 DialogPlugin 或 this.$dialog。',
    vue2: '使用 visible / .sync 或项目既有 v-model 封装控制展示，事件为 confirm/cancel/close，可用 DialogPlugin 或 this.$dialog。',
    'mobile-react': '移动端 Dialog API 独立于 Web，函数式调用和事件以 api/mobile-react/dialog.md 为准。',
    'mobile-vue': '移动端 Vue Dialog API 独立于 Web，按移动端 Vue 文档确认 props、事件和插件。',
    miniprogram: '小程序使用 <t-dialog> 和 bind 事件，不使用 React/Vue 受控写法。',
  },
  form: {
    react: 'Form 可配合 Form.useForm() 实例和 onSubmit/onValuesChange；字段用 FormItem/Form.FormItem。',
    'vue-next': 'Form 使用 data/rules 和 submit/validate 事件；字段用 <t-form-item>。',
    vue2: 'Form 使用 Vue 2 模板、data/rules 和事件绑定；字段用 <t-form-item>。',
    'mobile-react': '移动端表单字段和校验能力以 api/mobile-react/form.md 为准，不照搬 Web Form 实例写法。',
    'mobile-vue': '移动端 Vue 表单按 api/mobile-vue/form.md 的模板、事件和插槽实现。',
    miniprogram: '小程序表单按 <t-form>、<t-form-item> 和 bind 事件实现。',
  },
  layout: {
    react: '常见写法为 Layout、Layout.Header、Layout.Aside、Layout.Content、Layout.Footer。',
    'vue-next': '常见标签为 <t-layout>、<t-header>、<t-aside>、<t-content>、<t-footer>。',
    vue2: '常见标签为 <t-layout>、<t-header>、<t-aside>、<t-content>、<t-footer>。',
    'mobile-react': '移动端 layout 对应 Row/Col 栅格能力，不等同 Web 应用壳 Layout。',
    'mobile-vue': '移动端 Vue layout 对应 Row/Col 栅格能力，不等同 Web 应用壳 Layout。',
    miniprogram: '小程序 layout 对应 t-row/t-col，文档来源映射到 col/README.md。',
  },
  table: {
    react: '列配置使用 columns/自定义渲染函数，事件使用 onXxx。',
    'vue-next': '列配置使用 columns 或模板插槽，自定义单元格按 Vue 插槽写法。',
    vue2: '列配置使用 columns 或 scoped slot，按 Vue 2 插槽语法实现。',
    'mobile-react': '移动端 Table API 和交互密度与 Web 不同，先查 api/mobile-react/table.md。',
    'mobile-vue': '移动端 Vue Table API 和交互密度与 Web 不同，先查 api/mobile-vue/table.md。',
    miniprogram: '小程序 Table 采用小程序属性和 bind 事件，先查 api/miniprogram/table.md。',
  },
};

const STACKS = [
  {
    key: 'react',
    name: 'TDesign React',
    group: 'web',
    mapName: 'WEB_COMPONENT_MAP',
    repo: 'Tencent/tdesign-react',
    branch: 'develop',
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue-next',
    name: 'TDesign Vue Next',
    group: 'web',
    mapName: 'WEB_COMPONENT_MAP',
    repo: 'Tencent/tdesign-vue-next',
    branch: 'develop',
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue2',
    name: 'TDesign Vue 2',
    group: 'web',
    mapName: 'WEB_COMPONENT_MAP',
    repo: 'Tencent/tdesign-vue',
    branch: 'develop',
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'mobile-react',
    name: 'TDesign Mobile React',
    group: 'mobile',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-mobile-react',
    branch: 'develop',
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'mobile-vue',
    name: 'TDesign Mobile Vue',
    group: 'mobile',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-mobile-vue',
    branch: 'develop',
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'miniprogram',
    name: 'TDesign Miniprogram',
    group: 'miniprogram',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-miniprogram',
    branch: 'develop',
    docPath: (component) => {
      const pathMap = {
        layout: 'packages/components/col/README.md',
        typography: 'packages/components/paragraph/README.md',
      };
      return pathMap[component] ?? `packages/components/${component}/README.md`;
    },
  },
];

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_FETCH_RETRIES; attempt += 1) {
    try {
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
    } catch (error) {
      lastError = error;
      if (attempt < MAX_FETCH_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 500));
      }
    }
  }
  throw lastError;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function repoName(repo) {
  return repo.split('/').pop();
}

async function runGit(repoPath, args) {
  try {
    await execFileAsync('git', args, { cwd: repoPath });
  } catch (error) {
    const output = [error.stdout, error.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`git ${args.join(' ')} failed in ${repoPath}${output ? `\n${output}` : ''}`);
  }
}

async function resolveSource(source) {
  const cacheKey = `${source.repo}#${source.branch}`;
  if (sourceCache.has(cacheKey)) {
    return sourceCache.get(cacheKey);
  }

  const localPath = path.join(WORKSPACE_PARENT, repoName(source.repo));
  const resolvedSource = { ...source, localPath: null };
  if (await pathExists(localPath)) {
    try {
      await runGit(localPath, ['checkout', source.branch]);
      await runGit(localPath, ['pull', '--ff-only']);
      resolvedSource.localPath = localPath;
    } catch (error) {
      console.warn(`[sync-api-docs] 本地仓库不可用，回退到 raw URL：${localPath}\n${error.message}`);
    }
  }

  sourceCache.set(cacheKey, resolvedSource);
  return resolvedSource;
}

async function readSource(source, filePath) {
  if (source.localPath) {
    try {
      return await fs.readFile(path.join(source.localPath, filePath), 'utf8');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }
  return fetchText(rawUrl(source, filePath));
}

function rawUrl(stack, filePath) {
  return `https://raw.githubusercontent.com/${stack.repo}/${stack.branch}/${filePath}`;
}

function parseComponentMap(source, mapName) {
  const mapMatch = source.match(new RegExp(`export const ${mapName}: Record<string, string\\[\\]> = \\{([\\s\\S]*?)\\n\\};`));
  if (!mapMatch) {
    throw new Error(`Component map not found: ${mapName}`);
  }

  const components = [];
  const pattern = /^\s*['"]?([a-z0-9-]+)['"]?:\s*\[/gm;
  for (const match of mapMatch[1].matchAll(pattern)) {
    components.push(match[1]);
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
  const apiMatch = normalized.match(/^#{2,4}\s+API\s*$/m);
  if (!apiMatch || apiMatch.index === undefined) {
    throw new Error(`API section not found: ${source}`);
  }
  return normalized.slice(apiMatch.index).trim();
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  });
  await Promise.all(workers);
  return results;
}

async function syncStack(stack, componentMaps) {
  const outDir = new URL(`${stack.key}/`, OUTPUT_ROOT);
  const source = await resolveSource(stack);
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const components = componentMaps[stack.mapName];
  const results = await mapLimit(components, CONCURRENCY, async (component) => {
    const sourcePath = stack.docPath(component);
    const sourceUrl = rawUrl(stack, sourcePath);
    try {
      const content = await readSource(source, sourcePath);
      const outputPath = new URL(`${component}.md`, outDir);
      await fs.writeFile(outputPath, normalizeMarkdown(content, stack, component));
      return { component, status: 'ok' };
    } catch (error) {
      return { component, status: 'missing', error: error.message };
    }
  });

  const ok = results.filter((item) => item.status === 'ok');
  const missing = results.filter((item) => item.status !== 'ok');
  const indexContent = [
    `# ${stack.name} API 文档索引`,
    '',
    `来源仓库：${stack.repo}`,
    '',
    `分支：${stack.branch}`,
    '',
    `组件映射：${stack.mapName}`,
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

  return {
    stack: stack.key,
    group: stack.group,
    ok: ok.length,
    missing: missing.length,
    okComponents: ok.map((item) => item.component),
    missingComponents: missing.map((item) => item.component),
  };
}

function intersect(lists) {
  if (!lists.length) {
    return [];
  }
  return lists[0].filter((item) => lists.every((list) => list.includes(item))).sort((a, b) => a.localeCompare(b));
}

function union(lists) {
  return [...new Set(lists.flat())].sort((a, b) => a.localeCompare(b));
}

async function writeStackMatrix(summary, componentMaps) {
  const componentsByStack = Object.fromEntries(summary.map((item) => [item.stack, item.okComponents]));
  const missingByStack = Object.fromEntries(summary.map((item) => [item.stack, item.missingComponents]));
  const webStacks = STACKS.filter((stack) => stack.group === 'web').map((stack) => stack.key);
  const mobileStacks = STACKS.filter((stack) => stack.group === 'mobile').map((stack) => stack.key);
  const miniprogramStacks = STACKS.filter((stack) => stack.group === 'miniprogram').map((stack) => stack.key);
  const allStacks = STACKS.map((stack) => stack.key);
  const matrix = {
    schemaVersion: 2,
    source: 'api/*/index.md generated by scripts/sync-api-docs.mjs',
    componentMapSource: COMMON_COMPONENTS_URL,
    stacks: allStacks,
    stackGroups: {
      web: webStacks,
      mobile: mobileStacks,
      miniprogram: miniprogramStacks,
    },
    componentMaps: {
      web: {
        name: 'WEB_COMPONENT_MAP',
        count: componentMaps.WEB_COMPONENT_MAP.length,
      },
      mobile: {
        name: 'MOBILE_COMPONENT_MAP',
        count: componentMaps.MOBILE_COMPONENT_MAP.length,
      },
    },
    notes: [
      'Web 组件范围来自 tdesign-common 的 WEB_COMPONENT_MAP。',
      '移动端和小程序组件范围来自 tdesign-common 的 MOBILE_COMPONENT_MAP。',
      'React API 使用 JSX、className/style、onXxx 事件和 children/TNode。',
      'Vue Next 与 Vue 2 API 使用模板、kebab-case 事件、default/具名插槽和 v-model 约定。',
      '移动端 React/Vue API 不等同 Web API，必须查 mobile-react 或 mobile-vue 目录。',
      '小程序 API 使用 t-* 组件、kebab-case 属性、bind 事件和 usingComponents 引入。',
    ],
    coverage: {
      allStacks: intersect(allStacks.map((stack) => componentsByStack[stack])),
      allWebStacks: intersect(webStacks.map((stack) => componentsByStack[stack])),
      allMobileStacks: intersect([...mobileStacks, ...miniprogramStacks].map((stack) => componentsByStack[stack])),
      webOnly: componentMaps.WEB_COMPONENT_MAP.filter((component) => !componentMaps.MOBILE_COMPONENT_MAP.includes(component)),
      mobileOnly: componentMaps.MOBILE_COMPONENT_MAP.filter((component) => !componentMaps.WEB_COMPONENT_MAP.includes(component)),
      byStack: componentsByStack,
      missingByStack,
      allSyncedComponents: union(Object.values(componentsByStack)),
    },
    knownDifferences: KNOWN_DIFFERENCES,
  };

  await fs.mkdir(META_ROOT, { recursive: true });
  await fs.writeFile(new URL('stack-matrix.json', META_ROOT), `${JSON.stringify(matrix, null, 2)}\n`);
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  await fs.access(ROOT);
  const commonSource = await readSource(await resolveSource(COMMON_COMPONENTS_SOURCE), COMMON_COMPONENTS_PATH);
  const componentMaps = {
    WEB_COMPONENT_MAP: parseComponentMap(commonSource, 'WEB_COMPONENT_MAP'),
    MOBILE_COMPONENT_MAP: parseComponentMap(commonSource, 'MOBILE_COMPONENT_MAP'),
  };
  const summary = [];
  for (const stack of STACKS) {
    summary.push(await syncStack(stack, componentMaps));
  }
  const summaryContent = [
    '# TDesign API 文档索引',
    '',
    '本文档由 `scripts/sync-api-docs.mjs` 生成，组件范围来自 `tdesign-common/js/components.ts`。',
    '',
    '## Web 技术栈',
    '',
    '- [TDesign React](./react/index.md)',
    '- [TDesign Vue Next](./vue-next/index.md)',
    '- [TDesign Vue 2](./vue2/index.md)',
    '',
    '## 移动端与小程序',
    '',
    '- [TDesign Mobile React](./mobile-react/index.md)',
    '- [TDesign Mobile Vue](./mobile-vue/index.md)',
    '- [TDesign Miniprogram](./miniprogram/index.md)',
    '',
    '## 同步结果',
    '',
    ...summary.map((item) => `- ${item.stack}: ${item.ok} 个成功，${item.missing} 个未同步`),
    '',
    '## 使用约束',
    '',
    '- React 项目只查阅 `react/` 下的 API 文档。',
    '- Vue 3 / Vue Next 项目只查阅 `vue-next/` 下的 API 文档。',
    '- Vue 2 项目只查阅 `vue2/` 下的 API 文档。',
    '- 移动端 React 项目只查阅 `mobile-react/` 下的 API 文档。',
    '- 移动端 Vue 项目只查阅 `mobile-vue/` 下的 API 文档。',
    '- 小程序项目只查阅 `miniprogram/` 下的 API 文档。',
    '- 不同技术栈、移动端和小程序的 props、事件、插槽、组件命名和引入方式不能混用。',
    '',
  ].join('\n');
  await fs.writeFile(new URL('index.md', OUTPUT_ROOT), summaryContent);
  await writeStackMatrix(summary, componentMaps);
  console.table(summary);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
