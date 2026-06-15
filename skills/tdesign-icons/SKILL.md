---
name: tdesign-icons
description: 当用户需要查找 TDesign 图标、搜索图标名称/关键词、浏览图标分类、确认图标是否存在，或需要确定 TDesign 图标包名、安装命令、导入方式和当前技术栈图标写法时使用。只负责 manifest 图标检索和官方图标包用法；不负责业务图标设计或版本历史。
---

# TDesign Icons 图标检索

本 skill 用于查找和检索 TDesign Icons 图标库中的图标，并锁定当前技术栈应使用的官方图标包、安装命令和导入方式。

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
node skills/tdesign-icons/scripts/query-icons.mjs --name search --exact --stack mobile-vue
```

### 找到图标后的推荐方式

找到图标名后，必须先确认当前技术栈，再使用下表中的官方包名和导入方式；不要写占位包名、猜包名或跨栈复用包名。

| 技术栈 | 安装包 | 推荐写法 |
| --- | --- | --- |
| React Web / `tdesign-react` | `tdesign-icons-react` | `import { SearchIcon } from 'tdesign-icons-react';` |
| Vue 3 Web / `tdesign-vue-next` | `tdesign-icons-vue-next` | `import { SearchIcon } from 'tdesign-icons-vue-next';` |
| Vue 2 Web / `tdesign-vue` | `tdesign-icons-vue` | `import { SearchIcon } from 'tdesign-icons-vue';` |
| Mobile React / `tdesign-mobile-react` | `tdesign-icons-react` | `import { SearchIcon } from 'tdesign-icons-react';` |
| Mobile Vue / `tdesign-mobile-vue` | `tdesign-icons-vue-next` | `import { SearchIcon } from 'tdesign-icons-vue-next';` |
| Miniprogram / `tdesign-miniprogram` | 使用组件库内置 `t-icon`，多色 / 可变粗细才按 `references/usage-guide.md` 评估 `@mp-svg-icons/*` | 不安装 React / Vue 图标包 |
| UniApp / `tdesign-uniapp` | 使用组件库 Icon API，先查当前项目依赖和 `tdesign-uniapp` API | 不安装 React / Vue 图标包 |

图标组件 API（`size`、事件、插槽等）参考当前技术栈 skill 的 `references/api/icon/index.md`。
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

# 同时输出当前技术栈的图标包和按需导入
node skills/tdesign-icons/scripts/query-icons.mjs --name search --exact --stack mobile-react
node skills/tdesign-icons/scripts/query-icons.mjs --name search --exact --stack mobile-vue

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

## 包名与导入红线

- 禁止输出 `tdesign-icons-xxx`、`tdesign-icons-web`、`tdesign-icon`、`tdesign-icons` 等不存在或占位包名。
- 禁止在 Vue 3 项目中安装或导入 `tdesign-icons-react`；禁止在 React 项目中安装或导入 `tdesign-icons-vue-next` / `tdesign-icons-vue`。
- 禁止在 Vue 3 项目中使用 `tdesign-icons-vue`，除非项目实际依赖是 Vue 2 的 `tdesign-vue`。
- Mobile React 使用 `tdesign-icons-react`，Mobile Vue 使用 `tdesign-icons-vue-next`；禁止把 Mobile Vue 写成 `tdesign-icons-vue`。
- 禁止在小程序或 uni-app 任务中直接套用 React / Vue 图标包；必须先回到当前端 `Icon` API 或项目依赖确认。
- Web 生产代码优先使用按需图标组件；`<Icon name="..." />` / `<t-icon name="..." />` 可能走默认图标加载机制，只有当前项目已确认可用时才使用。
- 生成安装命令时必须同时给出当前技术栈组件包和图标包的对应关系，例如 `tdesign-vue-next` 对应 `tdesign-icons-vue-next`。

## 约束

- 图标名称以 manifest 数据为准，不要凭经验编造图标名。
- 不要直接读取 `references/manifest.json`；该文件很大，只通过 `query-icons.mjs` 按需查询。
- **优先推荐按需引入**，且包名必须来自“找到图标后的推荐方式”矩阵，不默认使用 `<Icon name="..." />` / `<t-icon name="..." />`。
- **精确查找优先用 `--name <名称> --exact`**（精确匹配，跳过模糊阶段）；模糊搜索用 `--search`。
- 搜索不到图标时，可尝试放宽关键词、切换风格或使用 `--list-categories` 浏览。
- 图标组件 props、事件和当前栈写法，必须转到对应技术栈 `Icon` API；包名不得脱离本 skill 的官方包名矩阵。
- 更新 manifest 数据：`node skills/tdesign-icons/scripts/convert-manifest.mjs`。
