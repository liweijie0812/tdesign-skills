---
name: tdesign-composition
description: 当用户需要 TDesign 页面组合、组件搭配、页面骨架、场景默认方案、Web starter 页面模式、Web 中后台视觉规范、Design Token、质量门禁、表单/列表/详情/仪表盘/应用壳/移动端页面搭建或审计时使用。只负责页面级组合、设计规则和交付自检；不负责单组件怎么用、示例代码或具体 props/API。
---

# TDesign 组件搭配设计指南与页面场景

本 skill 用于回答“页面怎么搭、某类页面通常怎么组织、默认怎么搭”。默认面向无设计文件场景：不依赖 Figma、截图或 `DESIGN.md`，先按 `references/modules/M01-overview-usage-rules.md` 建立根约束。它不替代组件选型理由、组件覆盖确认或具体组件 API。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 使用协议

1. **必须通过 `load_skill` 加载本 skill**，不要绕过 skill 系统直接 grep、find 或 read `references/` 下的内部文件。`load_skill` 返回的 SKILL.md 包含执行流程、查阅顺序和约束上下文，直接读文件会丢失这些关键指导。
2. **严格按下方「执行流程」和「查阅顺序」执行**，不跳步、不凭经验猜路径。
3. **需要交接到其他 skill 时，对目标 skill 再次 `load_skill`**，不要直接读目标 skill 的 `references/` 文件。
4. **`references/` 下的文件只在 SKILL.md 指引下按需读取**，它们是 skill 的内部资料，不是独立文档。

## 执行流程

1. **读取根约束**：无设计文件场景先查 `references/modules/M01-overview-usage-rules.md`，确定 TDesign 组件、Token、导航、图标和自检红线。
2. **判断平台**：先确认是 Web、Mobile、Miniprogram 还是 UniApp；未说明且出现中后台、控制台、运营后台时默认按 Web。
3. **选择场景卡**：按“表单 / 列表 / 详情 / 仪表盘 / 应用壳 / 登录 / 错误页 / 弹窗抽屉 / CRUD / 移动端”命中 `references/scenarios/`。
4. **遇到 starter 页面问题**：如果用户明确提到 starter、后台模板、页面模块拆分或“这一页通常怎么搭”，优先查 `references/scenarios/web-starter-patterns.md` 获取 Web starter 参考。
5. **套设计红线**：Web 中后台必须同时查 `design-spec.md`、`visual-consistency-web.md`、`tokens.md`、`checklist.json`。
6. **回到技术栈 API**：确定页面组合后，再查当前栈 skill 的组件 API、示例和导入方式，避免凭记忆写 props。
7. **交付前自检**：代码生成、页面改造或视觉走查必须输出 DS 检查项结果；能访问文件时优先运行质量门禁脚本。

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
| starter、后台模板、页面模块拆分、常见搭配 | `references/scenarios/web-starter-patterns.md` |

## 交付格式

- **页面方案**：给出页面结构、关键组件组合、状态覆盖、响应式 / 平台差异和需回到技术栈 API 确认的组件。
- **代码实现**：先落地真实 TDesign 组件组合，再补最小 CSS；避免只输出抽象规范。
- **视觉审计**：先列阻断项，再列优化项；每条关联 `DS-编号` 或场景卡规则。
- **质量门禁**：说明脚本是否运行；未运行时说明原因，并按 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 输出自检。

## 查阅顺序

