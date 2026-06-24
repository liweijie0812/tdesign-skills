---
name: tdesign-uniapp
description: 当项目使用 tdesign-uniapp 或用户提到 TDesign uni-app 组件、TDesign uni-app 的 easycom 引入、@event 事件或代码落地时使用。
---

# TDesign UniApp API

本 skill 只服务 `tdesign-uniapp`。`tdesign-uniapp` 基于 TDesign 小程序组件适配 uni-app，使用 Vue 风格的 `@event` 事件绑定，组件通过 easycom 自动引入或手动 `import`，属性使用短横线（kebab-case）命名。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 先确认项目安装或引入 `tdesign-uniapp`，并查看已有 `.vue` 文件中的写法。
2. 典型写法参考查 `references/examples/README.md`（Vue SFC 模板、easycom 自动引入、@event 事件绑定、`v-model:value` 等）。
3. 组件是否存在：已安装 `tdesign-docs` 时查 `../tdesign-docs/references/meta/stack-matrix-miniprogram.json` 的 `coverage.byStack.uniapp`（uni-app 组件范围与小程序一致）；未安装时以当前栈 `references/api/` 目录实际存在的组件为准，不从记忆推断，建议补装 `tdesign-docs` 获得准确覆盖矩阵。
4. 具体组件 API 查 `references/api/<component>/index.md`。
5. API 表不够精确时，查同目录 `type.ts`、`props.ts`（如存在）、`common.ts` 或子组件类型文件。
6. 涉及跨端语义或端差异时：已安装 `tdesign-docs` 时先看 `../tdesign-docs/references/api/shared/index.md`；未安装时以当前栈 `references/api/<component>/` 为准，不确定的差异明确告知用户需人工确认，建议补装 `tdesign-docs` 获得跨端共享契约。
7. 移动端页面骨架与组合：已安装 `tdesign-composition` 时查 `../tdesign-composition/references/scenarios/mobile-pages.md`；未安装时只用本栈组件按移动端惯例（导航 + Cell/Form/List + 反馈）组织，不照搬 Web 中后台骨架，建议补装 `tdesign-composition` 获得标准场景卡。版本能力先 `tdesign-changelog`，未安装时跳过，查完回本栈 API 文件确认。

## UniApp 写法边界

- 使用 `t-*` 组件标签，属性使用短横线（kebab-case），事件使用 `@event` 语法（非小程序 `bind:event`）。
- 所有受控组件统一使用 `value` 作为双向绑定属性名，不使用 Vue 3 默认的 `modelValue`；使用 `v-model` 时必须写成 `v-model:value`，不要写裸 `v-model` 或 `v-model:modelValue`，因为 `tdesign-uniapp` 基于小程序适配，Vue 3 默认的 `modelValue` 在 uni-app 中不生效。
- 组件通过 `easycom` 自动引入，无需手动 `usingComponents`；也可手动 `import` 后注册。
- 样式使用 `<style>` 或 `<style scoped>`，不使用小程序的 `@import` WXSS 路径。
- 不把 React 点语法、Vue Web 裸 `v-model` 约定、小程序 `bind` 事件或 WXML 模板语法套到 uni-app，因为 uni-app 使用 Vue template 而非 WXML。
- 不凭经验编造 props、事件、插槽或组件名，应查 `references/api/` 确认。

### 与小程序的关键差异

| 特性 | 小程序 (tdesign-miniprogram) | uni-app (tdesign-uniapp) |
| --- | --- | --- |
| 组件引入 | JSON `usingComponents` | easycom 自动引入 / `import` |
| 事件绑定 | `bind:event` / `bindevent` | `@event` |
| 属性传递 | kebab-case | kebab-case（相同） |
| 模板语法 | WXML | Vue template |
| 样式 | WXSS | CSS / SCSS / Less |
| 数据绑定 | `{{ }}` | `{{ }}`（相同） |
| 条件/循环 | `wx:if` / `wx:for` | `v-if` / `v-for` |
| 组件标签 | `<t-button>` | `<t-button>`（相同） |

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`，因为整树加载会浪费大量 token 且信息过载。
- 优先用 TDesign UniApp 组件和 props 解决问题，最后才补最小 CSS，因为 TDesign uni-app 组件经过多端兼容测试。
- UniApp 组件 API 参考小程序组件文档，但事件写法必须使用 `@event` Vue 语法。
- UniApp 受控组件双向绑定必须使用 `v-model:value`，与 React 版和原生小程序版的 `value` 命名保持一致，因为 `modelValue` 在 uni-app 中不生效。
- 不引入其他组件库，因为混用会导致样式冲突、包体积膨胀和视觉不一致；不用 `div` / `ul > li` / `window.confirm()` 重复实现 TDesign 已有能力，因为重复实现会绕过 TDesign 的多端兼容和主题适配。
- 当前栈组件不存在或能力不足：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`；未安装时优先换相似 TDesign 组件，再考虑 uni-app 原生能力 + 最小 CSS，并在回复中说明这是非 TDesign 官方能力，建议补装 `tdesign-usage-guide` 获得完整降级策略。
- 路由交接：选型→`tdesign-usage-guide`、页面组合→`tdesign-composition`、图标→`tdesign-icons`、版本→`tdesign-changelog`；查完线索回本栈 `references/api/<component>/index.md` 确认写法。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
