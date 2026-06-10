# 表单页场景卡

用于新增、编辑、配置、审批、搜索条件等需要收集和提交信息的页面。

## 默认组件组合

- 页面容器：`Layout`、`Card`、`Space`、`Divider`。
- 表单主体：`Form`、`FormItem`，字段组件按值类型选择 `Input`、`Select`、`DatePicker`、`Checkbox`、`Radio`、`Switch`、`Upload`。
- 操作区：`Button`，主操作使用 `theme="primary"`，取消、重置、返回使用次级按钮。
- 反馈：提交成功用 `Message`，失败原因在表单项或页面 `Alert` 中展示。

## 选型规则

- 一组字段需要提交或校验时使用 `Form`，只读信息使用 `Descriptions`。
- 简单筛选表单可以使用行内布局，复杂编辑表单优先纵向布局。
- 多个动态重复字段使用表单列表能力或项目已有封装，不自行拼装数组状态。
- 长表单需要分区时使用 `Card`、`Divider`、`Tabs` 或锚点，不默认塞进 `Dialog`。

## 栈差异提醒

- React 查 `api/react/form/index.md`，常见字段容器为 `FormItem` 或 `Form.FormItem`。
- Vue Next 查 `api/vue-next/form/index.md`，常见字段容器为 `<t-form-item>`。
- Vue 2 查 `api/vue2/form/index.md`，按 Vue 2 模板、事件和插槽语法实现。

## 验证清单

- 必填、格式、异步校验和错误文案能定位到字段。
- 提交按钮有 loading 或防重复提交策略。
- 重置逻辑与初始值策略明确。
- 只读、禁用、编辑态切换不会丢失用户输入。
