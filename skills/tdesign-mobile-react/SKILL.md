---
name: tdesign-mobile-react
description: 当项目使用 tdesign-mobile-react，且任务需要 React Mobile 单组件 API、props、事件、类型、导入方式、示例代码或已确定组件后的代码落地/修复时使用。只负责当前栈 API；组件选型、页面组合、图标检索和版本历史转到对应专项 skill。
---

# TDesign Mobile React API

本 skill 只服务 `tdesign-mobile-react`。实现时使用移动端 React API，不照搬 Web React。

## 查阅顺序

1. 先确认项目安装 `tdesign-mobile-react`，并查看已有代码的导入与写法。
2. 需要快速参考典型写法时，查 `references/examples/`（示例展示移动端 React Hooks、Toast 反馈、移动端表单布局等典型模式）。
3. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-mobile.json` 的 `coverage.byStack.mobile-react` 或移动端覆盖范围。
4. 具体组件 API 查 `references/api/<component>/index.md`。
5. API 表不够精确时，查同目录 `type.ts`、`common.ts` 或子组件类型文件。
6. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
7. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
8. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Mobile React API 文件确认。

## Mobile React 写法边界

- 使用移动端 React 组件和事件，不套用 Web React 组件默认值或桌面交互。
- 移动端页面不要照搬 Web 中后台应用壳、密集表格和复杂筛选区。
- 不要把 `tdesign-react`、Mobile Vue 或 Miniprogram API 当作 Mobile React API。
- 不要凭经验编造 props、事件、插槽或函数式调用。
- 组件选型转到 `tdesign-usage-guide`，页面组合转到 `tdesign-composition`。
- 图标名称、图标包和导入方式转到 `tdesign-icons`，版本线索转到 `tdesign-changelog`。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign Mobile 组件和 props 解决问题，最后才补最小 CSS。
- 如果 Mobile React 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
