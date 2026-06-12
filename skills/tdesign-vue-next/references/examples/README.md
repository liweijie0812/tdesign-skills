# TDesign Vue Next 示例

按组件名分目录，每个目录下放该组件的典型用法示例。

## 示例列表

| 组件 | 目录 | 覆盖组件 | 说明 |
| --- | --- | --- | --- |
| Form | `form/` | Form, FormItem, Input, InputNumber, Select, Radio, DatePicker, Button, Message | 基础表单页：v-model 双向绑定、Composition API、校验规则、提交与重置 |

## 使用说明

- 示例使用 Vue 3 SFC + `<script setup>` Composition API。
- 组件使用 `<t-*>` 标签，通过 `import { ... } from 'tdesign-vue-next'` 引入。
- 所有 props 名称均为真实 API，具体类型和默认值请回到 `../api/<component>/index.md` 确认。
- 示例代码可独立复制到 `.vue` 文件中运行。
