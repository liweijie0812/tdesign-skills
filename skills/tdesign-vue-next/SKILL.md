---
name: tdesign-vue-next
description: 当项目使用 tdesign-vue-next，且任务需要 Vue 3 Web 单组件 API、props、事件、插槽、v-model、类型、导入方式、示例代码或已确定组件后的代码落地/修复时使用。只负责当前栈 API；组件选型、页面组合、图标检索和版本历史转到对应专项 skill。
---

# TDesign Vue Next API

本 skill 只服务 `tdesign-vue-next`。实现时使用 Vue 3 模板、Composition API、Vue 事件、插槽和 `v-model` 约定。

## 查阅顺序

1. 先确认项目安装 `tdesign-vue-next`，并查看已有代码的导入与写法。
2. 需要快速参考典型写法时，查 `references/examples/`（示例展示 Composition API、v-model、具名插槽等典型模式）。
3. 生成 Web 中后台完整页面时，先用 `tdesign-composition` 确认场景和设计自检项，再查 `references/examples/layout/` 或 `references/examples/pages/` 的完整模板。
4. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-web.json` 的 `coverage.byStack.vue-next` 或 Web 覆盖范围；是否已有本地示例模板查 `coverage.hasExample.byStack.vue-next`。
5. 具体组件 API 查 `references/api/<component>/index.md`。
6. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
7. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
8. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
9. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Vue Next API 文件确认。

## Vue Next 写法边界

- 使用 Vue 3 模板、组件标签、具名插槽和 `v-model`，不套用 React 点语法。
- 事件名、插槽名、受控字段和子组件必须以 `references/api/` 为准。
- 不要把 Vue 2、React、Mobile 或 Miniprogram API 当作 Vue Next API。
- 不要凭经验编造 props、事件、插槽或函数式调用。
- 组件选型转到 `tdesign-usage-guide`，页面组合转到 `tdesign-composition`。
- 图标名称、图标包和导入方式转到 `tdesign-icons`，版本线索转到 `tdesign-changelog`。

## 页面模板

- 侧边导航应用壳：查 `references/examples/layout/side-layout.vue`。
- 顶部导航应用壳：查 `references/examples/layout/top-layout.vue`。
- 混合导航应用壳：查 `references/examples/layout/mix-layout.vue`。
- 仪表盘：查 `references/examples/pages/dashboard.vue`。
- 表格列表页：查 `references/examples/pages/table-list.vue`。
- 表单页：查 `references/examples/pages/form-page.vue`。
- 详情页：查 `references/examples/pages/details-page.vue`。
- 登录页：查 `references/examples/pages/login-page.vue`。
- 错误页：查 `references/examples/pages/error-page.vue`。

## 导入方式建议

- 快速原型、小型项目或内部 Demo：可在入口使用 `app.use(TDesign)` 全局注册，示例模板默认假定组件已全局可用。
- 生产项目、体积敏感或组件使用面较窄：优先按需引入，并配合 `unplugin-auto-import` / `unplugin-vue-components` 自动导入；TDesign resolver 使用 `import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';`。
- 插件式 API 如 `MessagePlugin`、`DialogPlugin` 按需从 `tdesign-vue-next` 显式引入，不依赖模板标签注册方式。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign 组件和 props 解决问题，最后才补最小 CSS。
- Web 中后台页面生成后的 CSS 必须优先使用 TDesign Token；Header、危险操作、空态、加载态等按 `tdesign-composition` 的 checklist 自检。
- 如果 Vue Next 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
