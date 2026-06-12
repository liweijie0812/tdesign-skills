import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];

function fail(message) {
  failures.push(message);
}

function readText(filePath) {
  return fs.readFileSync(path.join(root, filePath), 'utf8');
}

function walk(dir, callback) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const relativePath = path.join(dir, entry.name);
    if (entry.isDirectory() && ['.git', 'node_modules', '.DS_Store'].includes(entry.name)) {
      continue;
    }
    if (entry.isDirectory()) {
      walk(relativePath, callback);
    } else if (entry.isFile()) {
      callback(relativePath);
    }
  }
}

function parseSkillFrontmatter(relativePath) {
  const text = readText(relativePath);
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`${relativePath} missing frontmatter`);
    return null;
  }

  return Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map((lineMatch) => [lineMatch[1], lineMatch[2]])
  );
}

function validateSkillFrontmatter() {
  const skillPaths = [];
  walk('.', (relativePath) => {
    if (path.basename(relativePath) === 'SKILL.md') {
      skillPaths.push(relativePath);
    }
  });

  if (!skillPaths.length) {
    fail('No SKILL.md files found');
    return;
  }

  if (skillPaths.includes('SKILL.md')) {
    fail('Root SKILL.md is not allowed; use skills/<name>/SKILL.md for the skill collection');
  }

  for (const skillPath of skillPaths) {
    const frontmatter = parseSkillFrontmatter(skillPath);
    if (!frontmatter) continue;

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(frontmatter.name ?? '')) {
      fail(`${skillPath}: invalid skill name: ${frontmatter.name ?? '(missing)'}`);
    }

    const description = frontmatter.description ?? '';
    if (description.length < 1 || description.length > 1024) {
      fail(`${skillPath}: invalid description length: ${description.length}`);
    }

    const expectedName = path.basename(path.dirname(skillPath));
    if (frontmatter.name !== expectedName) {
      fail(`${skillPath}: skill name '${frontmatter.name}' does not match directory '${expectedName}'`);
    }
  }
}

function validateMarkdownLinks() {
  walk('.', (relativePath) => {
    if (!relativePath.endsWith('.md')) return;
    const text = readText(relativePath);
    const linkPattern = /\[[^\]]+\]\((?!https?:|mailto:|#)([^)]+)\)/g;
    let match;
    while ((match = linkPattern.exec(text))) {
      const target = match[1].split('#')[0];
      if (!target) continue;
      const resolved = path.normalize(path.join(root, path.dirname(relativePath), target));
      if (!fs.existsSync(resolved)) {
        fail(`${relativePath}: missing markdown target ${match[1]}`);
      }
    }
  });
}

function validateNoOldApiReferences() {
  const oldApiPathPattern = /api\/(react|vue-next|vue2|mobile-react|mobile-vue|miniprogram)\/[a-z0-9-]+\.md\b/;
  const oldSharedPattern = /api\/_shared\/(dialog\.contract|sub-components)\.md/;
  const oldRootReferencePatterns = [
    /`api\/(react|vue-next|vue2|mobile-react|mobile-vue|miniprogram|_shared)\//,
    /`api\/<stack>/,
    /`meta\/stack-matrix\.json`/,
    /`decisions\//,
    /`scenarios\//,
    /`design\//,
    /`examples\//,
    /`scripts\/query-changelog\.mjs`/,
  ];
  walk('.', (relativePath) => {
    if (!/\.(md|mjs|json)$/.test(relativePath)) return;
    const text = readText(relativePath);
    if (oldApiPathPattern.test(text)) {
      fail(`${relativePath}: contains old component markdown path`);
    }
    if (oldSharedPattern.test(text)) {
      fail(`${relativePath}: contains old _shared markdown path`);
    }
    for (const pattern of oldRootReferencePatterns) {
      if (pattern.test(text)) {
        fail(`${relativePath}: contains old root reference path matching ${pattern}`);
      }
    }
  });
}

function validateNoRootReferenceDirectories() {
  for (const directory of ['api', 'meta', 'decisions', 'scenarios', 'design', 'examples']) {
    if (fs.existsSync(path.join(root, directory))) {
      fail(`Root reference directory is not allowed: ${directory}`);
    }
  }
}

function validateMatrixSourcePaths() {
  const matrix = JSON.parse(readText('skills/tdesign-docs/references/meta/stack-matrix.json'));
  const stackDirectories = {
    react: 'skills/tdesign-react/references/api',
    'vue-next': 'skills/tdesign-vue-next/references/api',
    vue2: 'skills/tdesign-vue2/references/api',
    'mobile-react': 'skills/tdesign-mobile-react/references/api',
    'mobile-vue': 'skills/tdesign-mobile-vue/references/api',
    miniprogram: 'skills/tdesign-miniprogram/references/api',
  };
  for (const [stack, files] of Object.entries(matrix.coverage.commonSourceFilesByStack)) {
    const stackDirectory = stackDirectories[stack];
    for (const file of files) {
      const filePath = path.join(stackDirectory, file);
      if (!fs.existsSync(path.join(root, filePath))) {
        fail(`Missing matrix common source path: ${filePath}`);
      }
    }
  }

  for (const [stack, components] of Object.entries(matrix.coverage.sourceFilesByStack)) {
    const stackDirectory = stackDirectories[stack];
    for (const files of Object.values(components)) {
      for (const file of files) {
        const filePath = path.join(stackDirectory, file);
        if (!fs.existsSync(path.join(root, filePath))) {
          fail(`Missing matrix source path: ${filePath}`);
        }
      }
    }
  }
}

validateSkillFrontmatter();
validateMarkdownLinks();
validateNoOldApiReferences();
validateNoRootReferenceDirectories();
validateMatrixSourcePaths();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Validation OK');
