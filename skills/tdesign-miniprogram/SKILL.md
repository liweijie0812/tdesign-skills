---
name: tdesign-miniprogram
description: 当项目使用 tdesign-miniprogram 且需要小程序单组件 API、WXML 写法、bind 事件、usingComponents 或代码落地时使用。
---

# TDesign Miniprogram API

本 skill 只服务 `tdesign-miniprogram`。实现时使用 WXML / JS、小程序短横线属性、`bind` 事件和 `usingComponents` 引入。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 查阅顺序

1. 先确认项目安装或引入 `tdesign-miniprogram`，并查看已有 WXML、JSON 和 JS 写法。
2. 典型写法参考查 `references/examples/README.md`（WXML 模板、bind 事件、kebab-case 属性、usingComponents 等）。
3. 组件是否存在：已安装 `tdesign-docs` 时查 `../tdesign-docs/references/meta/stack-matrix-miniprogram.json` 的 `coverage.byStack.miniprogram`；未安装时以当前栈 `references/api/` 目录实际存在的组件为准，不从记忆推断，建议补装 `tdesign-docs` 获得准确覆盖矩阵。
4. 具体组件 API 查 `references/api/<component>/index.md`。
5. API 表不够精确时，查同目录 `type.ts`、`props.ts`（如存在）、`common.ts` 或子组件类型文件。
6. 涉及跨端语义或端差异时：已安装 `tdesign-docs` 时先看 `../tdesign-docs/references/api/shared/index.md`；未安装时以当前栈 `references/api/<component>/` 为准，不确定的差异明确告知用户需人工确认，建议补装 `tdesign-docs` 获得跨端共享契约。
7. 移动端页面骨架与组合：已安装 `tdesign-composition` 时查 `../tdesign-composition/references/scenarios/mobile-pages.md`；未安装时只用本栈组件按移动端惯例（导航 + Cell/Form/List + 反馈）组织，不照搬 Web 中后台骨架，建议补装 `tdesign-composition` 获得标准场景卡。版本能力先 `tdesign-changelog`，未安装时跳过，查完回本栈 API 文件确认。

## 小程序写法边界

- 使用 `t-*` 组件、kebab-case 属性、`bind` 事件和 `usingComponents`。
- external classes、插槽、子组件和事件 payload 必须以 `references/api/` 为准。
- 不要把 React、Vue、Mobile Web 写法套到小程序。
- 不要凭经验编造 props、事件、插槽、CSS Variables 或 external classes。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign Miniprogram 组件和 props 解决问题，最后才补最小 WXSS。
- 禁止引入其他组件库；禁止用 `div` / `ul > li` / `window.confirm()` 重复实现 TDesign 已有能力。
- 当前栈组件不存在或能力不足：已安装 `tdesign-usage-guide` 时查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`；未安装时优先换相似 TDesign 组件，再考虑小程序原生能力 + 最小 WXSS，并在回复中说明这是非 TDesign 官方能力，建议补装 `tdesign-usage-guide` 获得完整降级策略。
- 路由交接：选型→`tdesign-usage-guide`、页面组合→`tdesign-composition`、图标→`tdesign-icons`、版本→`tdesign-changelog`；查完线索回本栈 `references/api/<component>/index.md` 确认写法。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
