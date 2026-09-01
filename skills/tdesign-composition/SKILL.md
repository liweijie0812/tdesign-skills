---
name: tdesign-composition
description: 当用户需要 TDesign 页面组合、组件搭配、页面骨架、场景默认方案、表单/列表/详情/仪表盘/应用壳/登录/错误页/弹窗抽屉/CRUD/移动端页面搭建时使用。只负责页面级场景组合和骨架；不负责视觉规则、Design Token、质量门禁、组件选型或具体 props/API。
---

# TDesign 页面组合与场景卡

本 skill 只负责回答"某类页面通常怎么组织、默认怎么搭"。设计规范、视觉规则、Design Token 和质量门禁交给 `tdesign-design-spec`，组件选型交给 `tdesign-usage-guide`，具体组件 API 回到当前技术栈 skill。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 使用协议

1. **必须通过 `load_skill` 加载本 skill**，不要绕过 skill 系统直接 grep、find 或 read `references/` 下的内部文件。`load_skill` 返回的 SKILL.md 包含执行流程和约束上下文，直接读文件会丢失这些关键指导。
2. **严格按下方「执行流程」和「场景决策表」执行**，不跳步、不凭经验猜路径。
3. **需要交接到其他 skill 时，对目标 skill 再次 `load_skill`**，不要直接读目标 skill 的 `references/` 文件。
4. **`references/` 下的文件只在 SKILL.md 指引下按需读取**，它们是 skill 的内部资料，不是独立文档。

## 执行流程

1. **判断平台**：先确认是 Web、Mobile、Miniprogram 还是 UniApp；未说明且出现中后台、控制台、运营后台时默认按 Web。
2. **建立根约束**：无设计文件场景，已安装 `tdesign-design-spec` 时先查其 `references/modules/M01-overview-usage-rules.md`；未安装时按本 skill 场景卡和用户已给出的约束做保守方案，并建议补装。
3. **选择场景卡**：按「场景决策表」命中 `references/scenarios/` 下的场景卡。
4. **补设计规则**：涉及视觉规则、Token、间距配色时转到 `tdesign-design-spec`；本 skill 只给结构，不展开设计细则。
5. **回到技术栈 API**：确定页面组合后，查当前栈 skill 的组件 API、示例和导入方式，避免凭记忆写 props。
6. **交付前自检**：质量门禁和 DS 检查项转到 `tdesign-design-spec`；本 skill 不重复输出自检规则。

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
- **视觉审计**：DS 检查项、视觉规则和质量门禁转到 `tdesign-design-spec`；本 skill 输出页面结构层面的问题。

## 查阅顺序

1. 按场景决策表命中场景卡，具体路径见 `references/reading-guide.md`。
2. 场景卡内引用的 `../modules/`、`../design/`、`../quality-gate.md` 资料已迁移至 `tdesign-design-spec`；已安装该 skill 时按其 SKILL.md 查阅顺序获取，未安装时按用户约束做保守方案并建议补装。
3. 已安装 `tdesign-usage-guide` 时，先按 `../tdesign-usage-guide/references/decisions/README.md` 确认平台与选型边界；未安装时按用户已给出的平台和组件假设继续，建议补装。
4. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认写法。

## 常见组合

- 表单页：`Form` + `FormItem` + 字段组件 + `Button` + 反馈组件。
- 表格列表页：筛选 `Form` + `Table` + `Pagination` + `Button` / `Dropdown` + `Popconfirm` / `Dialog`。
- 详情页：`Descriptions` + `Card` + `Tag` + `Timeline` + `Button` / `Link`。
- Web 应用壳：`Layout` / `Header` / `Aside` / `Content` / `Footer` + 导航组件。
- Mobile 页面：导航 + `Cell` / `Form` / `List` + `Toast` / `Dialog`，不要照搬 Web 应用壳。

## 约束

- 本 skill 只负责页面结构、场景默认组合和组件搭配；视觉规则、Token、自检清单和质量门禁统一转到 `tdesign-design-spec`，因为组合与设计规则是不同职责。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。
- 组件选型争议转到 `tdesign-usage-guide`，不在场景卡里重新做选型规则。
- 场景组合确定后，单组件 props、事件、插槽回到对应技术栈 API skill。
- 场景卡只决定用 `Table`，不决定其列实现标签名；落地代码时必须回当前栈 API 确认是 `columns`、render、插槽还是独立子组件，不要臆造 `t-table-column` 一类标签。
- 只有组件组合和 props 无法满足时，才补最小 CSS；具体 Token 取值查 `tdesign-design-spec`。
- 选择性安装且缺少 `tdesign-usage-guide`、`tdesign-docs` 或 `tdesign-design-spec` 时，不凭记忆断言组件覆盖、降级策略或设计规则；只基于本 skill 场景卡、当前项目依赖和已安装技术栈 API 文件做保守方案。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
