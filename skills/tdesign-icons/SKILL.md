---
name: tdesign-icons
description: 当用户需要查找 TDesign 图标、搜索图标名称/关键词、浏览图标分类、确认图标是否存在，或需要为 TDesign 项目选择合适的图标名时使用。只负责 manifest 图标检索；不负责图标组件 API、业务图标设计或版本历史。
---

# TDesign Icons 图标检索

本 skill 用于查找和检索 TDesign Icons 图标库中的图标，支持按名称、关键词、分类和风格进行搜索。

数据来源：`tdesign-icons` 官方 `manifest.js`，包含 2000+ 个图标的全量元数据。

## 查阅顺序

### 场景 A：精确查找（用户已知图标名或想确认某图标是否存在）

使用 `--name <图标名> --exact`，脚本直接遍历 manifest 结构做精确匹配，跳过 flatten 和模糊匹配阶段，结果精确、响应快。

```bash
node skills/tdesign-icons/scripts/query-icons.mjs --name logo-github --exact
node skills/tdesign-icons/scripts/query-icons.mjs --name close --exact
```

适合：用户问"有没有 xxx 图标？"、"xxx 图标叫什么？"等确认性查询。

### 场景 B：模糊搜索（用户不知道确切图标名，按关键词/分类查找）

使用 `--search` 或 `--name`（不带 `--exact`），走 6 级模糊匹配：精确名 → 前缀 → 包含 → 中文关键词 → 名称模糊 → 关键词模糊。

```bash
node skills/tdesign-icons/scripts/query-icons.mjs --search <关键词>
node skills/tdesign-icons/scripts/query-icons.mjs --category <分类名>
```

### 找到图标后的推荐方式

找到图标名后，**优先推荐按需引入**（`import { XxxIcon } from 'tdesign-icons-xxx'`），不走网络 CDN。
图标组件 API（`size`、`onClick` 等）参考当前技术栈 skill 的 `references/api/icon/index.md`。
使用方式、多色图标、小程序适配等详细参考：查 `references/usage-guide.md`。

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

## 常见品牌图标速查

以下是 Brand 分类中的常用品牌图标示例（省略 `logo-` 前缀即为导入名，如 `logo-github` → `LogoGithubIcon`）：

| 图标名 | 风格 |
|--------|------|
| `logo-github` / `logo-github-filled` | outline / filled |
| `logo-gitlab` / `logo-gitlab-filled` | outline / filled |
| `logo-chrome` / `logo-chrome-filled` | outline / filled |
| `logo-apple` / `logo-apple-filled` | outline / filled |
| `logo-android` / `logo-android-filled` | outline / filled |
| `logo-windows` / `logo-windows-filled` | outline / filled |
| `logo-figma` / `logo-figma-filled` | outline / filled |
| `logo-alipay` / `logo-alipay-filled` | outline / filled |
| `logo-wechatpay` / `logo-wechatpay-filled` | outline / filled |
| `logo-qq` / `logo-qq-filled` | outline / filled |

> 更多品牌图标通过 `--category Brand` 动态获取；不确定名称时用 `--search <关键词>`。

## 图标命名规则

- 格式：`{语义名}-{变体?}-{风格}`，如 `search-filled`、`chevron-down`、`logo-android-filled`
- `filled`（实心/填充）以 `-filled` 结尾；`outline`（线性/描边）不带风格后缀
- 变体（如 `-1`、`-2`）区分同语义不同形态
- 导入名规则：`search` → `SearchIcon`（首字母大写 + `Icon` 后缀），`chevron-down` → `ChevronDownIcon`

## 约束

- 图标名称以 manifest 数据为准，不要凭经验编造图标名。
- **优先推荐按需引入**，不默认使用 `<Icon name="..." />` 走 CDN。
- **精确查找优先用 `--name <名称> --exact`**（精确匹配，跳过模糊阶段）；模糊搜索用 `--search`。
- 搜索不到图标时，可尝试放宽关键词、切换风格或使用 `--list-categories` 浏览。
- 图标组件 props、事件、导入包名和当前栈写法，必须转到对应技术栈 `Icon` API。
- 更新 manifest 数据：`node skills/tdesign-icons/scripts/convert-manifest.mjs`。
