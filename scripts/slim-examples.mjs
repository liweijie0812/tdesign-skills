/**
 * 精简示例文件脚本 — 方案一：分级保留示例
 *
 * 策略：
 * - Web/Mobile 栈：每组件保留 base 示例 + 1-2 个关键变体（事件、插槽、校验等高频场景），
 *   去掉纯视觉变体（size/theme/shape 等）。
 * - Miniprogram/UniApp 栈：每组件只保留 base 子目录（4 文件），
 *   删除其余变体子目录和 skyline 目录。
 * - 保留组件级文件（如 button.wxml, button.json, button.ts），因为它们是组件的入口文件。
 * - 重写 README.md 为精简摘要表（组件名 + 目录 + 示例数量 + 关键示例名）。
 *
 * 用法：
 *   node scripts/slim-examples.mjs          # 执行精简
 *   node scripts/slim-examples.mjs --dry    # 试运行，只打印将要删除的文件
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DRY_RUN = process.argv.includes('--dry');

// ─── 关键变体保留规则 ─────────────────────────────────────────────

/**
 * Web/Mobile 栈的关键变体选择标准：
 * 优先保留涉及 v-model、插槽、事件、表单校验、自定义渲染等高频场景的示例。
 * 去掉纯视觉变体（size/theme/shape/icon/status 等）。
 */
const KEY_VARIANT_PATTERNS = [
  /base/i,          // 基础用法
  /group/i,         // 组合使用
  /slot/i,          // 插槽
  /event/i,         // 事件
  /custom/i,        // 自定义
  /v-?model/i,      // v-model / 受控
  /validat/i,       // 校验
  /form/i,          // 表单
  /disabled/i,      // 禁用态（重要状态）
  /loading/i,       // 加载态
  /async/i,         // 异步
  /virtual/i,       // 虚拟滚动（性能关键）
  /editable/i,      // 可编辑
  /multiple/i,      // 多选
  /control/i,       // 受控
  /panel/i,         // 面板模式
  /popup/i,         // 弹出
  /dialog/i,        // 弹窗
  /plugin/i,        // 插件式调用
  /reset/i,         // 重置
  /submit/i,        // 提交
];

// 纯视觉变体——直接排除
const VISUAL_VARIANT_PATTERNS = [
  /^size\b/i,
  /^theme\b/i,
  /^shape\b/i,
  /^icon\b/i,
  /^status\b/i,
  /^ghost\b/i,
  /^block\b/i,
  /^border/i,
  /^hover\b/i,
  /^small\b/i,
  /^large\b/i,
];

/**
 * 判断一个示例文件名是否为关键变体（应保留）
 * @param {string} baseName - 不含扩展名的文件名
 * @returns {boolean}
 */
function isKeyVariant(baseName) {
  // base 总是保留
  if (/^base/i.test(baseName)) return true;

  // 纯视觉变体直接排除
  if (VISUAL_VARIANT_PATTERNS.some((p) => p.test(baseName))) return false;

  // 匹配关键变体模式
  if (KEY_VARIANT_PATTERNS.some((p) => p.test(baseName))) return true;

  // 默认排除（大部分是视觉变体）
  return false;
}

/**
 * Miniprogram/UniApp 变体目录保留规则：只保留 base
 * @param {string} dirName - 子目录名
 * @returns {boolean}
 */
function shouldKeepMiniprogramDir(dirName) {
  return /^base$/i.test(dirName);
}

// ─── 工具函数 ─────────────────────────────────────────────────────

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walkDir(dirPath, callback) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath, callback);
    } else if (entry.isFile()) {
      await callback(fullPath);
    }
  }
}

async function removeEmptyDirs(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  let hasContent = false;
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const subHasContent = await removeEmptyDirs(fullPath);
      if (subHasContent) hasContent = true;
    } else {
      hasContent = true;
    }
  }
  if (!hasContent) {
    await fs.rmdir(dirPath);
    return false;
  }
  return true;
}

