# Mobile Overlay 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Overlay` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 作为遮罩层或浮层底层能力，用于当前栈标准浮层无法满足的自定义场景。
- 适合配合自定义弹层、引导遮罩或页面局部遮挡使用。
- 标准反馈和选择场景优先使用 `Dialog`、`Popup`、`ActionSheet`、`Picker` 等组件。

## 选型要点

- 先确认当前需求属于 `反馈` 场景，再决定是否使用 `Overlay`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
