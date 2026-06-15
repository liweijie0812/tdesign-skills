import { argv, exit } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = resolve(__dirname, '../references/manifest.json');

const stackUsage = {
  react: {
    label: 'React Web / tdesign-react',
    componentPackage: 'tdesign-react',
    iconPackage: 'tdesign-icons-react',
    importFrom: 'tdesign-icons-react',
  },
  'vue-next': {
    label: 'Vue 3 Web / tdesign-vue-next',
    componentPackage: 'tdesign-vue-next',
    iconPackage: 'tdesign-icons-vue-next',
    importFrom: 'tdesign-icons-vue-next',
  },
  vue2: {
    label: 'Vue 2 Web / tdesign-vue',
    componentPackage: 'tdesign-vue',
    iconPackage: 'tdesign-icons-vue',
    importFrom: 'tdesign-icons-vue',
  },
  'mobile-react': {
    label: 'Mobile React / tdesign-mobile-react',
    componentPackage: 'tdesign-mobile-react',
    iconPackage: 'tdesign-icons-react',
    importFrom: 'tdesign-icons-react',
  },
  'mobile-vue': {
    label: 'Mobile Vue / tdesign-mobile-vue',
    componentPackage: 'tdesign-mobile-vue',
    iconPackage: 'tdesign-icons-vue-next',
    importFrom: 'tdesign-icons-vue-next',
  },
  miniprogram: {
    label: 'Miniprogram / tdesign-miniprogram',
    componentPackage: 'tdesign-miniprogram',
    tag: 't-icon',
    note: 'Use built-in t-icon first. For multicolor or variable stroke width, evaluate @mp-svg-icons/* from references/usage-guide.md.',
  },
  uniapp: {
    label: 'UniApp / tdesign-uniapp',
    componentPackage: 'tdesign-uniapp',
    note: 'Use the current project Icon API and dependency setup. Do not assume React or Vue Web icon packages.',
  },
};

const stackAliases = {
  react: 'react',
  'tdesign-react': 'react',
  'vue-next': 'vue-next',
  vue3: 'vue-next',
  'tdesign-vue-next': 'vue-next',
  vue2: 'vue2',
  'tdesign-vue': 'vue2',
  'mobile-react': 'mobile-react',
  'tdesign-mobile-react': 'mobile-react',
  'mobile-vue': 'mobile-vue',
  'tdesign-mobile-vue': 'mobile-vue',
  miniprogram: 'miniprogram',
  'tdesign-miniprogram': 'miniprogram',
  uniapp: 'uniapp',
  'tdesign-uniapp': 'uniapp',
};

