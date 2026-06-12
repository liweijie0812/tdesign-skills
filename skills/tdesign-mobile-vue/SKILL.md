---
name: tdesign-mobile-vue
description: 当项目使用 tdesign-mobile-vue，且任务需要 Mobile Vue 组件 API、props、事件、插槽、v-model、类型、导入方式或实现/修复 TDesign 移动端 Vue UI 时使用。只读取 references/api/。
---

# TDesign Mobile Vue API

本 skill 只服务 `tdesign-mobile-vue`。实现时使用移动端 Vue API，不照搬 Web Vue。

## 查阅顺序

1. 先确认项目安装 `tdesign-mobile-vue`，并查看已有代码的导入与写法。
2. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-mobile.json` 的 `coverage.byStack.mobile-vue` 或移动端覆盖范围。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
5. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
6. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
7. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Mobile Vue API 文件确认。

## Mobile Vue 写法边界

- 使用移动端 Vue 组件、事件、插槽和 `v-model`，不套用 Web Vue 默认值或桌面交互。
- 移动端页面不要照搬 Web 中后台应用壳、密集表格和复杂筛选区。
- 不要把 `tdesign-vue-next`、`tdesign-vue`、Mobile React 或 Miniprogram API 当作 Mobile Vue API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign Mobile 组件和 props 解决问题，最后才补最小 CSS。
- 如果 Mobile Vue 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
