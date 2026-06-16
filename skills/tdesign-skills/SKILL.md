---
name: tdesign-skills
description: 当 TDesign 任务尚未明确技术栈或横跨多个 TDesign 包，需要先识别技术栈并路由到专项 skill 时使用。
---

# TDesign Skills 总入口

本 skill 是 TDesign 多 skill 结构的轻量路由入口。先确认项目是否使用 TDesign、识别当前技术栈和任务类型，然后进入更窄的专项 skill 或资料目录。通用强制约束见 `references/constraints.md`。

## 适用范围

- 适用：项目已安装或明确使用 TDesign（react/vue-next/vue2/mobile-react/mobile-vue/miniprogram/uniapp）。
- 适用：组件选型、API 查询、页面搭建、组件搭配、使用指南、迁移、评审、变更日志或版本能力确认。
- 不适用：未使用 TDesign 的项目，或纯 Node、构建工具、数据处理等非 UI 任务。

## 技术栈识别

先检查 `package.json` 和项目已有代码，禁止只根据截图、类名或历史记忆判断。

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
- 页面搭建、组件搭配、场景骨架 → `tdesign-composition`
- 具体 props/事件/插槽/类型/代码落地 → 对应技术栈专项 skill
- 图标名称、关键词、分类、是否存在、包名、导入方式 → `tdesign-icons`
- 版本能力、新增、修复、废弃 → `tdesign-changelog`
- 设计规范、视觉校验、Design Token、色彩、布局 → `tdesign-composition/references/design/`

## 交接规则

- 选型先 `tdesign-usage-guide`，落地代码再进入对应技术栈 API skill。
- 页面组合先 `tdesign-composition`，单组件写法再进入对应技术栈 API skill。
- 图标名、图标包和按需导入先 `tdesign-icons`，图标组件 props 再进入对应技术栈 API skill。
- 版本线索先 `tdesign-changelog`，当前 API 形状再进入对应技术栈 API skill。
- 组件是否存在先 `tdesign-docs` 覆盖矩阵，缺失时再查 `tdesign-usage-guide` 降级策略。

## Token 节约规则

- 总入口只做路由，不展开具体 API。
- 不要一次性读取所有技术栈的 `references/api/` 树。
- 上下文紧张时，只读 1 个场景卡 + 1 个决策文档 + 1 个组件 API。
- 详细约束见 `references/constraints.md`。
