import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url);
const OUTPUT_ROOT = new URL('../skills/', import.meta.url);
const WORKSPACE_PARENT = fileURLToPath(new URL('../', ROOT));

// Stack configurations - mirrors sync-api-docs.mjs
const STACKS = [
  {
    key: 'react',
    name: 'TDesign React',
    group: 'web',
    skillName: 'tdesign-react',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-react'),
    componentDir: (comp) => `packages/components/${comp}`,
    exampleDir: (comp) => `packages/components/${comp}/_example`,
    fileExt: '.tsx',
    importFrom: 'tdesign-react',
    headerStyle: 'jsdoc',
    transform: transformReactExample,
  },
  {
    key: 'vue-next',
    name: 'TDesign Vue Next',
    group: 'web',
    skillName: 'tdesign-vue-next',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-vue-next'),
    componentDir: (comp) => `packages/components/${comp}`,
    exampleDir: (comp) => `packages/components/${comp}/_example`,
    fileExt: '.vue',
    importFrom: 'tdesign-vue-next',
    headerStyle: 'html',
    transform: transformVueExample,
  },
  {
    key: 'vue2',
    name: 'TDesign Vue 2',
    group: 'web',
    skillName: 'tdesign-vue2',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-vue'),
    componentDir: (comp) => `src/${comp}`,
    exampleDir: (comp) => `src/${comp}/_example`,
    fileExt: '.vue',
    importFrom: 'tdesign-vue',
    headerStyle: 'html',
    transform: transformVueExample,
  },
  {
    key: 'mobile-react',
    name: 'TDesign Mobile React',
    group: 'mobile',
    skillName: 'tdesign-mobile-react',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-mobile-react'),
    componentDir: (comp) => `src/${comp}`,
    exampleDir: (comp) => `src/${comp}/_example`,
    fileExt: '.tsx',
    importFrom: 'tdesign-mobile-react',
    headerStyle: 'jsdoc',
    transform: transformReactExample,
  },
  {
    key: 'mobile-vue',
    name: 'TDesign Mobile Vue',
    group: 'mobile',
    skillName: 'tdesign-mobile-vue',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-mobile-vue'),
    componentDir: (comp) => `src/${comp}`,
    exampleDir: (comp) => `src/${comp}/demos`,
    fileExt: '.vue',
    importFrom: 'tdesign-mobile-vue',
    headerStyle: 'html',
    transform: transformVueExample,
  },
  {
    key: 'miniprogram',
    name: 'TDesign Miniprogram',
    group: 'miniprogram',
    skillName: 'tdesign-miniprogram',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-miniprogram'),
    componentDir: (comp) => `packages/components/${comp}`,
    exampleDir: (comp) => `packages/components/${comp}/_example`,
    fileExt: '.wxml',
    importFrom: 'tdesign-miniprogram',
    headerStyle: 'html',
    transform: transformMiniprogramExample,
  },
  {
    key: 'uniapp',
    name: 'TDesign UniApp',
    group: 'miniprogram',
    skillName: 'tdesign-uniapp',
    localRepo: path.join(WORKSPACE_PARENT, 'tdesign-miniprogram'),
    componentDir: (comp) => `packages/components/${comp}`,
    exampleDir: (comp) => `packages/components/${comp}/_example`,
    fileExt: '.vue',
    importFrom: 'tdesign-uniapp',
    headerStyle: 'html',
    transform: transformVueExample,
  },
];

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listDirSafe(dirPath) {
  try {
    return await fs.readdir(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }
}

// ─── Header generation ────────────────────────────────────────────

function generateHeader(stack, component, exampleName) {
  const lines = [];
  if (stack.headerStyle === 'jsdoc') {
    lines.push('/**');
    lines.push(` * TDesign ${stack.name} 示例：${component} - ${exampleName}`);
    lines.push(` * 覆盖组件：${capitalizeFirst(component)}`);
    lines.push(` * 来源：组件库源码 ${stack.exampleDir(component)}/${exampleName}${stack.fileExt}`);
    lines.push(' */');
  } else if (stack.headerStyle === 'html') {
    lines.push('<!--');
    lines.push(`  TDesign ${stack.name} 示例：${component} - ${exampleName}`);
    lines.push(`  覆盖组件：${capitalizeFirst(component)}`);
    lines.push(`  来源：组件库源码 ${stack.exampleDir(component)}/${exampleName}${stack.fileExt}`);
    lines.push('-->');
  }
  return lines.join('\n') + '\n';
}

function capitalizeFirst(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── File content transformers ─────────────────────────────────────

function transformReactExample(content, stack, component, exampleName) {
  const header = generateHeader(stack, component, exampleName);
  return header + '\n' + content;
}

function transformVueExample(content, stack, component, exampleName) {
  const header = generateHeader(stack, component, exampleName);
  return header + '\n' + content;
}

function transformMiniprogramExample(content, stack, component, exampleName) {
  const header = generateHeader(stack, component, exampleName);
  return header + '\n' + content;
}

// ─── Example discovery ─────────────────────────────────────────────

async function discoverExamples(stack) {
  const components = [];
  const srcDir = stack.componentDir('');
  const baseDir = srcDir ? path.join(stack.localRepo, srcDir.replace(/\/$/, '')) : stack.localRepo;

  const entries = await listDirSafe(baseDir);
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const compName = entry.name;
    const exampleDir = path.join(baseDir, compName, '_example');

    if (stack.key === 'mobile-vue') {
      // Mobile Vue uses 'demos/' instead of '_example/'
      const demosDir = path.join(baseDir, compName, 'demos');
      if (await pathExists(demosDir)) {
        const files = await discoverFiles(demosDir, stack);
        if (files.length > 0) {
          components.push({ name: compName, exampleDir: demosDir, files });
        }
      }
      continue;
    }

    if (await pathExists(exampleDir)) {
      const files = await discoverFiles(exampleDir, stack);
      if (files.length > 0) {
        components.push({ name: compName, exampleDir, files });
      }
    }
  }

  return components;
}

async function discoverFiles(exampleDir, stack) {
  const files = [];
  const entries = await listDirSafe(exampleDir);

  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name);
      const validExts = ['.tsx', '.vue', '.js', '.ts', '.wxml', '.wxss', '.json', '.jsx', '.md'];
      if (validExts.includes(ext)) {
        files.push({
          name: entry.name,
          fullPath: path.join(exampleDir, entry.name),
        });
      }
    } else if (entry.isDirectory()) {
      // For miniprogram, each sub-directory is a demo variant
      const subFiles = await discoverFiles(path.join(exampleDir, entry.name), stack);
      for (const sf of subFiles) {
        files.push({
          name: path.join(entry.name, sf.name),
          fullPath: sf.fullPath,
        });
      }
    }
  }

  return files;
}

