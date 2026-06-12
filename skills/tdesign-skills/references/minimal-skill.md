# Minimal SKILL.md 示例

本文件故意不命名为 `SKILL.md`，避免被自动识别成第二个 skill。它用于测试 agent 是否能在普通业务项目安装 TDesign 依赖后，不读取完整仓库也能遵守 TDesign 最小规则。

```markdown
---
name: tdesign-component-usage-minimal
description: Use when a project has TDesign dependencies installed and the task involves prioritizing TDesign components, checking available components or APIs, composing UI, implementation, migration, or review.
---

# TDesign Minimal Component Usage

Use this when a normal business project has `tdesign-react`, `tdesign-vue-next`, `tdesign-vue`, `tdesign-mobile-react`, `tdesign-mobile-vue`, or `tdesign-miniprogram` installed.

## Core Rules

1. Prefer TDesign components, layouts, props, slots, and design variables when the dependency is installed.
2. Detect the stack before writing code: React, Vue Next, Vue 2, Mobile React, Mobile Vue, or Miniprogram.
3. Check the current stack before claiming a component is available.
4. Never mix React dot syntax, Vue tags, and Miniprogram kebab-case props/events.
5. If exact props/events are needed, open only the current stack skill's `references/api/<component>/index.md` and local `type.ts` / `props.ts`.
6. If TDesign cannot cover the requirement, say so and use a minimal fallback.

## Common Choices

- Button: use for explicit user actions; dangerous actions need result-oriented text like "Delete project".
- Input: use for short text entry; in submit flows wrap it with FormItem and Form validation.
- Form: use for data submission, validation, labels, and error states; do not hand-roll labels and errors.
- Dialog: use for blocking confirmation, warning, short form, or high-impact decision; use Drawer or a page for long content.
- Layout: Web app shells use Layout/Header/Aside/Content/Footer; Mobile and Miniprogram layout usually means Row/Col grid.

## Common Compositions

- Form page: Form + FormItem + field components + Button + Message.
- Table page: Form filters + Table + Pagination + Button/Dropdown + Popconfirm/Dialog.
- Detail page: Descriptions + Card + Tag + Timeline + Button/Link.
- Mobile page: Navbar + Cell/CellGroup + Form/List + Toast/Dialog.

## Similar Decisions

- Button vs Link: navigation uses Link, operations use Button.
- Dialog vs Drawer: blocking decisions use Dialog, contextual editing uses Drawer.
- Table vs List: structured multi-column data uses Table, simple items use List.
- Web Select / Mobile Picker vs Cascader: single-level choices use Web Select or Mobile Picker, hierarchical paths use Cascader.

## Hard Rules

- Do not invent TDesign props, events, slots, or components.
- Do not use `window.confirm()` when TDesign Dialog or Popconfirm fits.
- Do not copy Web props into Mobile or Miniprogram.
- Do not use other component libraries unless the user explicitly asks.
- Do not load the whole API tree; read only the component file needed for the current task.
```

## Smoke Prompts

- "把这个 `window.confirm()` 删除确认改成项目当前 TDesign 栈写法。"
- "实现一个带校验的姓名输入表单，项目使用 `tdesign-vue-next`。"
- "给后台页面搭一个左侧导航 + 内容区布局，项目使用 `tdesign-react`。"
- "项目安装了 `tdesign-react`，查一下能不能用 `Table`、`Popconfirm` 和 `Pagination` 做列表页。"
- "项目安装了 `tdesign-mobile-vue`，实现一个移动端搜索列表页，优先使用 TDesign 组件。"

期望行为：agent 先识别技术栈，确认当前栈组件是否可用，选择 TDesign 组件组合，只有需要 props / events 时才读取对应 API 文件，并避免跨栈写法。
