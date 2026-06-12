---
name: tdesign-skills
description: 当用户项目安装或明确使用 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram，且任务涉及 TDesign 组件选型、实现、API、组件搭配、文档、变更日志、迁移或评审时使用。作为总入口，只做技术栈识别和专项 skill 路由。
---

# TDesign Skills 总入口

本 skill 是 TDesign 多 skill 结构的轻量路由入口。它用于先确认项目是否使用 TDesign、识别当前技术栈和任务类型，然后进入更窄的专项 skill 或资料目录。

## 适用范围

- 适用：普通业务项目已安装或明确使用 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`。
- 适用：用户要求组件选型、组件 API 查询、页面搭建、组件搭配、使用指南、迁移、评审、变更日志或版本能力确认。
- 不适用：未使用 TDesign 的项目，或纯 Node、构建工具、数据处理等非 UI 实现任务。
- Maturity：当前仍处于早期验证阶段；具体写法必须回到当前项目代码和对应资料确认。

## 技术栈识别

先检查 `package.json` 和项目已有代码，再决定技术栈。禁止只根据截图、类名或历史记忆判断。

| 包名 | 技术栈 | 专项 skill | API 目录 |
| --- | --- | --- | --- |
| `tdesign-react` | React Web | `tdesign-react` | `../tdesign-react/references/api/` |
| `tdesign-vue-next` | Vue 3 Web | `tdesign-vue-next` | `../tdesign-vue-next/references/api/` |
| `tdesign-vue` | Vue 2 Web | `tdesign-vue2` | `../tdesign-vue2/references/api/` |
| `tdesign-mobile-react` | React Mobile | `tdesign-mobile-react` | `../tdesign-mobile-react/references/api/` |
| `tdesign-mobile-vue` | Vue Mobile | `tdesign-mobile-vue` | `../tdesign-mobile-vue/references/api/` |
| `tdesign-miniprogram` | Miniprogram | `tdesign-miniprogram` | `../tdesign-miniprogram/references/api/` |

禁止混用 React 点语法、Vue 标签写法、小程序短横线属性和不同端默认值。

## 路由规则

- 文档入口、组件覆盖、资料索引：使用 `tdesign-docs`，优先查 `../tdesign-docs/references/meta/stack-matrix.json`、`../tdesign-docs/references/meta/source-links.md` 和各目录 `README.md`。
- 组件选型、相似组件、何时使用、反模式、降级策略：使用 `tdesign-usage-guide`，优先查 `../tdesign-usage-guide/references/decisions/README.md`。
- 页面搭建、表单页、列表页、应用壳、组件搭配：使用 `tdesign-composition`，优先查 `../tdesign-composition/references/scenarios/README.md`。
- 具体 props、事件、插槽、子组件、函数式调用和类型：使用当前技术栈专项 skill，只读取对应 `../tdesign-*/references/api/<component>/`。
- 版本能力、新增、修复、废弃、Breaking Changes：使用 `tdesign-changelog`，运行 `node ../tdesign-changelog/scripts/query-changelog.mjs` 后再回到当前栈 API 文件确认写法。
- 色彩、Design Token、CSS Variables、Web 布局、中后台框架：按任务进入 `../tdesign-composition/references/design/color.md`、`../tdesign-composition/references/design/layout.md`、`../tdesign-composition/references/design/offices.md`、`../tdesign-composition/references/design/offices-task.md`。

## 核心原则

1. 优先使用 TDesign 组件、布局、子组件、props、插槽和设计变量。
2. 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件，并说明不是 TDesign 官方能力。
3. 禁止无理由引入其他组件库。
4. 禁止用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力。
5. 禁止凭经验猜 props、事件、插槽、函数式调用或小程序 external classes。

## Token 约束

- 不要一次性读取所有技术栈的 `references/api/` 树。
- 上下文紧张时，只读 1 个场景卡、1 个决策文档和 1 个组件 API 目录。
- API 表不够精确时，再读取同目录 `type.ts`、`props.ts`、`common.ts`。

## 强制约束

- 禁止在 TDesign 已提供组件的情况下手写等价实现。
- 禁止通过覆盖 TDesign 样式来实现新 UI，应优先换组件或调整 props。
- 涉及 `Dialog`、`Form`、`Table` 的页面搭建、组件组合或交互流程设计，必须先查 `../tdesign-composition/references/scenarios/README.md` 并进入对应场景卡；纯 API 查询或局部修复可直接查当前技术栈组件 API。
