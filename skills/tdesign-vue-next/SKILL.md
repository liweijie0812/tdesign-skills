---
name: tdesign-vue-next
description: 当项目使用 tdesign-vue-next，且任务需要 Vue 3 Web 组件 API、props、事件、插槽、v-model、类型、导入方式或实现/修复 TDesign Vue Next UI 时使用。只读取 references/api/。
---

# TDesign Vue Next API

本 skill 只服务 `tdesign-vue-next`。实现时使用 Vue 3 模板、Composition API、Vue 事件、插槽和 `v-model` 约定。

## 查阅顺序

1. 先确认项目安装 `tdesign-vue-next`，并查看已有代码的导入与写法。
2. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix.json` 的 `coverage.byStack.vue-next` 或 Web 覆盖范围。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
5. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
6. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
7. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Vue Next API 文件确认。

## Vue Next 写法边界

- 使用 Vue 3 模板、组件标签、具名插槽和 `v-model`，不套用 React 点语法。
- 事件名、插槽名、受控字段和子组件必须以 `references/api/` 为准。
- 不要把 Vue 2、React、Mobile 或 Miniprogram API 当作 Vue Next API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign 组件和 props 解决问题，最后才补最小 CSS。
- 如果 Vue Next 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