// ─── Web/Mobile 栈精简 ────────────────────────────────────────────

/**
 * 精简 Web/Mobile 栈的示例文件
 * 策略：遍历每个组件目录，保留 base + 关键变体，删除其余文件。
 */
async function slimWebMobileStack(stackName) {
  const examplesDir = path.join(ROOT, 'skills', stackName, 'references', 'examples');
  if (!(await pathExists(examplesDir))) return { deleted: 0, kept: 0 };

  let deleted = 0;
  let kept = 0;
  const componentSummaries = [];

  const componentDirs = await fs.readdir(examplesDir, { withFileTypes: true });
  for (const compDir of componentDirs) {
    if (!compDir.isDirectory() || compDir.name === 'README.md') continue;

    const compDirPath = path.join(examplesDir, compDir.name);

    // 递归收集所有文件（包括子目录），避免泄漏子目录中的文件（Bug 1 修复）
    const allFilesAbs = [];
    await walkDir(compDirPath, (fullPath) => {
      if (!fullPath.endsWith('README.md')) allFilesAbs.push(fullPath);
    });

    const keyFiles = [];
    const otherFiles = [];

    for (const filePath of allFilesAbs) {
      const baseName = path.basename(filePath, path.extname(filePath));
      if (isKeyVariant(baseName)) {
        keyFiles.push(filePath);
      } else {
        otherFiles.push(filePath);
      }
    }

    // 确保每组件至少保留 1 个文件：如果 keyFiles 为空，从 otherFiles 中选第一个
    let keptFiles;
    if (keyFiles.length > 0) {
      keptFiles = keyFiles;
      // 删除非关键文件
      for (const filePath of otherFiles) {
        if (!DRY_RUN) {
          await fs.unlink(filePath);
        }
        deleted++;
      }
    } else if (otherFiles.length > 0) {
      // 没有关键变体，保留第一个文件作为代表性示例
      keptFiles = [otherFiles[0]];
      for (let i = 1; i < otherFiles.length; i++) {
        if (!DRY_RUN) {
          await fs.unlink(otherFiles[i]);
        }
        deleted++;
      }
    } else {
      keptFiles = [];
    }

    kept += keptFiles.length;

    // 清理空目录（Bug 3 修复：removeEmptyDirs 之前从未被调用）
    await removeEmptyDirs(compDirPath);

    if (keptFiles.length > 0) {
      componentSummaries.push({
        name: compDir.name,
        dir: `${compDir.name}/`,
        count: keptFiles.length,
        files: keptFiles.map((fp) => path.basename(fp)),
      });
    }
  }

  return { deleted, kept, componentSummaries };
}

// ─── Miniprogram/UniApp 栈精简 ────────────────────────────────────

/**
 * 精简 Miniprogram/UniApp 栈的示例文件
 * 策略：遍历每个组件目录，保留 base 子目录 + 组件级文件，
 *       删除其余变体子目录和 skyline 目录。
 */
