---
name: tdesign-docs
description: 当用户询问 TDesign 文档入口、资料在哪里、当前技术栈有哪些组件可用、组件覆盖矩阵、上游来源链接，或需要决定先读哪个目录时使用。只做资料检索路由，不展开具体组件 API。
---

# TDesign 文档与资料入口

本 skill 用于回答“资料在哪里、当前栈有什么、应该先读什么”。它不替代组件选型、场景搭配或具体 API 实现。

## 查阅顺序

1. 技术栈和组件覆盖：查 `references/meta/stack-matrix.json`。
2. 上游来源链接和同步信息：查 `references/meta/source-links.md`。
3. API 资料入口：查 `references/api/README.md` 和 `references/api/index.md`。
4. 选型资料入口：查 `../tdesign-usage-guide/references/decisions/README.md`。
5. 场景卡入口：查 `../tdesign-composition/references/scenarios/README.md`。
6. 色彩、布局、中后台指南：查 `../tdesign-composition/references/design/color.md`、`../tdesign-composition/references/design/layout.md`、`../tdesign-composition/references/design/offices.md`、`../tdesign-composition/references/design/offices-task.md`。

## 边界

- 回答“当前栈有没有某组件”：用 `references/meta/stack-matrix.json`。
- 回答“该选什么组件、为什么”：转到 `tdesign-usage-guide`。
- 回答“页面通常怎么搭”：转到 `tdesign-composition`。
- 回答“某个 props、事件、插槽怎么写”：转到对应技术栈 skill。
- 回答“某能力何时新增或废弃”：转到 `tdesign-changelog`。

## 约束

- 不要一次性读取所有技术栈的 `references/api/` 树。
- 不要从目录存在推断组件可用性，必须以 `references/meta/stack-matrix.json` 和当前栈 API 为准。
- 不要把 Web only 组件默认用于 Mobile 或 Miniprogram。
