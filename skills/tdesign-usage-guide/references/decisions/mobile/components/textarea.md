# Mobile Textarea 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Textarea` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于备注、说明、评论等多行文本输入。
- 短值、手机号、验证码、搜索词等场景优先使用 `Input`。

## 选型要点

- 输入内容应允许换行或较长编辑，例如备注、说明、评论、反馈、审批意见。
- 移动端要关注键盘遮挡、自动高度、字数限制、清空和滚动体验。
- 位于表单中时，应结合字段校验和错误提示；位于弹层中时要控制高度，避免键盘挤压操作按钮。
- 短值、手机号、验证码、搜索词等使用 `Input` 或 `Search`。

## 反模式

- 不要用 `Textarea` 承担富文本、复杂排版或长文档编辑。
- 不要把短字段统一做成多行输入，移动端会增加页面高度和键盘成本。
- 不要只用 placeholder 放关键规则或示例。
- 不要直接套用 Web Textarea 的高度、布局和输入事件。
