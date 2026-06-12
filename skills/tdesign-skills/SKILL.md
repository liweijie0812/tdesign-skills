---
name: tdesign-skills
description: 当用户项目安装或明确使用 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram、tdesign-uniapp，且任务涉及 TDesign 组件选型、实现、API、组件搭配、文档、变更日志、迁移或评审时使用。作为总入口，只做技术栈识别和专项 skill 路由。
---

# TDesign Skills 总入口

本 skill 是 TDesign 多 skill 结构的轻量路由入口。先确认项目是否使用 TDesign、识别当前技术栈和任务类型，然后进入更窄的专项 skill 或资料目录。

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

## 路由规则

- 文档入口、组件覆盖、资料索引 → `tdesign-docs`
- 组件选型、相似组件、何时使用、反模式 → `tdesign-usage-guide`
- 页面搭建、组件搭配、场景骨架 → `tdesign-composition`
- 具体 props/事件/插槽/类型 → 对应技术栈专项 skill
- 版本能力、新增、修复、废弃 → `tdesign-changelog`
- 色彩、Design Token、布局 → `tdesign-composition/references/design/`

## Token 节约规则

- 总入口只做路由，不展开具体 API。
- 不要一次性读取所有技术栈的 `references/api/` 树。
- 上下文紧张时，只读 1 个场景卡 + 1 个决策文档 + 1 个组件 API。
- 详细约束见 `references/constraints.md`。
