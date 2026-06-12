---
name: tdesign-vue2
description: 当项目使用 tdesign-vue，且任务需要 Vue 2 Web 组件 API、props、事件、插槽、Options API、类型、导入方式或实现/修复 TDesign Vue 2 UI 时使用。只读取 references/api/。
---

# TDesign Vue 2 API

本 skill 只服务 `tdesign-vue`。实现时使用 Vue 2 模板、Options API、Vue 2 事件和插槽约定。

## 查阅顺序

1. 先确认项目安装 `tdesign-vue`，并查看已有代码的导入与写法。
2. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-web.json` 的 `coverage.byStack.vue2` 或 Web 覆盖范围。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
5. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
6. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
7. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Vue 2 API 文件确认。

## Vue 2 写法边界

- 使用 Vue 2 模板、Options API 和 Vue 2 插槽约定，不套用 Vue 3 或 React 写法。
- 事件名、插槽名、受控字段和子组件必须以 `references/api/` 为准。
- 不要把 `tdesign-vue-next`、React、Mobile 或 Miniprogram API 当作 Vue 2 API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign 组件和 props 解决问题，最后才补最小 CSS。
- 如果 Vue 2 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
