# Mobile Form 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Form` 的设计选型。具体 `FormItem`、`rules`、`contentAlign`、`labelAlign`、`labelWidth`、`readonly` / `readOnly`、`disabled`、`scrollToFirstError`、事件、插槽和 external classes 必须回到当前栈 API 确认。

## 何时使用

- 当移动端需要收集、校验并提交一组字段时使用。
- 适合登录、注册、地址、资料编辑、审批填写、订单确认、反馈提交等有明确字段关系的场景。
- 表单项需要与 `Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Upload`、`Checkbox`、`Radio`、`Switch`、`Stepper` 等组件组合时使用。
- 如果只是展示信息，优先使用 `Cell` / `CellGroup`、`Result` 或详情页结构，不要用禁用表单伪装详情。

## 移动端布局

- 移动端优先单列、分组、分步或拆页面，避免横向密集排布。
- 字段较多时按任务分组，并提供清晰标题、说明和阶段反馈。
- 主提交按钮通常固定在底部或页面末尾，并避开安全区、键盘和 `TabBar`。
- 短表单可放入 `Dialog`；长表单或复杂配置优先使用页面、`Popup` 或 `Drawer`。

## 输入与选择

- 短文本用 `Input`，长文本用 `Textarea`，搜索任务用 `Search`。
- 单列或多列值选择用 `Picker`，层级路径用 `Cascader`，树形分类用 `TreeSelect`。
- 日期时间格式正确性重要时使用 `DateTimePicker` 或 `Calendar`，不要让用户手输复杂日期。
- 上传、手机号、隐私授权等平台相关能力必须按当前栈 API 和平台限制确认。

## 校验与反馈

- 校验错误应贴近字段展示，并提供可修正的明确文案。
- 提交失败时应滚动或定位到首个错误，避免用户在长页面中寻找问题。
- 异步提交时使用按钮 `loading` 或页面加载反馈，避免重复提交。
- 轻反馈用 `Toast` / `Message`，高后果确认用 `Dialog`。

## 与 JSON Schema

- 固定字段和明确业务流程优先直接使用 TDesign `Form`。
- 后端配置、低代码或租户动态字段可以使用项目级 schema 渲染器，但不是 TDesign 官方组件。
- 移动端 schema 渲染要映射到移动端组件，不要照搬 Web `Select`、多列布局和桌面交互。

## 反模式

- 不要把长表单塞进一个 `Dialog`。
- 不要绕过 `FormItem` 自行拼装标签、错误文案和校验状态。
- 不要在小屏中堆叠多列输入、复杂筛选和大面积说明。
- 不要把小程序 WXML、短横线属性、`bind` 事件和 external classes 与 React / Vue 写法混用。