async function slimMiniprogramStack(stackName) {
  const examplesDir = path.join(ROOT, 'skills', stackName, 'references', 'examples');
  if (!(await pathExists(examplesDir))) return { deleted: 0, kept: 0 };

  let deleted = 0;
  let kept = 0;
  const componentSummaries = [];

  const componentDirs = await fs.readdir(examplesDir, { withFileTypes: true });
  for (const compDir of componentDirs) {
    if (!compDir.isDirectory()) continue;

    const compDirPath = path.join(examplesDir, compDir.name);
    const entries = await fs.readdir(compDirPath, { withFileTypes: true });
    const keptSubdirs = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // 只保留 base 子目录，删除其余（包括 skyline）
        if (shouldKeepMiniprogramDir(entry.name)) {
          // 统计 base 目录中的文件
          const baseDirPath = path.join(compDirPath, entry.name);
          const baseFiles = await fs.readdir(baseDirPath, { withFileTypes: true });
          kept += baseFiles.filter((f) => f.isFile()).length;
          keptSubdirs.push(entry.name);
        } else {
          // 先统计再删除（Bug 2 修复：非 dry-run 时删除计数丢失）
          await walkDir(path.join(compDirPath, entry.name), () => { deleted++; });
          if (!DRY_RUN) {
            await fs.rm(path.join(compDirPath, entry.name), { recursive: true });
          }
        }
      } else if (entry.isFile()) {
        // 保留组件级文件（如 button.wxml, button.json, button.ts）
        kept++;
        keptSubdirs.push(entry.name);
      }
    }

    // 清理空目录（Bug 3 修复）
    await removeEmptyDirs(compDirPath);

    if (keptSubdirs.length > 0) {
      componentSummaries.push({
        name: compDir.name,
        dir: `${compDir.name}/`,
        count: keptSubdirs.filter((s) => s !== 'base').length + (keptSubdirs.includes('base') ? 1 : 0),
        subdirs: keptSubdirs,
      });
    }
  }

  return { deleted, kept, componentSummaries };
}

// ─── README 重写 ──────────────────────────────────────────────────

/**
 * 重写 examples/README.md 为精简摘要表
 */
async function rewriteReadme(stackName, stackDisplayName, importFrom, componentSummaries) {
  if (DRY_RUN) {
    console.log(`  [DRY RUN] README 将重写: ${stackName}`);
    return;
  }
  const readmePath = path.join(ROOT, 'skills', stackName, 'references', 'examples', 'README.md');

  const lines = [
    `# ${stackDisplayName} 示例索引`,
    '',
    `本目录包含从 ${stackDisplayName} 组件库源码自动提取的示例代码（已精简，每组件仅保留基础示例和关键变体）。`,
    '',
    `导入方式：\`import { Component } from '${importFrom}'\``,
    '',
    '## 覆盖组件',
    '',
    '| 组件 | 目录 | 保留示例数 | 关键示例 |',
    '|------|------|------------|----------|',
  ];

  for (const comp of componentSummaries) {
    const displayName = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
    const keyExamples = comp.files
      ? comp.files.slice(0, 4).join(', ')
      : (comp.subdirs || []).slice(0, 4).join(', ');
    const count = comp.count || (comp.subdirs ? comp.subdirs.length : 0);
    lines.push(`| ${displayName} | \`${comp.dir}\` | ${count} | ${keyExamples} |`);
  }

  lines.push('');
  lines.push('> 此 README 由 `scripts/slim-examples.mjs` 自动生成。');
  lines.push('> 示例已按方案一精简：Web/Mobile 保留 base + 关键变体，Miniprogram/UniApp 仅保留 base 子目录。');

  await fs.writeFile(readmePath, lines.join('\n') + '\n');
  console.log(`  README 已重写: ${readmePath}`);
}

// ─── 主流程 ───────────────────────────────────────────────────────

const WEB_MOBILE_STACKS = [
  { skillName: 'tdesign-react', displayName: 'TDesign React', importFrom: 'tdesign-react' },
  { skillName: 'tdesign-vue-next', displayName: 'TDesign Vue Next', importFrom: 'tdesign-vue-next' },
  { skillName: 'tdesign-vue2', displayName: 'TDesign Vue 2', importFrom: 'tdesign-vue' },
  { skillName: 'tdesign-mobile-react', displayName: 'TDesign Mobile React', importFrom: 'tdesign-mobile-react' },
  { skillName: 'tdesign-mobile-vue', displayName: 'TDesign Mobile Vue', importFrom: 'tdesign-mobile-vue' },
];

const MINIPROGRAM_STACKS = [
  { skillName: 'tdesign-miniprogram', displayName: 'TDesign Miniprogram', importFrom: 'tdesign-miniprogram' },
  { skillName: 'tdesign-uniapp', displayName: 'TDesign UniApp', importFrom: 'tdesign-uniapp' },
];

