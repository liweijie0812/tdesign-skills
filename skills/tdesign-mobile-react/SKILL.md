---
name: tdesign-mobile-react
description: 当项目使用 tdesign-mobile-react，且任务需要 React Mobile 组件 API、props、事件、类型、导入方式或实现/修复 TDesign 移动端 React UI 时使用。只读取 references/api/。
---

# TDesign Mobile React API

本 skill 只服务 `tdesign-mobile-react`。实现时使用移动端 React API，不照搬 Web React。

## 查阅顺序

1. 先确认项目安装 `tdesign-mobile-react`，并查看已有代码的导入与写法。
2. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix.json` 的 `coverage.byStack.mobile-react` 或移动端覆盖范围。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
5. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
6. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
7. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Mobile React API 文件确认。

## Mobile React 写法边界

- 使用移动端 React 组件和事件，不套用 Web React 组件默认值或桌面交互。
- 移动端页面不要照搬 Web 中后台应用壳、密集表格和复杂筛选区。
- 不要把 `tdesign-react`、Mobile Vue 或 Miniprogram API 当作 Mobile React API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign Mobile 组件和 props 解决问题，最后才补最小 CSS。
- 如果 Mobile React 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
