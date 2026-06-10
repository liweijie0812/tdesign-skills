# Minimal SKILL.md Example

This file is intentionally not named `SKILL.md`, so it is not auto-loaded as a second skill. Use it as a compact prompt-engineering baseline when testing whether an agent can follow TDesign rules before opening the full references.

```markdown
---
name: tdesign-component-usage-minimal
description: Use when a project uses TDesign and the task involves Button, Input, Form, Dialog, or Layout component selection or implementation.
---

# TDesign Minimal Component Usage

Use TDesign components when the project has `tdesign-react`, `tdesign-vue-next`, `tdesign-vue`, `tdesign-mobile-react`, `tdesign-mobile-vue`, or `tdesign-miniprogram` installed.

## Workflow

1. Detect the stack: React, Vue Next, Vue 2, Mobile React, Mobile Vue, or Miniprogram.
2. Never mix React dot syntax, Vue tags, and Miniprogram kebab-case props/events.
3. Choose from the five common components first: Button, Input, Form, Dialog, Layout.
4. If exact props/events are needed, open only the matching `api/<stack>/<component>/index.md` and local `type.ts` / `props.ts`.
5. If TDesign cannot cover the requirement, say so and use the fallback policy.

## Common Choices

- Button: use for explicit user actions; dangerous actions need result-oriented text like "Delete project".
- Input: use for short text entry; in submit flows wrap it with FormItem and Form validation.
- Form: use for data submission, validation, labels, and error states; do not hand-roll labels and errors.
- Dialog: use for blocking confirmation, warning, short form, or high-impact decision; use Drawer or a page for long content.
- Layout: Web app shells use Layout/Header/Aside/Content/Footer; Mobile and Miniprogram layout usually means Row/Col grid.

## Hard Rules

- Do not invent TDesign props, events, slots, or components.
- Do not use `window.confirm()` when TDesign Dialog or Popconfirm fits.
- Do not copy Web props into Mobile or Miniprogram.
- Do not load the whole API tree; read only the component file needed for the current task.
```

## Smoke Prompts

- "把这个 `window.confirm()` 删除确认改成项目当前 TDesign 栈写法。"
- "实现一个带校验的姓名输入表单，项目使用 `tdesign-vue-next`。"
- "给后台页面搭一个左侧导航 + 内容区布局，项目使用 `tdesign-react`。"

Expected behavior: the agent identifies the stack, chooses the relevant TDesign component, reads only the matching API file when props/events are needed, and avoids cross-stack syntax.
