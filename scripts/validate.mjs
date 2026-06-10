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

function validateSkillFrontmatter() {
  const text = readText('SKILL.md');
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail('SKILL.md missing frontmatter');
    return;
  }

  const frontmatter = Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map((lineMatch) => [lineMatch[1], lineMatch[2]])
  );

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(frontmatter.name ?? '')) {
    fail(`Invalid skill name: ${frontmatter.name ?? '(missing)'}`);
  }

  const description = frontmatter.description ?? '';
  if (description.length < 1 || description.length > 1024) {
    fail(`Invalid description length: ${description.length}`);
  }

  const expectedName = path.basename(root);
  if (frontmatter.name !== expectedName) {
    fail(`Skill name '${frontmatter.name}' does not match directory '${expectedName}'`);
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
  walk('.', (relativePath) => {
    if (!/\.(md|mjs|json)$/.test(relativePath)) return;
    const text = readText(relativePath);
    if (oldApiPathPattern.test(text)) {
      fail(`${relativePath}: contains old component markdown path`);
    }
    if (oldSharedPattern.test(text)) {
      fail(`${relativePath}: contains old _shared markdown path`);
    }
  });
}

function validateMatrixSourcePaths() {
  const matrix = JSON.parse(readText('meta/stack-matrix.json'));
  for (const [stack, files] of Object.entries(matrix.coverage.commonSourceFilesByStack)) {
    for (const file of files) {
      const filePath = path.join('api', stack, file);
      if (!fs.existsSync(path.join(root, filePath))) {
        fail(`Missing matrix common source path: ${filePath}`);
      }
    }
  }

  for (const [stack, components] of Object.entries(matrix.coverage.sourceFilesByStack)) {
    for (const files of Object.values(components)) {
      for (const file of files) {
        const filePath = path.join('api', stack, file);
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
validateMatrixSourcePaths();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Validation OK');
