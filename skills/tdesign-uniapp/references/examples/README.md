# TDesign UniApp 示例

按组件名分目录，每个目录下放该组件的典型用法示例。

## 示例列表

| 组件 | 目录 | 覆盖组件 | 说明 |
| --- | --- | --- | --- |
| Form | `form/` | Form, FormItem, Input, Radio, Button | 基础表单页：Vue SFC 模板、easycom 自动引入、@event 事件绑定、`v-model:value` |

## 使用说明

- 示例使用 Vue SFC + Options API，组件通过 easycom 自动引入，无需手动 `import` 或 `usingComponents`。
- 组件使用 `<t-*>` 标签，属性使用短横线（kebab-case），事件使用 `@event` 语法（**不是**小程序 `bind:event`）。
- 受控组件统一使用 `value` 作为双向绑定属性名；写 `v-model` 时必须使用 `v-model:value`，不要使用裸 `v-model` / `modelValue`。
- uni-app 组件 API 参考小程序组件文档，但事件写法必须使用 `@event` Vue 语法。
- 所有 props 名称均为真实 API，具体类型和默认值请回到 `../api/<component>/index.md` 确认。
- 与小程序的关键差异详见 `../SKILL.md` 中的对比表格。