function readManifest() {
  try {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Manifest not found: ${MANIFEST_PATH}\n  Run "node skills/tdesign-icons/scripts/convert-manifest.mjs" first to generate it.`);
    }
    throw error;
  }
}

/**
 * Exact name lookup — still parses JSON but skips flatten() and fuzzyMatch().
 * For the common "does icon X exist?" case, returns results immediately.
 */
function exactNameLookup(manifest, name, options) {
  const lower = name.toLowerCase();
  const results = [];
  const styles = options.style ? [options.style] : ['filled', 'outline'];

  for (const style of styles) {
    const styleData = manifest[style];
    if (!styleData) continue;
    for (const [catKey, catData] of Object.entries(styleData)) {
      for (const icon of catData.icons) {
        if (icon.name.toLowerCase() === lower) {
          results.push({
            name: icon.name,
            style,
            category: catKey,
            categoryCN: catData.labelCN,
            categoryEN: catData.labelEn,
            keywords: icon.keywords || [],
          });
        }
      }
    }
  }

  return results.slice(0, options.limit);
}

function flattenIcons(manifest) {
  const result = [];
  for (const style of ['filled', 'outline']) {
    for (const [category, data] of Object.entries(manifest[style])) {
      for (const icon of data.icons) {
        result.push({
          name: icon.name,
          style,
          category,
          categoryCN: data.labelCN,
          categoryEN: data.labelEn,
          keywords: icon.keywords || [],
        });
      }
    }
  }
  return result;
}

function fuzzyMatch(query, candidates) {
  const lower = query.toLowerCase();

  // 1) exact name match
  const exact = candidates.filter((c) => c.name.toLowerCase() === lower);
  if (exact.length) return exact;

  // 2) prefix match
  const prefix = candidates.filter((c) => c.name.toLowerCase().startsWith(lower));
  if (prefix.length) return prefix.slice(0, 50);

  // 3) contained match
  const contains = candidates.filter((c) => c.name.toLowerCase().includes(lower));
  if (contains.length) return contains.slice(0, 50);

  // 4) keyword match (Chinese substring)
  const kw = candidates.filter((c) =>
    c.keywords.some((k) => k.toLowerCase().includes(lower))
  );
  if (kw.length) return kw.slice(0, 50);

  // 5) fuzzy: name contains most chars of query (typo-tolerant)
  if (lower.length >= 2) {
    const nameFuzzy = candidates
      .map((c) => {
        const name = c.name.toLowerCase();
        // score by longest common subsequence ratio
        let qi = 0, matches = 0;
        for (let ni = 0; ni < name.length && qi < lower.length; ni++) {
          if (name[ni] === lower[qi]) { matches++; qi++; }
        }
        return { icon: c, score: matches / lower.length };
      })
      .filter((r) => r.score >= 0.6)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.icon);
    if (nameFuzzy.length) return nameFuzzy.slice(0, 50);

    // 6) keyword fuzzy: keyword contains most chars of query
    const kwFuzzy = candidates
      .map((c) => {
        let best = 0;
        for (const k of c.keywords) {
          const kwLower = k.toLowerCase();
          let qi = 0, matches = 0;
          for (let ki = 0; ki < kwLower.length && qi < lower.length; ki++) {
            if (kwLower[ki] === lower[qi]) { matches++; qi++; }
          }
          best = Math.max(best, matches / lower.length);
        }
        return { icon: c, score: best };
      })
      .filter((r) => r.score >= 0.6)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.icon);
    if (kwFuzzy.length) return kwFuzzy.slice(0, 50);
  }

  return [];
}

function printHelp() {
  console.log(`Usage:
  node skills/tdesign-icons/scripts/query-icons.mjs --list-categories [--style filled|outline]
  node skills/tdesign-icons/scripts/query-icons.mjs --category Brand [--style filled|outline] [--limit 20]
  node skills/tdesign-icons/scripts/query-icons.mjs --search <keyword>
  node skills/tdesign-icons/scripts/query-icons.mjs --name <icon-name> [--exact]
  node skills/tdesign-icons/scripts/query-icons.mjs --name search --exact --stack vue-next
  node skills/tdesign-icons/scripts/query-icons.mjs --stats
  node skills/tdesign-icons/scripts/query-icons.mjs --style filled --search <keyword>

Options:
  --style <filled|outline>  Filter by style (default: all)
  --category <name>         Filter by category (English name, e.g. Brand)
  --search <keyword>        Search icons by name or keyword (supports Chinese/English)
  --name <icon-name>        Icon name lookup (substring match by default; use --exact for exact match)
  --exact                   When used with --name, do exact name match only (no substring/fuzzy)
  --stack <stack>           Print package/import usage for react|vue-next|vue2|mobile-react|mobile-vue|miniprogram|uniapp
  --list-categories         List all categories
  --limit <n>               Max results (default: 50)
  --stats                   Show icon statistics
  --json                    Output as JSON
  --help                    Show this help
`);
}

function parseArgs(args) {
  const options = { limit: 50 };
  const withValue = new Set(['--style', '--category', '--search', '--name', '--limit', '--stack']);
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--help') { options.help = true; break; }
    if (withValue.has(arg)) {
      i += 1;
      if (i >= args.length || (args[i] && args[i].startsWith('--'))) {
        throw new Error(`Missing value for ${arg}`);
      }
    }
    switch (arg) {
      case '--style': options.style = args[i]; break;
      case '--category': options.category = args[i]; break;
      case '--search': options.search = args[i]; break;
      case '--name': options.name = args[i]; break;
      case '--limit': options.limit = parseInt(args[i], 10) || 50; break;
      case '--stack': options.stack = normalizeStack(args[i]); break;
      case '--list-categories': options.listCategories = true; break;
      case '--exact': options.exact = true; break;
      case '--stats': options.stats = true; break;
      case '--json': options.json = true; break;
      default: throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return options;
}

function normalizeStack(stack) {
  const normalized = stackAliases[stack.toLowerCase()];
  if (!normalized) {
    throw new Error(`Unknown stack: ${stack}. Use react, vue-next, vue2, mobile-react, mobile-vue, miniprogram, or uniapp.`);
  }
  return normalized;
}

function listCategories(manifest, style) {
  const styles = style ? [style] : ['filled', 'outline'];
  for (const s of styles) {
    if (!manifest[s]) continue;
    console.log(`[${s}] categories:`);
    for (const [key, data] of Object.entries(manifest[s])) {
      console.log(`  ${key} (${data.labelCN}): ${data.icons.length} icons`);
    }
  }
}

function showStats(manifest) {
  let filledCount = 0, outlineCount = 0;
  for (const [, v] of Object.entries(manifest.filled)) filledCount += v.icons.length;
  for (const [, v] of Object.entries(manifest.outline)) outlineCount += v.icons.length;
  console.log(`TDesign Icons Statistics:`);
  console.log(`  filled:  ${filledCount} icons, ${Object.keys(manifest.filled).length} categories`);
  console.log(`  outline: ${outlineCount} icons, ${Object.keys(manifest.outline).length} categories`);
  console.log(`  total:   ${filledCount + outlineCount} icons`);
}

function searchIcons(manifest, options) {
  let icons = flattenIcons(manifest);

  if (options.style) {
    icons = icons.filter((i) => i.style === options.style);
  }
  if (options.category) {
    icons = icons.filter((i) => i.category.toLowerCase() === options.category.toLowerCase());
  }
  if (options.search) {
    icons = fuzzyMatch(options.search, icons);
  }
  if (options.name) {
    const lower = options.name.toLowerCase();
    if (options.exact) {
      // Exact name match only — fast path, no fuzzy
      icons = icons.filter((i) => i.name.toLowerCase() === lower);
    } else {
      icons = icons.filter((i) => i.name.toLowerCase().includes(lower));
    }
  }

  return icons.slice(0, options.limit);
}

function formatIcon(icon) {
  const kw = icon.keywords.length ? ` [${icon.keywords.join(', ')}]` : '';
  return `  ${icon.name}  (${icon.style} / ${icon.category} / ${icon.categoryCN})${kw}`;
}

function toIconComponentName(iconName) {
  return `${iconName
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}Icon`;
}

function stackUsageFor(stack, iconName) {
  const usage = stackUsage[stack];
  if (usage.importFrom) {
    const componentName = iconName ? toIconComponentName(iconName) : undefined;
    return {
      stack,
      label: usage.label,
      componentPackage: usage.componentPackage,
      iconPackage: usage.iconPackage,
      install: `npm install ${usage.iconPackage}`,
      importName: componentName,
      importStatement: componentName ? `import { ${componentName} } from '${usage.importFrom}';` : undefined,
    };
  }
  return {
    stack,
    label: usage.label,
    componentPackage: usage.componentPackage,
    usage: usage.tag && iconName ? `<${usage.tag} name="${iconName}" />` : undefined,
    note: usage.note,
  };
}

function printStackUsage(usage) {
  console.log('\nStack usage:');
  console.log(`  stack: ${usage.label}`);
  console.log(`  component package: ${usage.componentPackage}`);
  if (usage.iconPackage) {
    console.log(`  icon package: ${usage.iconPackage}`);
    console.log(`  install: ${usage.install}`);
    if (usage.importStatement) console.log(`  import: ${usage.importStatement}`);
  }
  if (usage.usage) console.log(`  usage: ${usage.usage}`);
  if (usage.note) console.log(`  note: ${usage.note}`);
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

  if (options.stack && !options.search && !options.name && !options.category && !options.listCategories && !options.stats) {
    printStackUsage(stackUsageFor(options.stack));
    return;
  }

  const manifest = readManifest();

  // Fast path: --name with --exact — skips flatten + fuzzyMatch, direct traversal
  if (options.name && options.exact) {
    const results = exactNameLookup(manifest, options.name, options);
    const usage = options.stack && results.length ? stackUsageFor(options.stack, results[0].name) : undefined;
    if (options.json) {
      console.log(JSON.stringify(usage ? { icons: results, usage } : results, null, 2));
    } else if (!results.length) {
      console.log('No icons found.');
    } else {
      console.log(`Found ${results.length} icon(s):`);
      results.forEach((i) => console.log(formatIcon(i)));
      if (usage) printStackUsage(usage);
    }
    return;
  }

  if (options.stats) {
    showStats(manifest);
    return;
  }

  if (options.listCategories) {
    listCategories(manifest, options.style);
    return;
  }

  if (options.style && !manifest[options.style]) {
    console.error(`Unknown style: ${options.style}. Use 'filled' or 'outline'.`);
    exit(1);
  }

  if (options.search || options.name || options.category) {
    const results = searchIcons(manifest, options);
    const usage = options.stack && results.length ? stackUsageFor(options.stack, results[0].name) : undefined;
    if (options.json) {
      console.log(JSON.stringify(usage ? { icons: results, usage } : results, null, 2));
    } else {
      if (!results.length) {
        console.log('No icons found.');
      } else {
        console.log(`Found ${results.length} icon(s):`);
        results.forEach((i) => console.log(formatIcon(i)));
        if (usage) printStackUsage(usage);
      }
    }
    return;
  }

  // Default: show stats
  showStats(manifest);
  console.log('\nUse --search, --name, --category, --list-categories or --stats.');
}

try {
  main();
} catch (error) {
  console.error(error.message);
  exit(1);
}
