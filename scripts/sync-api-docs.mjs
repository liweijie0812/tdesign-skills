import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url);
const OUTPUT_ROOT = new URL('../skills/', import.meta.url);
const META_ROOT = new URL('../skills/tdesign-docs/references/meta/', import.meta.url);
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
    'mobile-vue': '使用移动端 Vue 组件写法，按钮事件和插槽以 tdesign-mobile-vue/references/api/button/index.md 为准。',
    miniprogram: '使用 <t-button>，属性和事件采用小程序 kebab-case / bind 写法。',
    uniapp: '使用 <t-button>，属性采用 kebab-case，事件采用 @click Vue 语法，通过 easycom 自动引入。',
  },
  dialog: {
    sharedContract: 'tdesign-docs/references/api/shared/dialog/contract.md',
    react: '使用 visible 控制展示，事件为 onConfirm/onCancel/onClose，可用 dialog 或 DialogPlugin 函数式调用。',
    'vue-next': '使用 visible / v-model:visible 控制展示，事件为 confirm/cancel/close，可用 DialogPlugin 或 this.$dialog。',
    vue2: '使用 visible / .sync 或项目既有 v-model 封装控制展示，事件为 confirm/cancel/close，可用 DialogPlugin 或 this.$dialog。',
    'mobile-react': '移动端 Dialog API 独立于 Web，函数式调用和事件以 tdesign-mobile-react/references/api/dialog/index.md 为准。',
    'mobile-vue': '移动端 Vue Dialog API 独立于 Web，按移动端 Vue 文档确认 props、事件和插件。',
    miniprogram: '小程序使用 <t-dialog> 和 bind 事件，不使用 React/Vue 受控写法。',
    uniapp: '使用 <t-dialog>，属性 kebab-case，事件 @confirm/@cancel/@close Vue 语法。',
  },
  form: {
    react: 'Form 可配合 Form.useForm() 实例和 onSubmit/onValuesChange；字段用 FormItem/Form.FormItem。',
    'vue-next': 'Form 使用 data/rules 和 submit/validate 事件；字段用 <t-form-item>。',
    vue2: 'Form 使用 Vue 2 模板、data/rules 和事件绑定；字段用 <t-form-item>。',
    'mobile-react': '移动端表单字段和校验能力以 tdesign-mobile-react/references/api/form/index.md 为准，不照搬 Web Form 实例写法。',
    'mobile-vue': '移动端 Vue 表单按 tdesign-mobile-vue/references/api/form/index.md 的模板、事件和插槽实现。',
    miniprogram: '小程序表单按 <t-form>、<t-form-item> 和 bind 事件实现。',
    uniapp: 'uni-app 表单按 <t-form>、<t-form-item> 和 @submit/@validate Vue 事件实现。',
  },
  layout: {
    react: '常见写法为 Layout、Layout.Header、Layout.Aside、Layout.Content、Layout.Footer。',
    'vue-next': '常见标签为 <t-layout>、<t-header>、<t-aside>、<t-content>、<t-footer>。',
    vue2: '常见标签为 <t-layout>、<t-header>、<t-aside>、<t-content>、<t-footer>。',
    'mobile-react': '移动端 layout 对应 Row/Col 栅格能力，不等同 Web 应用壳 Layout。',
    'mobile-vue': '移动端 Vue layout 对应 Row/Col 栅格能力，不等同 Web 应用壳 Layout。',
    miniprogram: '小程序 layout 对应 t-row/t-col，文档来源映射到 col/README.md。',
    uniapp: 'uni-app layout 对应 t-row/t-col 栅格能力，不等同 Web 应用壳 Layout。',
  },
  table: {
    react: '列配置使用 columns/自定义渲染函数，事件使用 onXxx。',
    'vue-next': '列配置使用 columns 或模板插槽，自定义单元格按 Vue 插槽写法。',
    vue2: '列配置使用 columns 或 scoped slot，按 Vue 2 插槽语法实现。',
    'mobile-react': '移动端 Table API 和交互密度与 Web 不同，先查 tdesign-mobile-react/references/api/table/index.md。',
    'mobile-vue': '移动端 Vue Table API 和交互密度与 Web 不同，先查 tdesign-mobile-vue/references/api/table/index.md。',
    miniprogram: '小程序 Table 采用小程序属性和 bind 事件，先查 tdesign-miniprogram/references/api/table/index.md。',
    uniapp: 'uni-app Table 属性 kebab-case，事件 @row-click 等 Vue 语法，先查 tdesign-uniapp/references/api/table/index.md。',
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
    componentDirPath: (component) => `packages/components/${component}`,
    commonSourceFiles: [{ sourcePath: 'packages/components/common.ts', outputPath: 'common.ts' }],
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue-next',
    name: 'TDesign Vue Next',
    group: 'web',
    mapName: 'WEB_COMPONENT_MAP',
    repo: 'Tencent/tdesign-vue-next',
    branch: 'develop',
    componentDirPath: (component) => `packages/components/${component}`,
    commonSourceFiles: [{ sourcePath: 'packages/components/common.ts', outputPath: 'common.ts' }],
    docPath: (component) => `packages/components/${component}/${component}.md`,
  },
  {
    key: 'vue2',
    name: 'TDesign Vue 2',
    group: 'web',
    mapName: 'WEB_COMPONENT_MAP',
    repo: 'Tencent/tdesign-vue',
    branch: 'develop',
    componentDirPath: (component) => `src/${component}`,
    commonSourceFiles: [{ sourcePath: 'src/common.ts', outputPath: 'common.ts' }],
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'mobile-react',
    name: 'TDesign Mobile React',
    group: 'mobile',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-mobile-react',
    branch: 'develop',
    componentDirPath: (component) => `src/${component}`,
    commonSourceFiles: [{ sourcePath: 'src/common.ts', outputPath: 'common.ts' }],
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'mobile-vue',
    name: 'TDesign Mobile Vue',
    group: 'mobile',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-mobile-vue',
    branch: 'develop',
    componentDirPath: (component) => `src/${component}`,
    commonSourceFiles: [{ sourcePath: 'src/common.ts', outputPath: 'common.ts' }],
    docPath: (component) => `src/${component}/${component}.md`,
  },
  {
    key: 'miniprogram',
    name: 'TDesign Miniprogram',
    group: 'miniprogram',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-miniprogram',
    branch: 'develop',
    componentDirPath: (component) => `packages/components/${component}`,
    commonSourceFiles: [{ sourcePath: 'packages/components/common/common.ts', outputPath: 'common/common.ts' }],
    docPath: (component) => {
      const pathMap = {
        layout: 'packages/components/col/README.md',
        typography: 'packages/components/paragraph/README.md',
      };
      return pathMap[component] ?? `packages/components/${component}/README.md`;
    },
  },
  {
    key: 'uniapp',
    name: 'TDesign UniApp',
    group: 'miniprogram',
    mapName: 'MOBILE_COMPONENT_MAP',
    repo: 'Tencent/tdesign-miniprogram',
    branch: 'develop',
    componentDirPath: (component) => `packages/components/${component}`,
    commonSourceFiles: [{ sourcePath: 'packages/components/common/common.ts', outputPath: 'common/common.ts' }],
    docPath: (component) => {
      const pathMap = {
        layout: 'packages/components/col/README.md',
        typography: 'packages/components/paragraph/README.md',
      };
      return pathMap[component] ?? `packages/components/${component}/README.md`;
    },
  },
];

