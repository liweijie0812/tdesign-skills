---
name: tdesign-usage-guide
description: 当用户问 TDesign 该用哪个组件、什么时候用、`Table` 还是 `List`、相似组件比较、迁移到 TDesign、评审反模式或降级策略时使用。只负责选型和使用决策；不负责组件怎么写、示例代码、具体 props/API、页面组合或图标检索。
---

# TDesign 使用指南与选型

本 skill 用于回答“该选什么、什么时候用、为什么、什么不能做”。组件搭配设计指南、页面场景和设计规范交给 `tdesign-composition`；具体 props、事件、插槽和导入方式必须回到当前技术栈 API skill。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 何时使用本 skill

- 用户问“用哪个 TDesign 组件”“这个场景该用什么组件”“什么时候用某组件”“某组件适不适合当前场景”。
- 用户在多个相似组件之间犹豫，例如 `Dialog` / `Drawer`、`Table` / `List`、`Select` / `Cascader`、`Toast` / `Message`。
- 用户要把已有 UI、原生 HTML、其他组件库或设计稿迁移到 TDesign，需要判断语义映射和替代方案。
- 用户要求评审 TDesign 代码中的选型、反模式、跨端套用、重复造轮子或降级策略。
- 用户只需要设计选型口径，不需要当前技术栈的 props、事件、插槽、导入方式或完整页面组合。

## 不使用本 skill

- 需要确认某技术栈是否存在组件、API、事件、插槽、类型或导入路径时，转到 `tdesign-docs` 或对应技术栈 skill。
- 需要组件搭配设计指南、页面骨架、场景默认组合、交付自检或页面级方案时，转到 `tdesign-composition`。
- 需要图标名称、图标分类、图标包名或图标导入方式时，转到 `tdesign-icons`。
- 需要直接生成具体业务页面代码时，只能先给选型口径；落地代码必须结合当前技术栈 API skill。

## 查阅顺序

1. 平台口径：查 `references/decisions/platform-design-policy.md`。
2. 组件何时使用：先查 `references/decisions/web/component-usage-map.md` 或 `references/decisions/mobile/component-usage-map.md`，命中组件后再按需查平台下 `components/<component>.md`。
3. 相似组件怎么选：先查 `references/decisions/similar-components.md`，再查平台细分文档。
4. 高频单项取舍：查平台下 `similar-components.md` 和 `components/<component>.md`。
5. 组件搭配选型口径：只保留与选型直接相关的边界判断；页面级组合、场景默认方案和设计规范转到 `tdesign-composition`。
6. 反模式：先查 `references/decisions/anti-patterns.md`，再查平台细分文档。
7. 当前栈缺组件或能力不够：查 `references/decisions/fallback-policy.md`。

## 判断流程

1. 先识别平台：Web、Mobile、Miniprogram 或 UniApp；平台不明确时先说明假设，不跨端套用结论。
2. 再识别任务：操作、导航、数据录入、数据展示、反馈、布局、系统配置或手势滚动。
3. 再识别数据与交互：值选择还是执行动作、短反馈还是强确认、平级切换还是流程进度、结构化表格还是条目流。
4. 最后选择组件：优先使用平台组件索引，必要时补查相似组件规则和单组件细则。

## 回答格式

- 先给结论：推荐组件和适用平台。
- 再给依据：任务类型、数据结构、交互强度、信息密度或移动端触控约束。
- 再给替代：什么条件下应换成相似组件或组合方案。
- 最后给边界：不要写具体 props/API；需要落地时转到当前技术栈 API skill。

## 核心原则

- 优先使用 TDesign 组件、布局、子组件、props、插槽和设计变量，因为 TDesign 组件经过跨端适配和可访问性测试，混用其他方案会导致视觉不一致和维护成本上升。
- 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件，因为未经验证的实现可能在边缘场景（暗色模式、响应式、国际化）下出问题。
- 不引入其他组件库，因为混用会导致样式冲突、包体积膨胀和视觉不一致。
- 不用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力，因为重复实现会绕过 TDesign 的可访问性、键盘导航和主题适配。
- 不把 Web、Mobile、Miniprogram 的组件结论直接互相套用，因为各端组件覆盖范围、props 和默认值存在差异。

> 常见取舍（Button vs Link、Dialog vs Drawer、Table vs List、Select/Picker vs Cascader、Message vs Notification 等）见 `references/decisions/similar-components.md` 与平台下 `similar-components.md`，不在本文件重复维护。

## 迁移与评审

- 迁移时先识别原 UI 语义，再映射到 TDesign 组件，不逐标签替换，因为逐标签替换会丢失组件间的交互逻辑和状态管理。
- 不继承来源库的 props 名、事件名、弹层挂载习惯和样式覆盖方式，因为不同组件库的 API 约定不同，直接继承会导致运行时错误。
- 评审时优先检查跨栈 API、伪造组件能力、过度自定义样式和重复造轮子。
- 评审和回答时都不要臆造组件或子组件名称；像 `Table` 这类复杂组件的列、筛选、编辑能力是否通过 `columns`、配置项还是独立子组件暴露，必须回到当前技术栈 API 确认。
- 需要页面级组合或场景默认方案时，转到 `tdesign-composition`。
- 需要落地 API 时，转到对应技术栈 skill。
- 需要确认组件是否存在时，转到 `tdesign-docs` 覆盖矩阵。
- 需要图标名称或分类时，转到 `tdesign-icons`。

## 约束

- 只负责选型、使用决策、反模式、迁移和降级策略，不直接编写当前栈 props、事件或插槽，因为这些需要查具体技术栈的 API 文件。
- 组件存在性和覆盖范围转到 `tdesign-docs`，不从经验判断某栈是否可用，因为各端覆盖范围不同且随版本变化。
- 组件搭配设计指南、页面骨架、场景默认组合和交付自检转到 `tdesign-composition`。
- 图标名称、分类、包名和导入方式转到 `tdesign-icons`。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
