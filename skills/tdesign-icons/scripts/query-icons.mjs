import { argv, exit } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = resolve(__dirname, '../references/manifest.json');

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
  // exact name match
  const exact = candidates.filter((c) => c.name.toLowerCase() === lower);
  if (exact.length) return exact;
  // prefix match
  const prefix = candidates.filter((c) => c.name.toLowerCase().startsWith(lower));
  if (prefix.length) return prefix.slice(0, 50);
  // contained match
  const contains = candidates.filter((c) => c.name.toLowerCase().includes(lower));
  if (contains.length) return contains.slice(0, 50);
  // keyword match (Chinese or English)
  const kw = candidates.filter((c) =>
    c.keywords.some((k) => k.toLowerCase().includes(lower))
  );
  return kw.slice(0, 50);
}

function printHelp() {
  console.log(`Usage:
  node skills/tdesign-icons/scripts/query-icons.mjs --list-categories [--style filled|outline]
  node skills/tdesign-icons/scripts/query-icons.mjs --category Brand [--style filled|outline] [--limit 20]
  node skills/tdesign-icons/scripts/query-icons.mjs --search <keyword>
  node skills/tdesign-icons/scripts/query-icons.mjs --name <icon-name>
  node skills/tdesign-icons/scripts/query-icons.mjs --stats
  node skills/tdesign-icons/scripts/query-icons.mjs --style filled --search <keyword>

Options:
  --style <filled|outline>  Filter by style (default: all)
  --category <name>         Filter by category (English name, e.g. Brand)
  --search <keyword>        Search icons by name or keyword (supports Chinese/English)
  --name <icon-name>        Exact or prefix icon name lookup
  --list-categories         List all categories
  --limit <n>               Max results (default: 50)
  --stats                   Show icon statistics
  --json                    Output as JSON
  --help                    Show this help
`);
}

function parseArgs(args) {
  const options = { limit: 50 };
  const withValue = new Set(['--style', '--category', '--search', '--name', '--limit']);
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
      case '--list-categories': options.listCategories = true; break;
      case '--stats': options.stats = true; break;
      case '--json': options.json = true; break;
      default: throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return options;
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
    icons = icons.filter((i) => i.name.toLowerCase().includes(lower));
  }

  return icons.slice(0, options.limit);
}

function formatIcon(icon) {
  const kw = icon.keywords.length ? ` [${icon.keywords.join(', ')}]` : '';
  return `  ${icon.name}  (${icon.style} / ${icon.category} / ${icon.categoryCN})${kw}`;
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

  const manifest = readManifest();

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
    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
    } else {
      if (!results.length) {
        console.log('No icons found.');
      } else {
        console.log(`Found ${results.length} icon(s):`);
        results.forEach(formatIcon);
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