// ─── Main sync logic ───────────────────────────────────────────────

async function syncStack(stack) {
  const localRepo = stack.localRepo;
  if (!(await pathExists(localRepo))) {
    console.log(`[skip] ${stack.key}: local repo not found at ${localRepo}`);
    return { stack: stack.key, components: 0, files: 0, skipped: true };
  }

  const outBase = new URL(`${stack.skillName}/references/examples/`, OUTPUT_ROOT);
  await fs.mkdir(outBase, { recursive: true });

  const components = await discoverExamples(stack);
  let totalFiles = 0;

  for (const comp of components) {
    const compOutDir = new URL(`${comp.name}/`, outBase);
    await fs.mkdir(compOutDir, { recursive: true });

    for (const file of comp.files) {
      try {
        const content = await fs.readFile(file.fullPath, 'utf8');
        const baseName = path.basename(file.name);

        // Skip empty files
        if (content.trim().length === 0) continue;

        // Apply transformation
        const transformed = stack.transform(content, stack, comp.name, path.basename(file.name, path.extname(file.name)));

        const outPath = new URL(file.name, compOutDir);
        await fs.mkdir(new URL('.', outPath), { recursive: true });
        await fs.writeFile(outPath, transformed);
        totalFiles++;
      } catch (err) {
        console.error(`[error] ${stack.key}/${comp.name}/${file.name}: ${err.message}`);
      }
    }
  }

  console.log(`[done] ${stack.key}: ${components.length} components, ${totalFiles} files`);
  return { stack: stack.key, components: components.length, files: totalFiles, skipped: false };
}

// ─── Update README ─────────────────────────────────────────────────

async function updateReadme(stack, components) {
  const readmePath = new URL(`${stack.skillName}/references/examples/README.md`, OUTPUT_ROOT);

  let existingContent = '';
  try {
    existingContent = await fs.readFile(readmePath, 'utf8');
  } catch {
    // README doesn't exist yet, will create
  }

  const lines = [
    `# ${stack.name} 示例索引`,
    '',
    `本目录包含从 ${stack.name} 组件库源码自动提取的示例代码。`,
    '',
    `导入方式：\`import { Component } from '${stack.importFrom}'\``,
    '',
    '## 覆盖组件',
    '',
    '| 组件 | 目录 | 示例文件 |',
    '|------|------|----------|',
  ];

  for (const comp of components) {
    const fileList = comp.files.map(f => f.name).join(', ');
    lines.push(`| ${capitalizeFirst(comp.name)} | \`${comp.name}/\` | ${fileList} |`);
  }

  lines.push('');
  lines.push('> 此 README 由 `scripts/sync-examples.mjs` 自动生成。');

  await fs.writeFile(readmePath, lines.join('\n') + '\n');
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log('TDesign 示例代码同步工具');
  console.log('========================\n');

  const summary = [];

  for (const stack of STACKS) {
    console.log(`\n[processing] ${stack.key} (${stack.name})...`);
    const result = await syncStack(stack);
    summary.push(result);

    if (!result.skipped && result.components > 0) {
      // Re-discover for README generation
      const components = await discoverExamples(stack);
      await updateReadme(stack, components);
    }
  }

  console.log('\n========================');
  console.log('同步完成：');
  for (const item of summary) {
    if (item.skipped) {
      console.log(`  ${item.stack}: 跳过（仓库不存在）`);
    } else {
      console.log(`  ${item.stack}: ${item.components} 个组件, ${item.files} 个文件`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