const SKILL_BY_STACK = {
  react: 'tdesign-react',
  'vue-next': 'tdesign-vue-next',
  vue2: 'tdesign-vue2',
  'mobile-react': 'tdesign-mobile-react',
  'mobile-vue': 'tdesign-mobile-vue',
  miniprogram: 'tdesign-miniprogram',
  uniapp: 'tdesign-uniapp',
};

const EXAMPLE_COMPONENT_ALIASES = {
  aside: 'layout',
  col: 'grid',
  content: 'layout',
  descriptionsitem: 'descriptions',
  footer: 'layout',
  formitem: 'form',
  headmenu: 'menu',
  header: 'layout',
  layoutheader: 'layout',
  menuitem: 'menu',
  row: 'grid',
  submenu: 'menu',
  timelineitem: 'timeline',
};

function stackOutputDir(stack) {
  return new URL(`${SKILL_BY_STACK[stack.key]}/references/api/`, OUTPUT_ROOT);
}

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

async function fetchOptionalText(url) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_FETCH_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'tdesign-skills-api-sync',
          Accept: 'text/plain, text/markdown, */*',
        },
      });
      if (response.status === 404) {
        return null;
      }
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

async function readOptionalSource(source, filePath) {
  if (source.localPath) {
    try {
      return await fs.readFile(path.join(source.localPath, filePath), 'utf8');
    } catch (error) {
      if (error.code === 'ENOENT') {
        return fetchOptionalText(rawUrl(source, filePath));
      }
      throw error;
    }
  }

  return fetchOptionalText(rawUrl(source, filePath));
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

function parseFrontmatterDescription(content) {
  const frontmatterMatch = content.replace(/\r\n?/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return '';
  }

  const descriptionMatch = frontmatterMatch[1].match(/^description:\s*(.*?)\s*$/m);
  if (!descriptionMatch) {
    return '';
  }

  const description = descriptionMatch[1].trim();
  if (!description) {
    return '';
  }

  const quote = description[0];
  if ((quote === '"' || quote === "'") && description.endsWith(quote)) {
    return description.slice(1, -1).trim();
  }

  return description;
}

async function collectComponentDescriptions(source, componentMaps) {
  const descriptions = {
    web: {},
    mobile: {},
  };
  const groups = {
    web: componentMaps.WEB_COMPONENT_MAP,
    mobile: componentMaps.MOBILE_COMPONENT_MAP,
  };

  for (const [group, components] of Object.entries(groups)) {
    await mapLimit(components, CONCURRENCY, async (component) => {
      const content = await readOptionalSource(source, `docs/${group}/api/${component}.md`);
      const description = content ? parseFrontmatterDescription(content) : '';
      if (description) {
        descriptions[group][component] = description;
      }
    });
  }

  return descriptions;
}

function commonDocsGroup(stack) {
  return stack.group === 'web' ? 'web' : 'mobile';
}

function normalizeMarkdown(content, stack, component, stackComponents, sourceFiles, componentDescription) {
  const source = rawUrl(stack, stack.docPath(component));
  const apiContent = extractApiSection(content, source);
  const rewrittenApiContent = rewriteApiLinks(rewriteSourceLinks(rewriteCommonLinks(apiContent, stack), stack, component, sourceFiles), component, stackComponents);
  return [
    `# ${component}`,
    '',
    `来源：${stack.name}`,
    '',
    ...(componentDescription ? [`组件简介：${componentDescription}`, ''] : []),
    `上游文档：${source}`,
    '',
    rewrittenApiContent,
    '',
  ].join('\n');
}

function kebabCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function unique(items) {
  return [...new Set(items)];
}

function normalizeExampleComponentName(name) {
  const normalizedName = name.trim().replace(/[`*]/g, '');
  if (!normalizedName) return '';
  const aliasName = normalizedName.toLowerCase();
  const componentName = normalizedName.replace(/^T(?=[A-Z])/, '');
  const tPrefixAliasName = componentName.toLowerCase();
  return EXAMPLE_COMPONENT_ALIASES[aliasName] ?? EXAMPLE_COMPONENT_ALIASES[tPrefixAliasName] ?? kebabCase(componentName);
}

async function walkExampleFiles(dirUrl) {
  let entries;
  try {
    entries = await fs.readdir(dirUrl, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const entryUrl = new URL(entry.name, dirUrl);
    if (entry.isDirectory()) {
      files.push(...(await walkExampleFiles(new URL(`${entry.name}/`, dirUrl))));
    } else if (entry.isFile() && /\.(vue|tsx|jsx|ts|js|md)$/.test(entry.name)) {
      files.push(entryUrl);
    }
  }
  return files;
}

function parseExampleComponents(content, stackComponents) {
  const componentSet = new Set(stackComponents);
  const covered = new Set();
  const pattern = /覆盖组件[：:]\s*([^\n\r*]+)/g;
  for (const match of content.matchAll(pattern)) {
    for (const rawName of match[1].split(/[、,，]/)) {
      const component = normalizeExampleComponentName(rawName);
      if (componentSet.has(component)) {
        covered.add(component);
      }
    }
  }
  return covered;
}

async function collectExampleComponents(stack, stackComponents) {
  const examplesDir = new URL(`${SKILL_BY_STACK[stack]}/references/examples/`, OUTPUT_ROOT);
  const files = await walkExampleFiles(examplesDir);
  const covered = new Set();
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    for (const component of parseExampleComponents(content, stackComponents)) {
      covered.add(component);
    }
  }
  return [...covered].sort((a, b) => a.localeCompare(b));
}

function githubUrl(stack, filePath, mode = 'blob') {
  return `https://github.com/${stack.repo}/${mode}/${stack.branch}/${filePath}`;
}

function rewriteCommonLinks(content, stack) {
  let rewritten = content;
  for (const file of stack.commonSourceFiles ?? []) {
    const localPath = `../${file.outputPath}`;
    for (const sourceUrl of [githubUrl(stack, file.sourcePath), githubUrl(stack, file.sourcePath, 'tree'), rawUrl(stack, file.sourcePath)]) {
      rewritten = rewritten.replaceAll(sourceUrl, localPath);
    }
    rewritten = rewritten.replace(/\[通用类型定义\]\(https:\/\/github\.com\/Tencent\/[^)]+\/common(?:\/common)?\.ts\)/g, `[通用类型定义](${localPath})`);
  }
  return rewritten;
}

function localSourcePath(component, outputPath) {
  const componentPrefix = `${component}/`;
  if (outputPath.startsWith(componentPrefix)) {
    return `./${outputPath.slice(componentPrefix.length)}`;
  }
  return `../${outputPath}`;
}

function rewriteSourceLinks(content, stack, component, sourceFiles) {
  let rewritten = content;
  const sourceFilesByOutputPath = new Map(sourceFiles.map((file) => [file.outputPath, file]));
  for (const file of sourceFiles) {
    const localPath = localSourcePath(component, file.outputPath);
    for (const sourceUrl of [githubUrl(stack, file.sourcePath), githubUrl(stack, file.sourcePath, 'tree'), rawUrl(stack, file.sourcePath)]) {
      rewritten = rewritten.replaceAll(sourceUrl, localPath);
    }
  }
  return rewritten.replace(
    /\[详细类型定义\]\(https:\/\/(?:github\.com\/Tencent\/[^/]+\/(?:blob|tree)\/[^/]+|raw\.githubusercontent\.com\/Tencent\/[^/]+\/[^/]+)\/(?:packages\/components|src)\/([a-z0-9-]+)\/(type|props)\.ts\)/g,
    (match, targetComponent, fileBase) => {
      const sourceFile = sourceFilesByOutputPath.get(`${targetComponent}/${fileBase}.ts`);
      const fallbackSourceFile = sourceFilesByOutputPath.get(`${component}/${fileBase}.ts`);
      const localSourceFile = sourceFile ?? fallbackSourceFile;
      return localSourceFile ? `[详细类型定义](${localSourcePath(component, localSourceFile.outputPath)})` : match;
    }
  );
}

function inferSourceComponentsFromApi(content) {
  return unique(
    [...content.matchAll(/^#{3,4}\s+([A-Z][A-Za-z0-9]+)\s+(?:Props|Events|Slots|External Classes|CSS Variables)\b/gm)].map((match) =>
      kebabCase(match[1])
    )
  );
}

function rewriteApiLinks(content, component, stackComponents) {
  const componentSet = new Set(stackComponents);
  const sameDocumentComponents = new Set(inferSourceComponentsFromApi(content));
  return content.replace(/\]\(\.\/([a-z0-9-]+)(?:\?[^)#]*)?(#[^)]+)?\)/g, (match, target, hash = '') => {
    if (target === component || sameDocumentComponents.has(target)) {
      return `](./index.md${hash})`;
    }
    if (componentSet.has(target)) {
      return `](../${target}/index.md${hash})`;
    }
    return match;
  });
}

async function hasAnySourceFile(source, dirPath) {
  const files = await Promise.all(['type.ts', 'props.ts'].map((fileName) => readOptionalSource(source, `${dirPath}/${fileName}`)));
  return files.some((content) => content !== null);
}

async function resolveSourceDirs(stack, source, component, content) {
  if (stack.key !== 'miniprogram' && stack.key !== 'uniapp') {
    return [
      {
        label: component,
        dirPath: stack.componentDirPath(component),
      },
    ];
  }

  const candidates = unique([component, ...inferSourceComponentsFromApi(content)]);
  const sourceDirs = [];
  for (const candidate of candidates) {
    const dirPath = stack.componentDirPath(candidate);
    if (await hasAnySourceFile(source, dirPath)) {
      sourceDirs.push({
        label: candidate,
        dirPath,
      });
    }
  }

  return sourceDirs.length
    ? sourceDirs
    : [
        {
          label: component,
          dirPath: stack.componentDirPath(component),
        },
      ];
}

function componentSourcePaths(sourceDirs, component) {
  return sourceDirs.flatMap((sourceDir) =>
    ['type.ts', 'props.ts'].map((fileName) => ({
      fileName,
      displayName: sourceDir.label === component ? fileName : `${sourceDir.label}/${fileName}`,
      outputPath: `${sourceDir.label}/${fileName}`,
      sourcePath: `${sourceDir.dirPath}/${fileName}`,
    }))
  );
}

function inferLinkedSourceFiles(stack, content) {
  const sourcePathPrefix = stack.componentDirPath('').replace(/\/$/, '');
  const sourceFiles = [];
  const pattern = /\[详细类型定义\]\(https:\/\/(?:github\.com\/Tencent\/[^/]+\/(?:blob|tree)\/[^/]+|raw\.githubusercontent\.com\/Tencent\/[^/]+\/[^/]+)\/((?:packages\/components|src)\/([a-z0-9-]+)\/(type|props)\.ts)\)/g;
  for (const match of content.matchAll(pattern)) {
    const [, sourcePath, componentName, fileBase] = match;
    if (!sourcePath.startsWith(sourcePathPrefix)) {
      continue;
    }
    sourceFiles.push({
      fileName: `${fileBase}.ts`,
      displayName: `${componentName}/${fileBase}.ts`,
      outputPath: `${componentName}/${fileBase}.ts`,
      sourcePath,
    });
  }
  return sourceFiles;
}

function uniqueComponentSourcePaths(sourcePaths) {
  const seen = new Set();
  return sourcePaths.filter((file) => {
    if (seen.has(file.outputPath)) {
      return false;
    }
    seen.add(file.outputPath);
    return true;
  });
}

async function writeSourceFile(source, sourcePath, outputPath, outDir) {
  const content = await readOptionalSource(source, sourcePath);
  if (content === null) {
    return null;
  }
  await fs.mkdir(new URL(path.dirname(outputPath), outDir), { recursive: true });
  await fs.writeFile(new URL(outputPath, outDir), content);
  return content;
}

async function syncCommonSourceFiles(stack, source, outDir) {
  const commonSourceFiles = [];
  for (const file of stack.commonSourceFiles ?? []) {
    const content = await writeSourceFile(source, file.sourcePath, file.outputPath, outDir);
    if (content !== null) {
      commonSourceFiles.push({
        name: path.basename(file.outputPath),
        outputPath: file.outputPath,
        sourcePath: file.sourcePath,
        sourceUrl: rawUrl(stack, file.sourcePath),
      });
    }
  }
  return commonSourceFiles;
}

async function syncComponentSourceFiles(stack, source, component, content, outDir) {
  const sourceDirs = await resolveSourceDirs(stack, source, component, content);
  const sourceFiles = [];
  const missingSourceFiles = [];

  const files = uniqueComponentSourcePaths([...componentSourcePaths(sourceDirs, component), ...inferLinkedSourceFiles(stack, content)]);
  for (const file of files) {
    try {
      const content = await writeSourceFile(source, file.sourcePath, file.outputPath, outDir);
      if (content === null) {
        missingSourceFiles.push({
          name: file.fileName,
          displayName: file.displayName,
          outputPath: file.outputPath,
          sourcePath: file.sourcePath,
          error: 'not found',
        });
        continue;
      }
      sourceFiles.push({
        name: file.fileName,
        displayName: file.displayName,
        outputPath: file.outputPath,
        sourcePath: file.sourcePath,
        sourceUrl: rawUrl(stack, file.sourcePath),
      });
    } catch (error) {
      missingSourceFiles.push({
        name: file.fileName,
        displayName: file.displayName,
        outputPath: file.outputPath,
        sourcePath: file.sourcePath,
        error: error.message,
      });
    }
  }

  return { sourceFiles, missingSourceFiles };
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

async function syncStack(stack, componentMaps, componentDescriptions) {
  const outDir = stackOutputDir(stack);
  const source = await resolveSource(stack);
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });
  const commonSourceFiles = await syncCommonSourceFiles(stack, source, outDir);

  const components = componentMaps[stack.mapName];
  const descriptions = componentDescriptions[commonDocsGroup(stack)] ?? {};
  const results = await mapLimit(components, CONCURRENCY, async (component) => {
    const sourcePath = stack.docPath(component);
    const sourceUrl = rawUrl(stack, sourcePath);
    try {
      const content = await readSource(source, sourcePath);
      const componentOutDir = new URL(`${component}/`, outDir);
      const outputPath = new URL('index.md', componentOutDir);
      const { sourceFiles, missingSourceFiles } = await syncComponentSourceFiles(stack, source, component, content, outDir);
      await fs.mkdir(componentOutDir, { recursive: true });
      await fs.writeFile(outputPath, normalizeMarkdown(content, stack, component, components, sourceFiles, descriptions[component]));
      return { component, status: 'ok', sourceFiles, missingSourceFiles };
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
    ...(commonSourceFiles.length
      ? ['## 公共类型源', '', ...commonSourceFiles.map((file) => `- [${file.outputPath}](./${file.outputPath})`), '']
      : []),
    '## 组件',
    '',
    ...ok.map((item) => {
      const sourceLinks = item.sourceFiles.map((file) => `[${file.displayName}](./${file.outputPath})`);
      return `- [${item.component}](./${item.component}/index.md)${sourceLinks.length ? `：${sourceLinks.join('、')}` : ''}`;
    }),
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
    commonSourceFiles: commonSourceFiles.map((file) => file.outputPath),
    sourceFilesByComponent: Object.fromEntries(ok.map((item) => [item.component, item.sourceFiles.map((file) => file.outputPath)])),
    missingSourceFilesByComponent: Object.fromEntries(
      ok
        .filter((item) => item.missingSourceFiles.length)
        .map((item) => [item.component, item.missingSourceFiles.map((file) => file.outputPath)])
    ),
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
  const sourceFilesByStack = Object.fromEntries(summary.map((item) => [item.stack, item.sourceFilesByComponent]));
  const missingSourceFilesByStack = Object.fromEntries(summary.map((item) => [item.stack, item.missingSourceFilesByComponent]));
  const commonSourceFilesByStack = Object.fromEntries(summary.map((item) => [item.stack, item.commonSourceFiles]));
  const hasExampleByStack = Object.fromEntries(
    await Promise.all(
      summary.map(async (item) => {
        const exampleComponents = new Set(await collectExampleComponents(item.stack, item.okComponents));
        return [item.stack, Object.fromEntries(item.okComponents.map((component) => [component, exampleComponents.has(component)]))];
      })
    )
  );
  const webStacks = STACKS.filter((stack) => stack.group === 'web').map((stack) => stack.key);
  const mobileStacks = STACKS.filter((stack) => stack.group === 'mobile').map((stack) => stack.key);
  const miniprogramStacks = STACKS.filter((stack) => stack.group === 'miniprogram').map((stack) => stack.key);
  const allStacks = STACKS.map((stack) => stack.key);

  function pick(obj) {
    return Object.fromEntries(allStacks.map((s) => [s, obj[s]]).filter(([, v]) => v !== undefined));
  }

  await fs.mkdir(META_ROOT, { recursive: true });

  // Shared metadata: cross-stack overview + notes + knownDifferences
  const shared = {
    schemaVersion: 3,
    source: 'skills/tdesign-*/references/api/index.md generated by scripts/sync-api-docs.mjs',
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
      '技术栈目录下的组件和子组件 type.ts / props.ts 是从上游同步的类型源文件，API 表不够精确时优先查这些源文件。',
      '各技术栈目录下的 common.ts 或 common/common.ts 是类型源文件依赖的公共类型定义。',
      '按端分文件存储各栈的组件列表、类型源等明细数据：stack-matrix-web.json、stack-matrix-mobile.json、stack-matrix-miniprogram.json。',
    ],
    coverage: {
      allStacks: intersect(allStacks.map((stack) => componentsByStack[stack])),
      allWebStacks: intersect(webStacks.map((stack) => componentsByStack[stack])),
      allMobileStacks: intersect([...mobileStacks, ...miniprogramStacks].map((stack) => componentsByStack[stack])),
      webOnly: componentMaps.WEB_COMPONENT_MAP.filter((component) => !componentMaps.MOBILE_COMPONENT_MAP.includes(component)),
      mobileOnly: componentMaps.MOBILE_COMPONENT_MAP.filter((component) => !componentMaps.WEB_COMPONENT_MAP.includes(component)),
      allSyncedComponents: union(Object.values(componentsByStack)),
    },
    knownDifferences: KNOWN_DIFFERENCES,
  };
  await fs.writeFile(new URL('stack-matrix.json', META_ROOT), `${JSON.stringify(shared, null, 2)}\n`);

  // Per-platform files: byStack, sourceFilesByStack, etc.
  const groups = {
    web: webStacks,
    mobile: mobileStacks,
    miniprogram: miniprogramStacks,
  };
  for (const [group, stacks] of Object.entries(groups)) {
    const pickStacks = (obj) => Object.fromEntries(stacks.map((s) => [s, obj[s]]).filter(([, v]) => v !== undefined));
    const perPlatform = {
      schemaVersion: 3,
      source: shared.source,
      stacks,
      coverage: {
        byStack: pickStacks(componentsByStack),
        hasExample: {
          description: 'Whether each component has at least one local template under skills/<skill>/references/examples/.',
          byStack: pickStacks(hasExampleByStack),
        },
        missingByStack: pickStacks(missingByStack),
        commonSourceFilesByStack: pickStacks(commonSourceFilesByStack),
        sourceFilesByStack: pickStacks(sourceFilesByStack),
        missingSourceFilesByStack: pickStacks(missingSourceFilesByStack),
      },
    };
    await fs.writeFile(new URL(`stack-matrix-${group}.json`, META_ROOT), `${JSON.stringify(perPlatform, null, 2)}\n`);
  }
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  await fs.access(ROOT);
  const commonSource = await readSource(await resolveSource(COMMON_COMPONENTS_SOURCE), COMMON_COMPONENTS_PATH);
  const componentMaps = {
    WEB_COMPONENT_MAP: parseComponentMap(commonSource, 'WEB_COMPONENT_MAP'),
    MOBILE_COMPONENT_MAP: parseComponentMap(commonSource, 'MOBILE_COMPONENT_MAP'),
  };
  const componentDescriptions = await collectComponentDescriptions(await resolveSource(COMMON_COMPONENTS_SOURCE), componentMaps);
  const summary = [];
  for (const stack of STACKS) {
    summary.push(await syncStack(stack, componentMaps, componentDescriptions));
  }
  const summaryContent = [
    '# TDesign API 文档索引',
    '',
    '本文档由 `../../../../scripts/sync-api-docs.mjs` 生成，组件范围来自 `tdesign-common/js/components.ts`。',
    '',
    '每个技术栈 skill 的 `references/api/<component>/index.md` 是 API Markdown；若上游存在 `type.ts` 或 `props.ts`，会同步到同一技术栈目录作为精确类型源。公共类型定义同步到 `references/api/common.ts` 或 `references/api/common/common.ts`。',
    '',
    '## Web 技术栈',
    '',
    '- [TDesign React](../../../tdesign-react/references/api/index.md)',
    '- [TDesign Vue Next](../../../tdesign-vue-next/references/api/index.md)',
    '- [TDesign Vue 2](../../../tdesign-vue2/references/api/index.md)',
    '',
    '## 移动端与小程序',
    '',
    '- [TDesign Mobile React](../../../tdesign-mobile-react/references/api/index.md)',
    '- [TDesign Mobile Vue](../../../tdesign-mobile-vue/references/api/index.md)',
    '- [TDesign Miniprogram](../../../tdesign-miniprogram/references/api/index.md)',
    '',
    '## 同步结果',
    '',
    ...summary.map((item) => `- ${item.stack}: ${item.ok} 个成功，${item.missing} 个未同步`),
    '',
    '## 使用约束',
    '',
    '- React 项目只查阅 `skills/tdesign-react/references/api/` 下的 API 文档。',
    '- Vue 3 / Vue Next 项目只查阅 `skills/tdesign-vue-next/references/api/` 下的 API 文档。',
    '- Vue 2 项目只查阅 `skills/tdesign-vue2/references/api/` 下的 API 文档。',
    '- 移动端 React 项目只查阅 `skills/tdesign-mobile-react/references/api/` 下的 API 文档。',
    '- 移动端 Vue 项目只查阅 `skills/tdesign-mobile-vue/references/api/` 下的 API 文档。',
    '- 小程序项目只查阅 `skills/tdesign-miniprogram/references/api/` 下的 API 文档。',
    '- 不同技术栈、移动端和小程序的 props、事件、插槽、组件命名和引入方式不能混用。',
    '- API 表描述不够精确时，优先读取同技术栈目录下对应组件或子组件的 `type.ts` / `props.ts` / `common.ts`，不要依赖用户项目 `node_modules` 推断 TDesign 官方 API。',
    '',
  ].join('\n');
  await fs.writeFile(new URL('tdesign-docs/references/api/index.md', OUTPUT_ROOT), summaryContent);
  await writeStackMatrix(summary, componentMaps);
  console.table(summary);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