1. 无设计文件场景先查 `references/modules/M01-overview-usage-rules.md`；它是页面组合、设计规则、导航、图标、CDN 示例和质量自检的根约束。
2. 涉及 Web 中后台页面生成、页面改造或视觉走查时，动手前先查 `references/design/design-spec.md`、`references/design/visual-consistency-web.md`、`references/design/tokens.md` 和 `references/design/checklist.json`；简单咨询只按问题命中必要资料。
3. 已安装 `tdesign-usage-guide` 时，先按 `../tdesign-usage-guide/references/decisions/README.md` 和 `../tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与选型边界；未安装时按用户已给出的平台和组件假设继续，不重新发明选型规则，并建议补装 `tdesign-usage-guide`。
4. 用户明确提到 starter、后台模板、页面模块拆分或常见搭配时，补查 `references/scenarios/web-starter-patterns.md`。
5. 页面骨架、场景默认方案和设计细节以本 skill 为主。
6. 按场景决策表命中场景卡，具体场景卡路径见 `references/reading-guide.md`。
7. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认写法。
8. 代码生成或页面改造完成后，按 `references/design/checklist.json` 的适用项自检，质量门禁细则见 `references/quality-gate.md`。

> 场景卡完整路径、Web 中后台模块和设计规范资料的详细查阅清单见 `references/reading-guide.md`。

## Web 中后台资料

场景卡路径、无设计文件模块（M01–M06）、设计规范资料和质量门禁的完整查阅清单见 `references/reading-guide.md`。

## 常见组合

- 表单页：`Form` + `FormItem` + 字段组件 + `Button` + 反馈组件。
- 表格列表页：筛选 `Form` + `Table` + `Pagination` + `Button` / `Dropdown` + `Popconfirm` / `Dialog`。
- 详情页：`Descriptions` + `Card` + `Tag` + `Timeline` + `Button` / `Link`。
- Web 应用壳：`Layout` / `Header` / `Aside` / `Content` / `Footer` + 导航组件。
- Mobile 页面：导航 + `Cell` / `Form` / `List` + `Toast` / `Dialog`，不要照搬 Web 应用壳。

## 约束

- 无设计文件场景先遵守 `references/modules/M01-overview-usage-rules.md` 的根约束，因为它定义了页面组合、设计规则、导航、图标、CDN 示例和质量自检的基线；颜色语义与 Light / Dark 规则查 `references/modules/M02-colors.md`；排版、间距、组件尺寸和圆角规则查 `references/modules/M03-typography-spacing-radius.md`；布局、栅格、应用壳和导航结构规则查 `references/modules/M04-layout-navigation.md`；组件、图标、表格和图表规则查 `references/modules/M05-components-icons-charts.md`；终审、交接和冲突仲裁查 `references/modules/M06-qc-handoff.md`；Web 中后台页面生成继续遵守 `references/design/design-spec.md` 的设计红线。
- Web 中后台代码生成或页面改造在动手前读取 `references/design/checklist.json`，交付前按检查项 ID 简要说明通过、无需适用或需人工确认，因为结构化自检可以系统性发现视觉一致性问题；纯咨询不强制逐项输出。
- 页面组合以 TDesign 官方组件、场景卡、Design Token 和当前技术栈 API 为准。
- 交付自检输出格式与静态门禁命令统一见 `references/quality-gate.md`（含 `check-quality.mjs` 用法与 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 模板）。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。
- 组件选型争议转到 `tdesign-usage-guide`，不在场景卡里重新做选型规则，因为选型和组合是不同职责。
- 如果场景卡里的默认组件当前栈不存在，已安装 `tdesign-docs` 时先查 `../tdesign-docs/references/meta/stack-matrix.json`（全局概览）和按端的 `stack-matrix-<端>.json`；已安装 `tdesign-usage-guide` 时再查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。目标 skill 未安装时，优先换当前栈已有的相似 TDesign 组件，再考虑最小原生能力，并说明需补装缺失 skill 获得完整覆盖或降级策略。
- 场景组合确定后，单组件 props、事件、插槽回到对应技术栈 API skill。
- 场景卡只决定用 `Table`，不决定其列实现标签名；落地代码时必须回当前栈 API 确认是 `columns`、render、插槽还是独立子组件，不要臆造 `t-table-column` 一类标签。
- 只有组件组合和 props 无法满足时，才补最小 CSS，因为 CSS 兜底脱离了 TDesign 的主题适配体系。
- 选择性安装且缺少 `tdesign-usage-guide` 或 `tdesign-docs` 时，不凭记忆断言组件覆盖、反模式或降级策略；只基于本 skill 场景卡、当前项目依赖和已安装技术栈 API 文件做保守方案。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
