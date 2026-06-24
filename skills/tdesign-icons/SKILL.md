---
name: tdesign-icons
description: 当用户需要查找 TDesign 图标、搜索图标名称/关键词、浏览图标分类、确认图标是否存在，或需要确定 TDesign 图标包名、安装命令和导入方式时使用。
---

# TDesign Icons 图标检索

本 skill 用于查找和检索 TDesign Icons 图标库中的图标，并锁定当前技术栈应使用的官方图标包、安装命令和导入方式。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

数据来源：`tdesign-icons` 官方 `manifest.js`，包含 2000+ 个图标的全量元数据。命名规则、品牌图标速查、6 级模糊匹配流程、多色 / 可变粗细写法和分类参考查 `references/usage-guide.md`。

## 查阅顺序

### 场景 A：精确查找（用户已知图标名或想确认某图标是否存在）

使用 `--name <图标名> --exact`，直接精确匹配，跳过模糊匹配阶段，响应最快。

```bash
node skills/tdesign-icons/scripts/query-icons.mjs --name logo-github --exact
node skills/tdesign-icons/scripts/query-icons.mjs --name search --exact --stack mobile-react
```

### 场景 B：模糊搜索（用户不知道确切图标名，按关键词/分类查找）

使用 `--search` 或 `--name`（不带 `--exact`），走 6 级模糊匹配（流程见 `references/usage-guide.md`）。

```bash
node skills/tdesign-icons/scripts/query-icons.mjs --search <关键词>
node skills/tdesign-icons/scripts/query-icons.mjs --category Brand
```

### 找到图标后的推荐方式

找到图标名后，必须先确认当前技术栈，再使用下表中的官方包名和导入方式；包名必须来自下方矩阵，因为这些占位包名在 npm 上不存在，会导致安装失败。多色 / 可变粗细、CDN 用法和小程序适配详见 `references/usage-guide.md`。

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

## 快速查询

```bash
# 统计全量图标信息
node skills/tdesign-icons/scripts/query-icons.mjs --stats

# 列出所有分类
node skills/tdesign-icons/scripts/query-icons.mjs --list-categories

# 精确查找（最快，确认某图标是否存在）
node skills/tdesign-icons/scripts/query-icons.mjs --name chevron-down --exact

# 模糊搜索 + JSON 输出
node skills/tdesign-icons/scripts/query-icons.mjs --search edit --json
```

## 包名与导入红线

- 包名必须来自下方官方包名矩阵，因为 `tdesign-icons-xxx`、`tdesign-icons-web`、`tdesign-icon`、`tdesign-icons` 等包名在 npm 上不存在，会导致安装失败。
- 不在 Vue 3 项目中安装或导入 `tdesign-icons-react`，不在 React 项目中安装或导入 `tdesign-icons-vue-next` / `tdesign-icons-vue`，因为跨栈包会导致组件无法渲染。
- 不在 Vue 3 项目中使用 `tdesign-icons-vue`，除非项目实际依赖是 Vue 2 的 `tdesign-vue`，因为 Vue 2 和 Vue 3 的图标包不兼容。
- Mobile React 使用 `tdesign-icons-react`，Mobile Vue 使用 `tdesign-icons-vue-next`；不把 Mobile Vue 写成 `tdesign-icons-vue`，因为 Mobile Vue 基于 Vue 3。
- 不在小程序或 uni-app 任务中直接套用 React / Vue 图标包，因为小程序和 uni-app 使用 `t-icon` 组件或按需 SVG 方案；必须先回到当前端 `Icon` API 或项目依赖确认。
- Web 生产代码优先使用按需图标组件，因为 `<Icon name="..." />` / `<t-icon name="..." />` 可能走默认图标加载机制导致全量引入；只有当前项目已确认可用时才使用。
- 生成安装命令时同时给出当前技术栈组件包和图标包的对应关系，例如 `tdesign-vue-next` 对应 `tdesign-icons-vue-next`，因为组件包和图标包的对应关系不总是显而易见。

## 约束

- 图标名称以 manifest 数据为准，不凭经验编造图标名，因为 AI 记忆中的图标名可能与实际 manifest 不一致。
- 不直接读取 `references/manifest.json`，因为该文件很大，只通过 `query-icons.mjs` 按需查询以控制 token 消耗。
- **优先推荐按需引入**，且包名必须来自“找到图标后的推荐方式”矩阵，不默认使用 `<Icon name="..." />` / `<t-icon name="..." />`，因为按需引入可以显著减少包体积。
- **精确查找优先用 `--name <名称> --exact`**；模糊搜索用 `--search`。
- 搜索不到图标时，可尝试放宽关键词、切换风格或使用 `--list-categories` 浏览。
- 图标组件 props、事件和当前栈写法，转到对应技术栈 `Icon` API；包名不得脱离本 skill 的官方包名矩阵。
- 不用 `tdesign-changelog` 查询图标包版本：它只覆盖组件库栈，不包含 `tdesign-icons-*`。
- 路由交接：图标组件 props/事件/写法→当前技术栈 `Icon` API；选型→`tdesign-usage-guide`。
- 图标包（`tdesign-icons-*`）是独立 npm 包，版本独立于组件库，`tdesign-changelog` **不覆盖**图标包，图标版本需查 npm 或对应图标包的 GitHub release。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
- 更新 manifest 数据：`node skills/tdesign-icons/scripts/convert-manifest.mjs`。