async function main() {
  console.log('TDesign 示例精简工具 — 方案一：分级保留示例');
  console.log('============================================');
  if (DRY_RUN) console.log('[DRY RUN] 不实际删除文件\n');
  else console.log('');

  // 统计精简前的文件数
  const beforeCounts = {};
  for (const stack of [...WEB_MOBILE_STACKS, ...MINIPROGRAM_STACKS]) {
    const dir = path.join(ROOT, 'skills', stack.skillName, 'references', 'examples');
    let count = 0;
    if (await pathExists(dir)) {
      await walkDir(dir, (f) => { if (!f.endsWith('README.md')) count++; });
    }
    beforeCounts[stack.skillName] = count;
  }

  console.log('精简前文件统计:');
  for (const [name, count] of Object.entries(beforeCounts)) {
    console.log(`  ${name}: ${count} 文件`);
  }
  console.log('');

  // 处理 Web/Mobile 栈
  console.log('--- Web/Mobile 栈精简 ---');
  for (const stack of WEB_MOBILE_STACKS) {
    console.log(`\n[${stack.skillName}]`);
    const result = await slimWebMobileStack(stack.skillName);
    console.log(`  删除: ${result.deleted} 文件, 保留: ${result.kept} 文件`);
    await rewriteReadme(stack.skillName, stack.displayName, stack.importFrom, result.componentSummaries);
  }

  // 处理 Miniprogram/UniApp 栈
  console.log('\n--- Miniprogram/UniApp 栈精简 ---');
  for (const stack of MINIPROGRAM_STACKS) {
    console.log(`\n[${stack.skillName}]`);

    if (DRY_RUN) {
      // 试运行：只统计不删除
      const examplesDir = path.join(ROOT, 'skills', stack.skillName, 'references', 'examples');
      if (await pathExists(examplesDir)) {
        let toDelete = 0;
        let toKeep = 0;
        const compDirs = await fs.readdir(examplesDir, { withFileTypes: true });
        for (const compDir of compDirs) {
          if (!compDir.isDirectory()) continue;
          const compDirPath = path.join(examplesDir, compDir.name);
          const entries = await fs.readdir(compDirPath, { withFileTypes: true });
          for (const entry of entries) {
            if (entry.isDirectory()) {
              if (shouldKeepMiniprogramDir(entry.name)) {
                const baseDirPath = path.join(compDirPath, entry.name);
                const baseFiles = await fs.readdir(baseDirPath, { withFileTypes: true });
                toKeep += baseFiles.filter((f) => f.isFile()).length;
              } else {
                await walkDir(path.join(compDirPath, entry.name), () => { toDelete++; });
              }
            } else if (entry.isFile()) {
              toKeep++;
            }
          }
        }
        console.log(`  将删除: ${toDelete} 文件, 将保留: ${toKeep} 文件`);
      }
    } else {
      const result = await slimMiniprogramStack(stack.skillName);
      console.log(`  保留: ${result.kept} 文件`);
      await rewriteReadme(stack.skillName, stack.displayName, stack.importFrom, result.componentSummaries);
    }
  }

  // 统计精简后的文件数
  if (!DRY_RUN) {
    console.log('\n============================================');
    console.log('精简后文件统计:');
    for (const stack of [...WEB_MOBILE_STACKS, ...MINIPROGRAM_STACKS]) {
      const dir = path.join(ROOT, 'skills', stack.skillName, 'references', 'examples');
      let count = 0;
      if (await pathExists(dir)) {
        await walkDir(dir, (f) => { if (!f.endsWith('README.md')) count++; });
      }
      const before = beforeCounts[stack.skillName] || 0;
      console.log(`  ${stack.skillName}: ${count} 文件 (精简前 ${before}, 减少 ${before - count})`);
    }
  }

  console.log('\n============================================');
  console.log(DRY_RUN ? '试运行完成' : '精简完成');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
