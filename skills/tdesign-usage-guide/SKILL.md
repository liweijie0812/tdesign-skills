---
name: tdesign-usage-guide
description: 当用户需要 TDesign 使用指南、组件选型、何时使用、相似组件比较、迁移到 TDesign、评审 TDesign 代码、反模式或降级策略时使用。只负责选型和设计决策；不负责页面骨架、具体 props/API 写法或图标检索。
---

# TDesign 使用指南与选型

本 skill 用于回答“该选什么、为什么、什么不能做”。具体 props、事件、插槽和导入方式必须回到当前技术栈 API skill。

## 查阅顺序

1. 平台口径：查 `references/decisions/platform-design-policy.md`。
2. 组件何时使用：先查 `references/decisions/web/component-usage-map.md` 或 `references/decisions/mobile/component-usage-map.md`，命中组件后再按需查平台下 `components/<component>.md`。
3. 相似组件怎么选：先查 `references/decisions/similar-components.md`，再查平台细分文档。
4. 高频单项取舍：查平台下 `similar-components.md` 和 `components/<component>.md`。
5. 组件搭配：先查 `references/decisions/component-composition-map.md`，再查平台下 `component-composition-map.md`。页面级细节转到 `tdesign-composition`。
6. 反模式：先查 `references/decisions/anti-patterns.md`，再查平台细分文档。
7. 当前栈缺组件或能力不够：查 `references/decisions/fallback-policy.md`。

## 核心原则

- 优先使用 TDesign 组件、布局、子组件、props、插槽和设计变量。
- 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件。
- 禁止无理由引入其他组件库。
- 禁止用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力。
- 禁止把 Web、Mobile、Miniprogram 的组件结论直接互相套用。

> 常见取舍（Button vs Link、Dialog vs Drawer、Table vs List、Select/Picker vs Cascader、Message vs Notification 等）见 `references/decisions/similar-components.md` 与平台下 `similar-components.md`，不在本文件重复维护。

## 迁移与评审

- 迁移时先识别原 UI 语义，再映射到 TDesign 组件，不逐标签替换。
- 不继承来源库的 props 名、事件名、弹层挂载习惯和样式覆盖方式。
- 评审时优先检查跨栈 API、伪造组件能力、过度自定义样式和重复造轮子。
- 需要组件搭配时，查 `references/decisions/component-composition-map.md`；需要页面级组合时，转到 `tdesign-composition`。
- 需要落地 API 时，转到对应技术栈 skill。
- 需要确认组件是否存在时，转到 `tdesign-docs` 覆盖矩阵。
- 需要图标名称或分类时，转到 `tdesign-icons`。
