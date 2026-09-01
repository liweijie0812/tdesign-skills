# TDesign 场景卡总入口

`tdesign-composition/references/scenarios/` 用来回答“某类页面通常怎么组织、默认怎么搭”，不负责替代具体组件 API。

## 查阅顺序

1. 无设计文件场景先查 `tdesign-design-spec` skill 的 `references/modules/M01-overview-usage-rules.md`，确认 TDesign 默认根约束、Usage 红线、导航、图标和 CDN 规则；未安装该 skill 时按项目约束做保守方案。
2. 颜色语义、Light / Dark Token 和彩色实心底对比规则查 `tdesign-design-spec` 的 `references/modules/M02-colors.md`。
3. 排版、间距、组件尺寸和圆角规则查 `tdesign-design-spec` 的 `references/modules/M03-typography-spacing-radius.md`。
4. 布局、应用壳、栅格和导航结构规则查 `tdesign-design-spec` 的 `references/modules/M04-layout-navigation.md`。
5. 组件、图标、表格和图表规则查 `tdesign-design-spec` 的 `references/modules/M05-components-icons-charts.md`。
6. Web 中后台页面的设计红线、显式视觉规则、Token 规则和自检项，查 `tdesign-design-spec` 的 `references/design/` 资料与 `references/design/checklist.json`。
7. 先按 `skills/tdesign-usage-guide/references/decisions/README.md` 和 `skills/tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径。
8. 需要表单录入、编辑、配置、审批页时，查 `form-page.md`。
9. 需要后台列表、资源列表、结构化数据浏览页时，查 `table-list-page.md`。
10. 需要后台框架、控制台骨架、导航壳时，查 `layout-shell.md`。
11. 需要详情页、对象档案或审批详情时，查 `detail-page.md`。
12. 需要登录、注册或身份入口时，查 `login-page.md`。
13. 需要错误页、无权限页或结果页时，查 `error-page.md`。
14. 需要仪表盘、数据概览或图表页面时，查 `dashboard-page.md`。
15. 需要弹窗、抽屉或临时任务流时，查 `dialog-drawer-flow.md`。
16. 需要 CRUD、批量导入、批量操作或状态流转时，查 `crud-task-flow.md`。
17. 需要移动端表单、移动端列表或轻量页面时，查 `mobile-pages.md`。
18. 需要参考 Web starter 的页面模块拆分、组件搭配和高频组合时，查 `web-starter-patterns.md`。
19. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认 props、事件、插槽和写法。

## 与其他目录的边界

- `tdesign-composition/references/scenarios/`：回答“某类页面通常怎么组织”。
- `tdesign-usage-guide/references/decisions/`：回答“该选什么组件、为什么”。
- 各技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写”。

## 使用原则

- 场景卡只提供默认组合和常见校验点，不替代当前项目的业务约束。
- 无设计文件场景不依赖 Figma、截图或 `DESIGN.md`；默认按 `tdesign-design-spec` 的 M01 根约束、本 skill 场景卡、Token 和当前技术栈 API 生成。
- Web 中后台场景必须遵守 `tdesign-design-spec` 的 `references/design/design-spec.md` 设计红线。
- Web 中后台场景中的间距、配色、排版、圆角、阴影和状态一致性，优先遵守 `tdesign-design-spec` 的 `references/design/visual-consistency-web.md` 显式规则表。
- Web 自定义样式优先使用 `tdesign-design-spec` 的 `references/design/tokens.md` 语义 Token，不写零散硬编码颜色、间距、圆角或高度。
- Web 代码生成或页面改造后，自检项和质量门禁统一走 `tdesign-design-spec`：按其 `references/design/checklist.json` 的 `outputTemplate` 输出适用项结果，并按其 `references/quality-gate.md` 执行质量门禁。
- Web 与 Mobile / Miniprogram 页面结构不直接互相复用，必须按平台降密或调整导航方式。
- 如果场景卡里的默认组件当前栈不存在，先回到 `skills/tdesign-docs/references/meta/stack-matrix.json` 与 `skills/tdesign-usage-guide/references/decisions/fallback-policy.md` 处理降级。
