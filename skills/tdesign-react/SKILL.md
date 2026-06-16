---
name: tdesign-react
description: 当项目使用 tdesign-react 且需要 React Web 单组件 API、props、事件、子组件、JSX 写法或代码落地时使用。
---

# TDesign React Web API

本 skill 只服务 `tdesign-react`。实现时使用 React Web JSX、React 事件、`className` / `style` 和 React 组件导入方式。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 先确认项目安装 `tdesign-react`，并查看已有代码的导入与写法。
2. 典型写法参考查 `references/examples/README.md`（React Hooks、JSX、受控表单等）。
3. 组件是否存在：已安装 `tdesign-docs` 时查 `../tdesign-docs/references/meta/stack-matrix-web.json` 的 `coverage.byStack.react`；未安装时以当前栈 `references/api/` 目录实际存在的组件为准，不从记忆推断，建议补装 `tdesign-docs` 获得准确覆盖矩阵。
4. 具体组件 API 查 `references/api/<component>/index.md`。
5. API 表不够精确时，查同目录 `type.ts`、`props.ts`（如存在）、`common.ts` 或子组件类型文件。
6. 涉及跨端语义或端差异时：已安装 `tdesign-docs` 时先看 `../tdesign-docs/references/api/shared/index.md`；未安装时以当前栈 `references/api/<component>/` 为准，不确定的差异明确告知用户需人工确认，建议补装 `tdesign-docs` 获得跨端共享契约。
7. 页面组合或页面搭建先 `tdesign-composition`，版本能力先 `tdesign-changelog`；对应 skill 未安装时跳过查询，不凭记忆编造版本或组合结论，建议补装对应 skill 获得准确结果，查完回本栈 API 文件确认。

## React 写法边界

- 使用 JSX 和 React 组件导入，不套用 Vue 模板或小程序标签写法。
- 事件、受控字段、子组件和渲染函数必须以 `references/api/` 为准。
- 不要把 `tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react` 的 API 当作 React Web API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign 组件和 props 解决问题，最后才补最小 CSS。
- 禁止引入其他组件库；禁止用 `div` / `ul > li` / `window.confirm()` 重复实现 TDesign 已有能力。
- 当前栈组件不存在或能力不足：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`；未安装时优先换相似 TDesign 组件，再考虑原生 HTML + 最小 CSS，并在回复中说明这是非 TDesign 官方能力，建议补装 `tdesign-usage-guide` 获得完整降级策略。
- 路由交接：选型→`tdesign-usage-guide`、页面组合→`tdesign-composition`、图标→`tdesign-icons`、版本→`tdesign-changelog`；查完线索回本栈 `references/api/<component>/index.md` 确认写法。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
