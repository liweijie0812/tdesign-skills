# Minimal SKILL.md 示例

本文件故意不命名为 `SKILL.md`，避免被自动识别成第二个 skill。它用于测试 agent 是否能在不读取完整仓库的情况下遵守 TDesign 最小规则。

```markdown
---
name: tdesign-component-usage-minimal
description: Use when a project uses TDesign and the task involves Button, Input, Form, Dialog, or Layout component selection, implementation, migration, or review.
---

# TDesign Minimal Component Usage

Use this when the project has `tdesign-react`, `tdesign-vue-next`, `tdesign-vue`, `tdesign-mobile-react`, `tdesign-mobile-vue`, or `tdesign-miniprogram` installed.

## Core Rules

1. Prefer TDesign components, layouts, props, slots, and design variables.
2. Detect the stack before writing code: React, Vue Next, Vue 2, Mobile React, Mobile Vue, or Miniprogram.
3. Never mix React dot syntax, Vue tags, and Miniprogram kebab-case props/events.
4. If exact props/events are needed, open only `api/<stack>/<component>/index.md` and local `type.ts` / `props.ts`.
5. If TDesign cannot cover the requirement, say so and use a minimal fallback.

## Common Choices

- Button: use for explicit user actions; dangerous actions need result-oriented text like "Delete project".
- Input: use for short text entry; in submit flows wrap it with FormItem and Form validation.
- Form: use for data submission, validation, labels, and error states; do not hand-roll labels and errors.
- Dialog: use for blocking confirmation, warning, short form, or high-impact decision; use Drawer or a page for long content.
- Layout: Web app shells use Layout/Header/Aside/Content/Footer; Mobile and Miniprogram layout usually means Row/Col grid.

## Similar Decisions

- Button vs Link: navigation uses Link, operations use Button.
- Dialog vs Drawer: blocking decisions use Dialog, contextual editing uses Drawer.
- Table vs List: structured multi-column data uses Table, simple items use List.
- Select vs Cascader: flat choices use Select, hierarchical paths use Cascader.

## Hard Rules

- Do not invent TDesign props, events, slots, or components.
- Do not use `window.confirm()` when TDesign Dialog or Popconfirm fits.
- Do not copy Web props into Mobile or Miniprogram.
- Do not use AntD, Element Plus, or other component libraries unless the user explicitly asks.
- Do not load the whole API tree; read only the component file needed for the current task.
```

## Smoke Prompts

- "把这个 `window.confirm()` 删除确认改成项目当前 TDesign 栈写法。"
- "实现一个带校验的姓名输入表单，项目使用 `tdesign-vue-next`。"
- "给后台页面搭一个左侧导航 + 内容区布局，项目使用 `tdesign-react`。"

期望行为：agent 先识别技术栈，选择 TDesign 组件，只有需要 props / events 时才读取对应 API 文件，并避免跨栈写法。
