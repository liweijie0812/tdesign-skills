---
name: tdesign-uniapp
description: 当项目使用 tdesign-uniapp，且任务需要 uni-app 组件 API、easycom 引入、短横线属性、事件绑定、插槽或实现/修复 TDesign uni-app UI 时使用。只读取 references/api/。
---

# TDesign UniApp API

本 skill 只服务 `tdesign-uniapp`。`tdesign-uniapp` 基于 TDesign 小程序组件适配 uni-app，使用 Vue 风格的 `@event` 事件绑定，组件通过 easycom 自动引入或手动 `import`，属性使用短横线（kebab-case）命名。

## 查阅顺序

1. 先确认项目安装或引入 `tdesign-uniapp`，并查看已有 `.vue` 文件中的写法。
2. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-miniprogram.json` 的 `coverage.byStack.uniapp`（uni-app 组件范围与小程序一致）。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
5. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
6. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
7. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 UniApp API 文件确认。

## UniApp 写法边界

- 使用 `t-*` 组件标签，属性使用短横线（kebab-case），事件使用 `@event` 语法（非小程序 `bind:event`）。
- 组件通过 `easycom` 自动引入，无需手动 `usingComponents`；也可手动 `import` 后注册。
- 样式使用 `<style>` 或 `<style scoped>`，不使用小程序的 `@import` WXSS 路径。
- 不要把 React 点语法、Vue Web `v-model` 约定、小程序 `bind` 事件或 WXML 模板语法套到 uni-app。
- 不要凭经验编造 props、事件、插槽或组件名。

## 与小程序的关键差异

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

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign UniApp 组件和 props 解决问题，最后才补最小 CSS。
- 如果 UniApp 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
- UniApp 组件 API 参考小程序组件文档，但事件写法必须使用 `@event` Vue 语法。
