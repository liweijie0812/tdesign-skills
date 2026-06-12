---
name: tdesign-icons
description: 当用户需要查找 TDesign 图标、搜索图标名称/关键词、浏览图标分类、确认图标是否存在，或需要为 TDesign 项目选择合适的图标时使用。使用 manifest 数据提供图标检索能力。
---

# TDesign Icons 图标检索

本 skill 用于查找和检索 TDesign Icons 图标库中的图标，支持按名称、关键词、分类和风格进行搜索。

数据来源：`tdesign-icons` 官方 `manifest.js`，包含 2000+ 个图标的全量元数据。

## 查阅顺序

1. 按关键词/分类/名称搜索图标：使用 `scripts/query-icons.mjs`。
2. 找到图标名后，**优先推荐按需引入**（`import { XxxIcon } from 'tdesign-icons-xxx'`），不走网络 CDN。
3. 图标组件 API（`size`、`onClick` 等）参考当前技术栈 skill 的 `references/api/icon/index.md`。
4. 使用方式、多色图标、小程序适配等详细参考：查 `references/usage-guide.md`。

## 快速查询

```bash
# 统计全量图标信息
node skills/tdesign-icons/scripts/query-icons.mjs --stats

# 列出所有分类
node skills/tdesign-icons/scripts/query-icons.mjs --list-categories
node skills/tdesign-icons/scripts/query-icons.mjs --list-categories --style outline

# 按关键词搜索（支持中文/英文）
node skills/tdesign-icons/scripts/query-icons.mjs --search 搜索
node skills/tdesign-icons/scripts/query-icons.mjs --search close
node skills/tdesign-icons/scripts/query-icons.mjs --style filled --search 箭头

# 按分类浏览图标
node skills/tdesign-icons/scripts/query-icons.mjs --category Brand
node skills/tdesign-icons/scripts/query-icons.mjs --category Arrows --style outline --limit 10

# 精确查找图标名称
node skills/tdesign-icons/scripts/query-icons.mjs --name chevron-down

# JSON 输出（便于程序处理）
node skills/tdesign-icons/scripts/query-icons.mjs --search edit --json
```

## 图标命名规则

- 格式：`{语义名}-{变体?}-{风格}`，如 `search-filled`、`chevron-down`、`logo-android-filled`
- `filled`（实心/填充）以 `-filled` 结尾；`outline`（线性/描边）不带风格后缀
- 变体（如 `-1`、`-2`）区分同语义不同形态
- 导入名规则：`search` → `SearchIcon`（首字母大写 + `Icon` 后缀），`chevron-down` → `ChevronDownIcon`

## 约束

- 图标名称以 manifest 数据为准，不要凭经验编造图标名。
- **优先推荐按需引入**，不默认使用 `<Icon name="..." />` 走 CDN。
- 搜索不到图标时，可尝试放宽关键词、切换风格或使用 `--list-categories` 浏览。
- 更新 manifest 数据：`node skills/tdesign-icons/scripts/convert-manifest.mjs`。
