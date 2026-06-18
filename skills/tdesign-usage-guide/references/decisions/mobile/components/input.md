# Mobile Input 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Input` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于移动端短文本输入，常与 `Cell`、`Form` 或图标按钮组合。
- 需要多行内容时使用 `Textarea`。

## 选型要点

- 输入内容应是短值或单行文本，例如手机号、验证码、姓名、地址补充、编号、关键词。
- 一组字段需要提交或校验时，放入 `Form`；设置项或列表项中编辑短值时可与 `Cell` 组合。
- 搜索是页面主任务时使用 `Search`；多行备注、说明、评论使用 `Textarea`。
- 数量加减使用 `Stepper`；连续范围选择使用 `Slider`；固定选项选择使用 `Picker`、`Radio` 或 `Checkbox`。
- 小程序键盘类型、输入限制、事件和 external classes 必须查当前栈 API。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`Textarea`、`Search`、`Stepper`、`Form`。

## 反模式

- 不要用 `Input` 模拟选择器、日期时间选择或数量步进。
- 不要只靠 placeholder 说明必填、格式或业务限制；移动端应给出可见提示和校验反馈。
- 不要把长文本塞进单行输入，避免键盘遮挡和编辑困难。
- 不要把 Web Input 的尺寸、布局和事件写法直接套用到移动端或小程序。
