---
name: tdesign-mobile-vue
description: 当项目使用 tdesign-mobile-vue，或用户提到 TDesign Mobile Vue 组件怎么用、示例代码、props、事件、`v-model`、导入方式或代码落地时使用。

---

# TDesign Mobile Vue API

本 skill 只服务 `tdesign-mobile-vue`。实现时使用移动端 Vue API，不照搬 Web Vue。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 先确认项目安装 `tdesign-mobile-vue`，并查看已有代码的导入与写法。
2. 组件是否存在：已安装 `tdesign-docs` 时查 `../tdesign-docs/references/meta/stack-matrix-mobile.json` 的 `coverage.byStack.mobile-vue`；未安装时以当前栈 `references/api/` 目录实际存在的组件为准，不从记忆推断，建议补装 `tdesign-docs` 获得准确覆盖矩阵。
3. 具体组件 API 查 `references/api/<component>/index.md`。
4. API 表不够精确时，查同目录 `type.ts`、`props.ts`（如存在）、`common.ts` 或子组件类型文件。
5. 用户在问“怎么用/给示例”时，再查 `references/examples/README.md`，命中组件目录后按需读 `base.vue` 和最接近需求的关键变体。
6. 涉及跨端语义或端差异时：已安装 `tdesign-docs` 时先看 `../tdesign-docs/references/api/shared/index.md`；未安装时以当前栈 `references/api/<component>/` 为准，不确定的差异明确告知用户需人工确认，建议补装 `tdesign-docs` 获得跨端共享契约。
7. 移动端页面骨架与组合：已安装 `tdesign-composition` 时查 `../tdesign-composition/references/scenarios/mobile-pages.md`；未安装时只用本栈组件按移动端惯例（导航 + Cell/Form/List + 反馈）组织，不照搬 Web 中后台骨架，建议补装 `tdesign-composition` 获得标准场景卡。版本能力先 `tdesign-changelog`，未安装时跳过，查完回本栈 API 文件确认。

## Mobile Vue 写法边界

- 使用移动端 Vue 组件、事件、插槽和 `v-model`，不套用 Web Vue 默认值或桌面交互，因为移动端组件的触摸交互、手势支持和安全区域适配与 Web 版不同。
- 移动端页面不照搬 Web 中后台应用壳、密集表格和复杂筛选区，因为移动端交互以列表、卡片和手势为主。
- 不把 `tdesign-vue-next`、`tdesign-vue`、Mobile React 或 Miniprogram API 当作 Mobile Vue API。
- 不凭经验编造 props、事件、插槽或函数式调用，应查 `references/api/` 确认。
- 不凭经验编造子组件标签名；例如移动端 `Table` 先查 `columns`、列配置类型和插槽，不要直接生成 `t-table-column` 或其他未在当前栈 API 中确认的标签。
- 用户要求“怎么用”或“给个示例”时，先读当前组件 `references/api/<component>/index.md`，必要时补读同栈 examples 和类型源，再组织移动端 Vue 代码；不要跳过 API 直接给经验写法。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`，因为整树加载会浪费大量 token 且信息过载。
- 优先用 TDesign Mobile 组件和 props 解决问题，最后才补最小 CSS，因为 TDesign Mobile 组件经过移动端适配和手势优化。
- 不引入其他组件库，因为混用会导致样式冲突、包体积膨胀和视觉不一致；不用 `div` / `ul > li` / `window.confirm()` 重复实现 TDesign 已有能力，因为重复实现会绕过 TDesign 的可访问性、手势支持和主题适配。
- 当前栈组件不存在或能力不足：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`；未安装时优先换相似 TDesign 组件，再考虑原生 HTML + 最小 CSS，并在回复中说明这是非 TDesign 官方能力，建议补装 `tdesign-usage-guide` 获得完整降级策略。
- 路由交接：选型→`tdesign-usage-guide`、页面组合→`tdesign-composition`、图标→`tdesign-icons`、版本→`tdesign-changelog`；查完线索回本栈 `references/api/<component>/index.md` 确认写法。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
