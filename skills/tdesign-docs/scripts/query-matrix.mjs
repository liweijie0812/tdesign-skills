import { argv, exit } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const META_ROOT = resolve(__dirname, '../references/meta');

const SHARED_MATRIX = resolve(META_ROOT, 'stack-matrix.json');
const PLATFORM_MATRIX = {
  web: resolve(META_ROOT, 'stack-matrix-web.json'),
  mobile: resolve(META_ROOT, 'stack-matrix-mobile.json'),
  miniprogram: resolve(META_ROOT, 'stack-matrix-miniprogram.json'),
};

const STACK_TO_PLATFORM = {
  react: 'web',
  'vue-next': 'web',
  vue2: 'web',
  'mobile-react': 'mobile',
  'mobile-vue': 'mobile',
  miniprogram: 'miniprogram',
  uniapp: 'miniprogram',
};

const PLATFORM_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  miniprogram: 'MiniProgram / UniApp',
};

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Matrix file not found: ${filePath}\n  Run "node scripts/sync-api-docs.mjs" first to generate it.`);
    }
    throw error;
  }
}

function printHelp() {
  console.log(`Usage:
  node scripts/query-matrix.mjs --list-stacks
  node scripts/query-matrix.mjs --stack react --components
  node scripts/query-matrix.mjs --stack vue-next --component Button
  node scripts/query-matrix.mjs --stack miniprogram --missing
  node scripts/query-matrix.mjs --component Button
  node scripts/query-matrix.mjs --group web
  node scripts/query-matrix.mjs --known-diff Button
  node scripts/query-matrix.mjs --known-diff --json

Options:
  --list-stacks     List all stacks grouped by platform
  --stack <name>    Target stack: react | vue-next | vue2 | mobile-react | mobile-vue | miniprogram | uniapp
  --group <name>    Platform group: web | mobile | miniprogram
  --component <name>   Component name, e.g. Button (use with --stack for single-stack check)
  --components       List all available components for --stack
  --missing          Show components missing from --stack (in mobile group scope)
  --known-diff <comp> Show known cross-stack differences for a component (omit name for list)
  --json             Print raw matched JSON
  --help             Show this help
