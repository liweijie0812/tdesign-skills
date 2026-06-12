# TDesign Mobile Vue 示例

按组件名分目录，每个目录下放该组件的典型用法示例。

## 示例列表

| 组件 | 目录 | 覆盖组件 | 说明 |
| --- | --- | --- | --- |
| Form | `form/` | Form, FormItem, Input, Radio, Button, Toast | 移动端基础表单页：v-model 双向绑定、Composition API、校验规则、Toast 反馈 |

## 使用说明

- 示例使用 Vue 3 SFC + `<script setup>` Composition API。
- 组件使用 `<t-*>` 标签，通过 `import { ... } from 'tdesign-mobile-vue'` 引入。
- 移动端组件集与 Web 不同，具体可用组件请先查 `../tdesign-docs/references/meta/stack-matrix-mobile.json`。
- 所有 props 名称均为真实 API，具体类型和默认值请回到 `../api/<component>/index.md` 确认。
