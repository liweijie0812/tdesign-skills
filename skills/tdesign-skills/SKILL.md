---
name: tdesign-skills
description: 当用户提到 TDesign 组件怎么用、示例代码、props、事件或页面代码，但未明确具体技术栈（React/Vue/小程序等），或任务横跨多个 TDesign 包，需要先识别技术栈并路由到专项 skill 时使用。只负责识别技术栈和路由，不直接凭记忆回答当前栈 API。
---

# TDesign Skills 总入口

本 skill 是 TDesign 多 skill 结构的轻量路由入口。先确认项目是否使用 TDesign、识别当前技术栈和任务类型，然后进入更窄的专项 skill 或资料目录。通用强制约束见 `references/constraints.md`。

当用户在问“某组件怎么用”“给个示例”“这段 TDesign 代码怎么写”时，默认视为 API/代码落地问题：先识别当前技术栈，再进入对应技术栈 skill 查 `references/api/<component>/index.md`，不要停留在选型或 docs 总入口层凭记忆回答。

## 适用范围

- 适用：项目已安装或明确使用 TDesign（react/vue-next/vue2/mobile-react/mobile-vue/miniprogram/uniapp）。
- 适用：组件选型、API 查询、页面搭建、组件搭配设计指南、使用指南、迁移、评审、变更日志或版本能力确认。
- 不适用：未使用 TDesign 的项目，或纯 Node、构建工具、数据处理等非 UI 任务。

## 技术栈识别

先检查 `package.json` 和项目已有代码，因为只根据截图、类名或历史记忆判断容易误判技术栈（如 uni-app 和小程序都使用 `t-*` 组件）。

| 包名 | 技术栈 | 专项 skill |
| --- | --- | --- |
| `tdesign-react` | React Web | `tdesign-react` |
| `tdesign-vue-next` | Vue 3 Web | `tdesign-vue-next` |
| `tdesign-vue` | Vue 2 Web | `tdesign-vue2` |
| `tdesign-mobile-react` | React Mobile | `tdesign-mobile-react` |
| `tdesign-mobile-vue` | Vue Mobile | `tdesign-mobile-vue` |
| `tdesign-miniprogram` | Miniprogram | `tdesign-miniprogram` |
| `tdesign-uniapp` | UniApp | `tdesign-uniapp` |

易混栈判别（miniprogram vs uniapp 都用 `t-*` 组件）：

- 出现 `usingComponents`（`*.json`）和 `bind:event` → `tdesign-miniprogram`。
- 出现 `.vue` SFC + `easycom` + `@event`，或 `manifest.json` 带 `uni-app` 标识 → `tdesign-uniapp`。
- 不确定时回到项目 `package.json` 与 `pages.json` / `app.json` 确认。

## 路由规则

优先查 `references/responsibility-map.md`。只选择 1 个主责 skill，再按需读取其他 skill 的少量参考资料。

- 技术栈不明确、跨多个 TDesign 包、需要路由 → `tdesign-skills`
- 文档入口、组件覆盖、资料索引 → `tdesign-docs`
- 组件选型、相似组件、何时使用、反模式 → `tdesign-usage-guide`
- 组件搭配设计指南、页面搭建、场景骨架 → `tdesign-composition`
- 具体 props/事件/插槽/类型/代码落地/组件用法示例 → 对应技术栈专项 skill
- 图标名称、关键词、分类、是否存在、包名、导入方式 → `tdesign-icons`
- 版本能力、新增、修复、废弃 → `tdesign-changelog`
- Web 视觉一致性、间距、配色、排版、圆角、阴影、状态 → `tdesign-composition/references/design/visual-consistency-web.md`
- 设计规范、视觉校验、Design Token、色彩、布局 → `tdesign-composition/references/design/`

## 交接规则

- 选型先 `tdesign-usage-guide`，落地代码再进入对应技术栈 API skill。
- 组件搭配设计指南和页面组合先 `tdesign-composition`，单组件写法再进入对应技术栈 API skill。
- 用户一旦追问“怎么写”“怎么用”“给示例”，无论前面经过哪个 skill，都必须回到对应技术栈 API skill，再按当前栈 `references/api/<component>/index.md` 组织回答。
- 图标名、图标包和按需导入先 `tdesign-icons`，图标组件 props 再进入对应技术栈 API skill。
- 版本线索先 `tdesign-changelog`，当前 API 形状再进入对应技术栈 API skill。
- 组件是否存在先 `tdesign-docs` 覆盖矩阵，缺失时再查 `tdesign-usage-guide` 降级策略。

## Token 节约规则

- 总入口只做路由，不展开具体 API。
- 不要一次性读取所有技术栈的 `references/api/` 树。
- 上下文紧张时，只读 1 个场景卡 + 1 个决策文档 + 1 个组件 API。
- 详细约束见 `references/constraints.md`。

## 组件用法题回答骨架

- 第一句先确认技术栈；不明确时先说明当前假设。
- 第二句说明已按当前栈 API 回答，不套用其他栈写法。
- 先列关键 API：导入、核心 props、事件、插槽或列配置。
- 再给最小示例；需要时补 1 个最接近需求的变体示例。
- 最后指出仍需结合项目现有代码确认的点，如按需引入、全局注册、类型泛型或插件式调用。

## Few-shot 路由示例

- 用户问：“TDesign 的 `Table` 怎么用？”
  先答：技术栈不明确，先识别项目依赖或现有代码，再转对应 API skill；不要直接给 React 或 Vue 的示例。

- 用户问：“`tdesign-vue-next` 的 `Select` 多选怎么写？”
  先答：直接进入 `tdesign-vue-next`，先查 `references/api/select/index.md`，再按需读 `references/examples/select/`。

- 用户问：“我这个栈有没有 `TreeSelect`？”
  先答：先走 `tdesign-docs` 查覆盖矩阵，不直接编写示例。

- 用户问：“后台列表页该用 `Table` 还是 `List`？”
  先答：先走 `tdesign-usage-guide` 做选型，不直接展开 props。