`);
}

function parseArgs(args) {
  const options = {};
  const withValue = new Set(['--stack', '--component', '--group']);
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    // --help short-circuits: ignore all other args
    if (arg === '--help') {
      options.help = true;
      break;
    }

    if (withValue.has(arg)) {
      i += 1;
      if (i >= args.length || (args[i] && args[i].startsWith('--'))) {
        throw new Error(`Missing value for ${arg}`);
      }
    }
    switch (arg) {
      case '--list-stacks':
        options.listStacks = true;
        break;
      case '--stack':
        options.stack = args[i];
        break;
      case '--component':
        options.component = args[i];
        break;
      case '--components':
        options.listComponents = true;
        break;
      case '--missing':
        options.missing = true;
        break;
      case '--group':
        options.group = args[i];
        break;
      case '--known-diff':
        // optional value: --known-diff alone lists all, --known-diff <name> queries specific component
        if (i + 1 < args.length && args[i + 1] && !args[i + 1].startsWith('--')) {
          options.knownDiff = args[++i];
        } else {
          options.knownDiff = '';
        }
        break;
      case '--json':
        options.json = true;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return options;
}

function listStacks(shared) {
  console.log('Stack groups:');
  for (const [group, stacks] of Object.entries(shared.stackGroups)) {
    console.log(`  [${group}] ${stacks.join(', ')}`);
  }
}

function showGroup(shared, groupName) {
  const stacks = shared.stackGroups[groupName];
  if (!stacks) {
    console.error(`Unknown group: ${groupName}. Available: web, mobile, miniprogram`);
    exit(1);
  }
  const perPlatform = readJson(PLATFORM_MATRIX[groupName]);
  console.log(`${PLATFORM_LABELS[groupName]} stacks: ${stacks.join(', ')}`);
  for (const stack of stacks) {
    const comps = perPlatform.coverage.byStack[stack] || [];
    console.log(`  ${stack}: ${comps.length} components`);
    if (perPlatform.coverage.missingByStack?.[stack]?.length) {
      console.log(`    missing: ${perPlatform.coverage.missingByStack[stack].join(', ')}`);
    }
  }
}

function showComponents(stack, perPlatform) {
  const comps = perPlatform.coverage.byStack[stack] || [];
  if (!comps.length) {
    console.log(`No components found for stack: ${stack}`);
    return [];
  }
  console.log(`${stack} components (${comps.length}):`);
  console.log(`  ${comps.join(', ')}`);
  return comps;
}

function fuzzyMatch(name, candidates) {
  const lower = name.toLowerCase();
  // exact match (case-insensitive)
  const exact = candidates.find((c) => c.toLowerCase() === lower);
  if (exact) return exact;
  // prefix match
  const prefix = candidates.filter((c) => c.toLowerCase().startsWith(lower));
  if (prefix.length) return prefix;
  // substring match
  const contains = candidates.filter((c) => c.toLowerCase().includes(lower));
  return contains.slice(0, 5);
}

function checkComponent(stack, component, perPlatform) {
  const comps = perPlatform.coverage.byStack[stack] || [];
  const matched = fuzzyMatch(component, comps);
  if (Array.isArray(matched) && matched.length > 1) {
    console.log(`? Multiple matches for "${component}" in ${stack}:`);
    console.log(`  ${matched.join(', ')}`);
    return { found: false, ambiguous: matched };
  }
  if (matched.length === 0) {
    console.log(`✗ ${component} NOT in ${stack}`);
    return { found: false };
  }
  const actual = Array.isArray(matched) ? matched[0] : matched;
  console.log(`✓ ${actual} exists in ${stack}${actual !== component ? ` (matched from "${component}")` : ''}`);
  return { found: true, name: actual };
}

function showMissing(stack, perPlatform, shared) {
  const missing = perPlatform.coverage.missingByStack?.[stack] || [];
  if (!missing.length) {
    console.log(`${stack}: No missing components.`);
    return;
  }
  console.log(`${stack} missing components (${missing.length}):`);
  console.log(`  ${missing.join(', ')}`);
}

function checkComponentAcrossStacks(component, shared) {
  const results = [];
  const platformCache = {};
  for (const [stack, platform] of Object.entries(STACK_TO_PLATFORM)) {
    if (!platformCache[platform]) {
      platformCache[platform] = readJson(PLATFORM_MATRIX[platform]);
    }
    const perPlatform = platformCache[platform];
    const comps = perPlatform.coverage.byStack[stack] || [];
    const matched = fuzzyMatch(component, comps);
    if (Array.isArray(matched) && matched.length > 1) {
      results.push({ stack, platform, found: false, ambiguous: matched });
    } else if (matched.length === 0) {
      results.push({ stack, platform, found: false });
    } else {
      results.push({ stack, platform, found: true, name: Array.isArray(matched) ? matched[0] : matched });
    }
  }

  console.log(`Component "${component}" across stacks:`);
  const byPlatform = {};
  for (const r of results) {
    byPlatform[r.platform] = byPlatform[r.platform] || [];
    byPlatform[r.platform].push(r);
  }
  for (const [platform, items] of Object.entries(byPlatform)) {
    console.log(`  [${platform}]`);
    for (const item of items) {
      const mark = item.found ? '✓' : '✗';
      const extra = item.found && item.name !== component ? ` (→ ${item.name})` : '';
      console.log(`    ${mark} ${item.stack}${extra}`);
    }
  }
  return results;
}

function showKnownDiffs(shared, component) {
  const diffs = shared.knownDifferences || {};
  if (!component) {
    console.log('Components with known cross-stack differences:');
    console.log(`  ${Object.keys(diffs).join(', ')}`);
    return;
  }
  const lower = component.toLowerCase();
  const matchedKey = Object.keys(diffs).find((k) => k.toLowerCase() === lower);
  if (!matchedKey) {
    console.error(`No known differences for: ${component}`);
    console.error(`Available: ${Object.keys(diffs).join(', ')}`);
    exit(1);
  }
  const entry = diffs[matchedKey];
  console.log(`${matchedKey} known differences:`);
  for (const [k, value] of Object.entries(entry)) {
    if (k === 'sharedContract') {
      console.log(`  shared contract: ${value}`);
    } else {
      console.log(`  ${k}: ${value}`);
    }
  }
}

function main() {
  let options;
  try {
    options = parseArgs(argv.slice(2));
  } catch (error) {
    console.error(error.message);
    printHelp();
    exit(1);
  }

  if (options.help) {
    printHelp();
    return;
  }

  const shared = readJson(SHARED_MATRIX);

  if (options.listStacks) {
    listStacks(shared);
    return;
  }

  if (options.knownDiff !== undefined) {
    const comp = options.knownDiff;
    if (options.json) {
      const diffs = shared.knownDifferences || {};
      if (comp) {
        const lower = comp.toLowerCase();
        const matchedKey = Object.keys(diffs).find((k) => k.toLowerCase() === lower);
        console.log(JSON.stringify(matchedKey ? { component: matchedKey, differences: diffs[matchedKey] } : null, null, 2));
      } else {
        console.log(JSON.stringify(Object.keys(diffs), null, 2));
      }
    } else {
      showKnownDiffs(shared, comp || null);
    }
    return;
  }

  if (options.group) {
    showGroup(shared, options.group);
    return;
  }

  if (options.component && !options.stack) {
    const results = checkComponentAcrossStacks(options.component, shared);
    if (options.json) {
      console.log(JSON.stringify({ component: options.component, results }, null, 2));
    }
    return;
  }

  if (!options.stack) {
    console.error('Missing required --stack, --group, --component, --known-diff, or --list-stacks.');
    printHelp();
    exit(1);
  }

  const platform = STACK_TO_PLATFORM[options.stack];
  if (!platform) {
    console.error(`Unknown stack: ${options.stack}. Available: ${Object.keys(STACK_TO_PLATFORM).join(', ')}`);
    exit(1);
  }

  const perPlatform = readJson(PLATFORM_MATRIX[platform]);

  if (options.missing) {
    showMissing(options.stack, perPlatform, shared);
    return;
  }

  if (options.component) {
    const result = checkComponent(options.stack, options.component, perPlatform);
    if (options.json) {
      console.log(JSON.stringify({ stack: options.stack, component: options.component, ...result }, null, 2));
    }
    return;
  }

  if (options.listComponents) {
    const comps = showComponents(options.stack, perPlatform);
    if (options.json) {
      console.log(JSON.stringify({ stack: options.stack, components: comps }, null, 2));
    }
    return;
  }

  // Default: show stack overview
  const comps = perPlatform.coverage.byStack[options.stack] || [];
  const missing = perPlatform.coverage.missingByStack?.[options.stack] || [];
  console.log(`Stack: ${options.stack} (${platform})`);
  console.log(`  Components: ${comps.length}`);
  if (missing.length) {
    console.log(`  Missing: ${missing.length} (${missing.join(', ')})`);
  }
  if (options.json) {
    console.log(JSON.stringify({
      stack: options.stack,
      platform,
      componentCount: comps.length,
      components: comps,
      missing,
    }, null, 2));
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  exit(1);
}
