---
name: tdesign-composition
description: 当用户询问 TDesign 组件搭配使用指南、组件搭配设计指南、页面级组合、页面骨架、后台管理页、应用壳、导航布局、表单页、表格列表页、详情页、登录页、错误页、仪表盘、弹窗/抽屉任务流、CRUD 任务流或移动端页面怎么组织时使用。只负责组件搭配、页面结构、场景默认组合、设计红线和交付自检；组件选型理由转 tdesign-usage-guide，单组件 API 转当前技术栈 skill，资料入口和覆盖确认转 tdesign-docs。
---

# TDesign 组件搭配设计指南与页面场景

本 skill 用于回答“组件怎么搭配、某类页面通常怎么组织、默认怎么搭”。它不替代组件选型理由、组件覆盖确认或具体组件 API。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 涉及 Web 中后台页面生成、页面改造或视觉走查时，动手前先查 `references/design/design-spec.md`、`references/design/tokens.md` 和 `references/design/checklist.json`；简单咨询只按问题命中必要资料。
2. 先按 `../tdesign-usage-guide/references/decisions/README.md` 和 `../tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径。
3. 组件搭配入口：查 `../tdesign-usage-guide/references/decisions/component-composition-map.md`。
4. Web 搭配细节：查 `../tdesign-usage-guide/references/decisions/web/component-composition-map.md`。
5. Mobile / Miniprogram 搭配细节：查 `../tdesign-usage-guide/references/decisions/mobile/component-composition-map.md`。
6. 表单录入、编辑、配置、审批页：查 `references/scenarios/form-page.md`。
7. 后台列表、资源列表、结构化数据浏览页：查 `references/scenarios/table-list-page.md`。
8. 后台框架、控制台骨架、导航壳：查 `references/scenarios/layout-shell.md`。
9. 详情页、对象档案、审批详情：查 `references/scenarios/detail-page.md`。
10. 登录、注册、找回密码、身份入口：查 `references/scenarios/login-page.md`。
11. 403、404、500、无权限、结果页：查 `references/scenarios/error-page.md`。
12. 仪表盘、数据概览、图表页面：查 `references/scenarios/dashboard-page.md`。
13. 弹窗、抽屉、临时任务流：查 `references/scenarios/dialog-drawer-flow.md`。
14. CRUD、批量导入、批量操作、状态流转：查 `references/scenarios/crud-task-flow.md`。
15. 移动端表单、移动端列表和轻量移动页面：查 `references/scenarios/mobile-pages.md`。
16. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认写法。
17. 代码生成或页面改造完成后，按 `references/design/checklist.json` 的适用项自检，质量门禁细则见 `references/quality-gate.md`。

## Web 中后台资料

- 对话式页面生成、视觉规范、设计原则和交付前自检：查 `references/design/design-spec.md`。
- 结构化设计自检规则：查 `references/design/checklist.json`。
- 高频 Design Token、CSS Variables、颜色 / 字号 / 间距 / 圆角速查：查 `references/design/tokens.md`。
- 色彩、品牌色、功能色、中性色、扩展色、Design Token：查 `references/design/color.md`。
- Layout 布局、导航布局、栅格、断点和间距：查 `references/design/layout.md`。
- 中后台整体框架、导航分类、页面布局和模板映射：查 `references/design/offices.md`。
- 筛选查询、批量操作、数据导入、状态流转、任务引导：查 `references/design/offices-task.md`。
- 仪表盘、数据概览、图表页面：查 `references/scenarios/dashboard-page.md`。
- 弹窗、抽屉、临时任务流：查 `references/scenarios/dialog-drawer-flow.md`。
- CRUD、批量导入、批量操作、状态流转：查 `references/scenarios/crud-task-flow.md`。
- 生成后自动化质量门禁：查 `references/quality-gate.md`。

## 常见组合

- 表单页：`Form` + `FormItem` + 字段组件 + `Button` + 反馈组件。
- 表格列表页：筛选 `Form` + `Table` + `Pagination` + `Button` / `Dropdown` + `Popconfirm` / `Dialog`。
- 详情页：`Descriptions` + `Card` + `Tag` + `Timeline` + `Button` / `Link`。
- Web 应用壳：`Layout` / `Header` / `Aside` / `Content` / `Footer` + 导航组件。
- Mobile 页面：导航 + `Cell` / `Form` / `List` + `Toast` / `Dialog`，不要照搬 Web 应用壳。

## 约束

- Web 中后台页面生成必须先遵守 `references/design/design-spec.md` 的设计红线；Token 使用查 `references/design/tokens.md`。
- Web 中后台代码生成或页面改造必须在动手前读取 `references/design/checklist.json`，交付前按检查项 ID 简要说明通过、无需适用或需人工确认；纯咨询不强制逐项输出。
- 交付自检输出格式与静态门禁命令统一见 `references/quality-gate.md`（含 `check-quality.mjs` 用法与 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 模板）。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。
- 组件选型争议先转到 `tdesign-usage-guide`，不要在场景卡里重新做选型规则。
- 如果场景卡里的默认组件当前栈不存在，先查 `../tdesign-docs/references/meta/stack-matrix.json`（全局概览）和按端的 `stack-matrix-<端>.json`，再查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
- 场景组合确定后，单组件 props、事件、插槽必须回到对应技术栈 API skill。
- 只有组件组合和 props 无法满足时，才补最小 CSS。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
