---
name: tdesign-miniprogram
description: 当项目使用 tdesign-miniprogram，且任务需要小程序单组件 API、WXML 写法、短横线属性、bind 事件、external classes、usingComponents、示例代码或已确定组件后的代码落地/修复时使用。只负责当前栈 API；组件选型、页面组合、图标检索和版本历史转到对应专项 skill。
---

# TDesign Miniprogram API

本 skill 只服务 `tdesign-miniprogram`。实现时使用 WXML / JS、小程序短横线属性、`bind` 事件和 `usingComponents` 引入。

## 查阅顺序

1. 先确认项目安装或引入 `tdesign-miniprogram`，并查看已有 WXML、JSON 和 JS 写法。
2. 需要快速参考典型写法时，查 `references/examples/`（示例展示 WXML 模板、bind 事件、kebab-case 属性、usingComponents 等典型模式）。
3. 组件是否存在先查 `../tdesign-docs/references/meta/stack-matrix-miniprogram.json` 的 `coverage.byStack.miniprogram` 或移动端覆盖范围。
4. 具体组件 API 查 `references/api/<component>/index.md`。
5. API 表不够精确时，查同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
6. 涉及跨端语义或端差异时，先看 `../tdesign-docs/references/api/shared/index.md`，再回到 `references/api/<component>/`。
7. 涉及组件组合或页面搭建时，先使用 `tdesign-composition`。
8. 涉及版本能力时，使用 `tdesign-changelog` 后再回到 Miniprogram API 文件确认。

## 小程序写法边界

- 使用 `t-*` 组件、kebab-case 属性、`bind` 事件和 `usingComponents`。
- external classes、插槽、子组件和事件 payload 必须以 `references/api/` 为准。
- 不要把 React、Vue、Mobile Web 写法套到小程序。
- 不要凭经验编造 props、事件、插槽、CSS Variables 或 external classes。
- 组件选型转到 `tdesign-usage-guide`，页面组合转到 `tdesign-composition`。
- 图标名称、图标包和导入方式转到 `tdesign-icons`，版本线索转到 `tdesign-changelog`。

## 约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- 优先用 TDesign Miniprogram 组件和 props 解决问题，最后才补最小 WXSS。
- 如果 Miniprogram 当前组件不存在或能力不足，查 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
