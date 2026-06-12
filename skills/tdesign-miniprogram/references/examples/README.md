# TDesign 小程序示例

按组件名分目录，每个目录下放该组件的典型用法示例。

## 示例列表

| 组件 | 目录 | 覆盖组件 | 说明 |
| --- | --- | --- | --- |
| Form | `form/` | Form, FormItem, Input, Radio, Button, Message | 基础表单页：WXML 模板、kebab-case 属性、bind 事件、data 绑定、usingComponents |

## 使用说明

- 小程序每个页面由 `.wxml`（模板）、`.js`（逻辑）、`.json`（配置）三个文件组成。
- 组件使用 `<t-*>` 标签，属性使用短横线（kebab-case），事件使用 `bind:event` 语法。
- 组件需在 `.json` 中通过 `usingComponents` 注册。
- 所有 props 名称均为真实 API，具体类型和默认值请回到 `../api/<component>/index.md` 确认。
