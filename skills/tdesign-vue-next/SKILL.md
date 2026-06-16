---
name: tdesign-vue-next
description: 当项目使用 tdesign-vue-next 且需要 Vue 3 Web 单组件 API、props、事件、插槽、v-model 或代码落地时使用。
---

# TDesign Vue Next API

本 skill 只服务 `tdesign-vue-next`。实现时使用 Vue 3 模板、Composition API、Vue 事件、插槽和 `v-model` 约定。通用约束、跨栈隔离和路由交接见 `../tdesign-skills/references/constraints.md`。

## 查阅顺序

1. 先确认项目安装 `tdesign-vue-next`，并查看已有代码的导入与写法。
2. 典型写法参考查 `references/examples/README.md`（Composition API、v-model、具名插槽、应用壳与页面模板等）。
3. 生成 Web 中后台完整页面时：已安装 `tdesign-composition` 时先用它确认场景和设计自检项；未安装时按 Web 中后台惯例自行规划，不凭记忆编造组合规则，建议补装 `tdesign-composition` 获得标准场景。再查 `references/examples/` 的完整模板。
4. 组件是否存在：已安装 `tdesign-docs` 时查 `../tdesign-docs/references/meta/stack-matrix-web.json` 的 `coverage.byStack.vue-next` 以及 `coverage.hasExample.byStack.vue-next`；未安装时以当前栈 `references/api/` 目录实际存在的组件为准，不从记忆推断，建议补装 `tdesign-docs` 获得准确覆盖矩阵。
5. 具体组件 API 查 `references/api/<component>/index.md`。
6. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
7. 涉及跨端语义或端差异时：已安装 `tdesign-docs` 时先看 `../tdesign-docs/references/api/shared/index.md`；未安装时以当前栈 `references/api/<component>/` 为准，不确定的差异明确告知用户需人工确认，建议补装 `tdesign-docs` 获得跨端共享契约。
8. 版本能力先 `tdesign-changelog`；未安装时跳过查询，不凭记忆编造版本结论，建议补装 `tdesign-changelog` 获得准确版本能力，查完回本栈 API 文件确认。

## Vue Next 写法边界

- 使用 Vue 3 模板、组件标签、具名插槽和 `v-model`，不套用 React 点语法。
- 事件名、插槽名、受控字段和子组件必须以 `references/api/` 为准。
- 不要把 Vue 2、React、Mobile 或 Miniprogram API 当作 Vue Next API。
- 不要凭经验编造 props、事件、插槽或函数式调用。

> 应用壳、页面模板和导入方式（全局注册 / 按需引入 / auto-import-resolver / 插件式 API）见 `references/examples/README.md`。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign 组件和 props 解决问题，最后才补最小 CSS。
- Web 中后台页面生成后的 CSS 必须优先使用 TDesign Token；Header、危险操作、空态、加载态等按 `tdesign-composition` 的 checklist 自检。
- 禁止引入其他组件库；禁止用 `div` / `ul > li` / `window.confirm()` 重复实现 TDesign 已有能力。
- 当前栈组件不存在或能力不足：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`；未安装时优先换相似 TDesign 组件，再考虑原生 HTML + 最小 CSS，并在回复中说明这是非 TDesign 官方能力，建议补装 `tdesign-usage-guide` 获得完整降级策略。
- 路由交接：选型→`tdesign-usage-guide`、页面组合→`tdesign-composition`、图标→`tdesign-icons`、版本→`tdesign-changelog`；查完线索回本栈 `references/api/<component>/index.md` 确认写法。
- 完整职责表、跨栈隔离细则和强制约束见 `../tdesign-skills/references/constraints.md`（完整 collection 模式下作为详细参考）。
