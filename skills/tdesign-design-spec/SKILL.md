---
name: tdesign-design-spec
description: 当用户需要 TDesign 设计规范、Design Token、色彩与视觉一致性规则、中后台布局框架、页面生成后的质量门禁或 DS 自检清单时使用。只负责视觉与设计规则、Token 和交付自检；不负责页面场景组合、组件选型或具体 props/API。
---

# TDesign 设计规范与质量门禁

本 skill 只负责"视觉和设计规则怎么定、Token 怎么用、交付前怎么自检"。页面场景组合交给 `tdesign-composition`，组件选型交给 `tdesign-usage-guide`，具体 props、事件、插槽回到当前技术栈 API skill。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 使用协议

1. **必须通过 `load_skill` 加载本 skill**，不要绕过 skill 系统直接 grep、find 或 read `references/` 下的内部文件。`load_skill` 返回的 SKILL.md 包含查阅顺序和约束上下文，直接读文件会丢失这些关键指导。
2. **严格按下方「查阅顺序」执行**，不跳步、不凭经验猜路径。
3. **需要交接到其他 skill 时，对目标 skill 再次 `load_skill`**，不要直接读目标 skill 的 `references/` 文件。
4. **`references/` 下的文件只在 SKILL.md 指引下按需读取**，它们是 skill 的内部资料，不是独立文档。

## 适用范围

- 适用：TDesign 设计规范、视觉一致性、Design Token / CSS Variables、色彩、排版间距、布局栅格、中后台框架、Web starter 页面模式、质量门禁和 DS 自检。
- 不适用：某类页面怎么搭（`tdesign-composition`）、该选哪个组件（`tdesign-usage-guide`）、具体 props 和事件（技术栈 API skill）。

## 查阅顺序

1. **无设计文件根约束**：先查 `references/modules/M01-overview-usage-rules.md`，确定 TDesign 组件、Token、导航、图标和 CDN 示例红线；简单咨询只按问题命中必要资料。
2. **颜色**：根规则查 `references/modules/M02-colors.md`；官方色板、扩展色和主题定制补充查 `references/design/color.md`。
3. **排版、间距、圆角和 Token**：根规则查 `references/modules/M03-typography-spacing-radius.md`；高频 Token、CSS Variables 速查查 `references/design/tokens.md`。
4. **布局与导航**：根规则查 `references/modules/M04-layout-navigation.md`；Layout 布局、栅格和断点补充查 `references/design/layout.md`。
5. **组件、图标、表格和图表规则**：查 `references/modules/M05-components-icons-charts.md`。
6. **中后台框架**：整体框架、导航分类和模板映射查 `references/design/offices.md`；筛选查询、批量操作、状态流转等任务框架查 `references/design/offices-task.md`。
7. **视觉一致性**：间距、配色、排版、圆角、阴影和状态的显式规则表查 `references/design/visual-consistency-web.md`；对话式生成流程和设计原则查 `references/design/design-spec.md`。
8. **交付自检与质量门禁**：生成或改造完成后，按 `references/design/checklist.json` 适用项自检；门禁细则查 `references/quality-gate.md`，能运行脚本时执行 `node skills/tdesign-design-spec/scripts/check-quality.mjs <file-or-directory>`；终审与交接格式查 `references/modules/M06-qc-handoff.md`。

## 边界

- 只回答视觉规则、Token 取值、设计一致性和交付自检；不重新做选型和页面组合。
- 场景默认组合和页面骨架：转到 `tdesign-composition`；未安装时建议补装，本 skill 不替代场景卡。
- 组件选型争议：转到 `tdesign-usage-guide`；未安装时不凭记忆断言反模式或降级策略。
- 单组件 props、事件、插槽和子组件：转到当前技术栈 API skill，不在设计规则里臆造写法。
- 图标名称和包名：转到 `tdesign-icons`；本 skill 只约束图标语义色和 manifest 红线。

## 约束

- 业务样式优先写语义变量 `var(--td-*)`，不写零散硬编码颜色、间距、圆角或高度；具体运行值以项目已安装版本、主题覆盖和运行时 CSS Variables 为准。
- Web 中后台代码生成或页面改造，动手前读取 `references/design/checklist.json`，交付前按检查项 ID 简要说明通过、无需适用或需人工确认；纯咨询不强制逐项输出。
- 组件已有 `theme`、`status`、`variant` 等公开能力时，先用组件能力，不优先覆盖内部 class；只有组件组合和 props 无法满足时才补最小 CSS。
- Mobile / Miniprogram 不套用 Web 应用壳、Header 和桌面密度规则；只参考通用 Token、栅格和间距原则。
- 质量门禁脚本按静态文本扫描，不理解业务语义；误报时优先修正代码或文档表达，不建议绕过。
- 场景卡、选型和 API 资料的路由：完整 collection 模式下可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
