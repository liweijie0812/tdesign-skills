---
name: tdesign-docs
description: 当用户询问 TDesign 文档入口、资料在哪里、当前技术栈有哪些组件可用、组件覆盖矩阵、上游来源链接，或需要决定先读哪个目录时使用。只做资料检索、覆盖确认和来源路由；不做组件选型、页面组合或具体 API 实现。
---

# TDesign 文档与资料入口

本 skill 用于回答"资料在哪里、当前栈有什么、应该先读什么"。它不替代组件选型、场景搭配或具体 API 实现。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 技术栈、组件覆盖和本地示例模板标记：查 `references/meta/stack-matrix.json`（全局概览），以及按端分文件 `stack-matrix-web.json`、`stack-matrix-mobile.json`、`stack-matrix-miniprogram.json`（各栈组件列表、`coverage.hasExample` 与类型源明细）。
2. 上游来源链接和同步信息：查 `references/meta/source-links.md`。
3. API 资料入口：`references/api/README.md` 是 API 资料索引与读取约定，`references/api/index.md` 是跨端共享契约（`shared/` 目录）入口；先读 README 再按需进 index。
4. 选型资料入口：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/README.md`；未安装时只说明应补装该 skill，不在 docs 内替代选型判断。
5. 场景卡入口：已安装 `tdesign-composition` 时查 `../tdesign-composition/references/scenarios/README.md`；未安装时只说明应补装该 skill，不在 docs 内替代页面组合判断。
6. Web 视觉一致性、间距、配色、排版、圆角、阴影和状态规则：转到 `tdesign-composition` 的 `references/design/visual-consistency-web.md`。未安装时提示补装 `tdesign-composition`。
7. 色彩、布局、Token、中后台框架等设计资料：转到 `tdesign-composition` 的 `references/design/` 目录（docs 只负责指路，不展开设计细则）。未安装时提示补装 `tdesign-composition`。

## 快速查询

可用 `scripts/query-matrix.mjs` 在终端直接查询矩阵数据：

```bash
node skills/tdesign-docs/scripts/query-matrix.mjs --list-stacks          # 列出所有技术栈
node skills/tdesign-docs/scripts/query-matrix.mjs --component Button     # 查某组件在各端覆盖
node skills/tdesign-docs/scripts/query-matrix.mjs --stack react --component Button  # 单栈查组件
node skills/tdesign-docs/scripts/query-matrix.mjs --stack vue-next --components      # 列出某栈全部组件
node skills/tdesign-docs/scripts/query-matrix.mjs --stack miniprogram --missing      # 查看缺失组件
node skills/tdesign-docs/scripts/query-matrix.mjs --known-diff dialog    # 查看已知写法差异
node skills/tdesign-docs/scripts/query-matrix.mjs --group web --json     # 按端查询（JSON 输出）
```

## 边界

- 只回答资料在哪里、当前栈是否覆盖某组件、应先读哪个目录。
- 回答"当前栈有没有某组件"：用 `references/meta/stack-matrix.json`（全局覆盖）和对应端的 `stack-matrix-<端>.json`。
- 回答"该选什么组件、为什么"：转到 `tdesign-usage-guide`。
- 回答"页面通常怎么搭"：转到 `tdesign-composition`。
- 回答"某个 props、事件、插槽怎么写"：转到对应技术栈 skill。
- 回答"某能力何时新增或废弃"：转到 `tdesign-changelog`。

## 约束

- 不一次性读取所有技术栈的 `references/api/` 树，因为整树加载会浪费大量 token 且信息过载。
- 不从目录存在推断组件可用性，以 `references/meta/stack-matrix.json` 或对应端文件为准，因为目录可能包含不完整或过时的资料。
- 不把 Web only 组件默认用于 Mobile 或 Miniprogram，因为各端组件覆盖范围不同。
- 选择性安装且目标辅助 skill 不存在时，只回答本 skill 能确认的资料入口和覆盖矩阵；不凭记忆补齐选型、页面组合或设计规范结论。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
