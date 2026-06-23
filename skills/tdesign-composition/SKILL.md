---
name: tdesign-composition
description: 当用户需要 TDesign 页面组合、组件搭配、页面骨架、场景默认方案、Web 中后台视觉规范、Design Token、质量门禁、表单/列表/详情/仪表盘/应用壳/移动端页面搭建或审计时使用。只负责页面级组合、设计规则和交付自检；组件选型理由转 tdesign-usage-guide，单组件 API 转当前技术栈 skill，资料入口转 tdesign-docs。
---

# TDesign 组件搭配设计指南与页面场景

本 skill 用于回答“组件怎么搭配、某类页面通常怎么组织、默认怎么搭”。它不替代组件选型理由、组件覆盖确认或具体组件 API。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 执行流程

1. **判断平台**：先确认是 Web、Mobile、Miniprogram 还是 UniApp；未说明且出现中后台、控制台、运营后台时默认按 Web。
2. **选择场景卡**：按“表单 / 列表 / 详情 / 仪表盘 / 应用壳 / 登录 / 错误页 / 弹窗抽屉 / CRUD / 移动端”命中 `references/scenarios/`。
3. **套设计红线**：Web 中后台必须同时查 `design-spec.md`、`visual-consistency-web.md`、`tokens.md`、`checklist.json`。
4. **回到技术栈 API**：确定页面组合后，再查当前栈 skill 的组件 API、示例和导入方式，避免凭记忆写 props。
5. **交付前自检**：代码生成、页面改造或视觉走查必须输出 DS 检查项结果；能访问文件时优先运行质量门禁脚本。

## 场景决策表

| 用户意图 / 关键词 | 先查 |
| --- | --- |
| 后台框架、导航壳、侧栏、顶栏、菜单、应用壳 | `references/scenarios/layout-shell.md` |
| 查询筛选、资源列表、表格、分页、批量操作入口 | `references/scenarios/table-list-page.md` |
| 新建、编辑、配置、审批录入、多字段表单 | `references/scenarios/form-page.md` |
| 对象档案、审批详情、只读信息、操作记录 | `references/scenarios/detail-page.md` |
| 数据概览、指标卡、趋势图、驾驶舱 | `references/scenarios/dashboard-page.md` |
| 临时编辑、确认流程、抽屉详情、弹窗任务 | `references/scenarios/dialog-drawer-flow.md` |
| 增删改查、导入导出、状态流转、批量处理 | `references/scenarios/crud-task-flow.md` |
| 登录、注册、找回密码、身份入口 | `references/scenarios/login-page.md` |
| 403 / 404 / 500、无权限、空结果、结果页 | `references/scenarios/error-page.md` |
| 移动端页面、轻量表单、移动列表、Cell 流 | `references/scenarios/mobile-pages.md` |

## 交付格式

- **页面方案**：给出页面结构、关键组件组合、状态覆盖、响应式 / 平台差异和需回到技术栈 API 确认的组件。
- **代码实现**：先落地真实 TDesign 组件组合，再补最小 CSS；避免只输出抽象规范。
- **视觉审计**：先列阻断项，再列优化项；每条关联 `DS-编号` 或场景卡规则。
- **质量门禁**：说明脚本是否运行；未运行时说明原因，并按 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 输出自检。

## 查阅顺序

1. 涉及 Web 中后台页面生成、页面改造或视觉走查时，动手前先查 `references/design/design-spec.md`、`references/design/visual-consistency-web.md`、`references/design/tokens.md` 和 `references/design/checklist.json`；简单咨询只按问题命中必要资料。
2. 已安装 `tdesign-usage-guide` 时，先按 `../tdesign-usage-guide/references/decisions/README.md` 和 `../tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径；未安装时按用户已给出的平台和组件假设继续，不重新发明选型规则，并建议补装 `tdesign-usage-guide`。
3. 组件搭配入口：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/component-composition-map.md`；未安装时直接使用本 skill 的场景卡和设计资料。
4. Web 搭配细节：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/web/component-composition-map.md`；未安装时使用 Web 场景卡默认组合。
5. Mobile / Miniprogram 搭配细节：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/mobile/component-composition-map.md`；未安装时使用移动端场景卡默认组合。
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
- Web 视觉一致性显式规则：查 `references/design/visual-consistency-web.md`。
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
- 页面组合以 TDesign 官方组件、场景卡、Design Token 和当前技术栈 API 为准。
- 交付自检输出格式与静态门禁命令统一见 `references/quality-gate.md`（含 `check-quality.mjs` 用法与 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 模板）。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。
- 组件选型争议先转到 `tdesign-usage-guide`，不要在场景卡里重新做选型规则。
- 如果场景卡里的默认组件当前栈不存在，已安装 `tdesign-docs` 时先查 `../tdesign-docs/references/meta/stack-matrix.json`（全局概览）和按端的 `stack-matrix-<端>.json`；已安装 `tdesign-usage-guide` 时再查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。目标 skill 未安装时，优先换当前栈已有的相似 TDesign 组件，再考虑最小原生能力，并说明需补装缺失 skill 获得完整覆盖或降级策略。
- 场景组合确定后，单组件 props、事件、插槽必须回到对应技术栈 API skill。
- 只有组件组合和 props 无法满足时，才补最小 CSS。
- 选择性安装且缺少 `tdesign-usage-guide` 或 `tdesign-docs` 时，不要凭记忆断言组件覆盖、反模式或降级策略；只基于本 skill 场景卡、当前项目依赖和已安装技术栈 API 文件做保守方案。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
