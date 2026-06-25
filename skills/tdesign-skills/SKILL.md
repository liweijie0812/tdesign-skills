---
name: tdesign-skills
description: 当用户提到 TDesign 组件怎么用、示例代码、props、事件或页面代码，但未明确具体技术栈（React/Vue/小程序等），或任务横跨多个 TDesign 包，需要先识别技术栈并路由到专项 skill 时使用。只负责识别技术栈和路由，不直接凭记忆回答当前栈 API。
---

# TDesign Skills 总入口

本 skill 只负责识别 TDesign、判断技术栈、选择主责 skill。其它决策统一交给更窄的专项 skill，通用强制约束见 `references/constraints.md`。

## 使用协议

1. **必须通过 `load_skill` 加载本 skill**，不要绕过 skill 系统直接 grep、find 或 read `references/` 下的内部文件。`load_skill` 返回的 SKILL.md 包含查阅顺序、写法边界和约束上下文，直接读文件会丢失这些关键指导。
2. **路由到其他 skill 时，对目标 skill 也必须 `load_skill`**，不要直接读目标 skill 的 `references/` 文件。每个 skill 的 SKILL.md 定义了该 skill 的查阅顺序和写法边界，是进入该 skill 的唯一正门。
3. **严格按下方「技术栈识别」和「路由规则」执行**，不跳步、不凭经验猜路径。
4. **`references/` 下的文件只在 SKILL.md 指引下按需读取**，它们是 skill 的内部资料，不是独立文档。

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
- starter 页面模式、后台模板页面模块拆分、常见页面搭配 → `tdesign-composition`
- 具体 props/事件/插槽/类型/代码落地/组件用法示例 → 对应技术栈专项 skill
- 图标名称、关键词、分类、是否存在、包名、导入方式 → `tdesign-icons`
- 版本能力、新增、修复、废弃 → `tdesign-changelog`

## 交接规则

- 选型先 `tdesign-usage-guide`，页面组合先 `tdesign-composition`，代码落地再进入对应技术栈 API skill。
- 图标先 `tdesign-icons`，版本先 `tdesign-changelog`，组件覆盖先 `tdesign-docs`。
- 用户一旦追问“怎么写”“怎么用”“给示例”，直接交接到对应技术栈 API skill。
- 总入口不展开具体 API，不读取整棵 `references/api/` 树。
