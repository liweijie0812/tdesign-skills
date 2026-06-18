# Mobile Overlay 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Overlay` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 作为遮罩层或浮层底层能力，用于当前栈标准浮层无法满足的自定义场景。
- 适合配合自定义弹层、引导遮罩或页面局部遮挡使用。
- 标准反馈和选择场景优先使用 `Dialog`、`Popup`、`ActionSheet`、`Picker` 等组件。

## 选型要点

- 先确认是否只是需要已有浮层组件的遮罩；如果是，不应单独使用 `Overlay`。
- 自定义浮层需要自己处理层级、滚动穿透、点击关闭、安全区和可访问性语义。
- 引导遮罩场景优先确认 `Guide` 是否满足；只有局部遮挡或特殊高亮需求才考虑 `Overlay`。
- 小程序和 UniApp 的层级、滚动和 external classes 能力必须回到当前栈 API 确认。

## 反模式

- 不要用 `Overlay` 手写 `Dialog`、`ActionSheet`、`Picker` 或 `Popup` 已有交互。
- 不要只为了让页面变暗而加遮罩，遮罩必须对应明确的浮层、阻塞或聚焦任务。
- 不要忽略滚动穿透、返回键、蒙层点击和安全区行为。
- 不要把 Web 浮层层级和样式写法直接套用到移动端或小程序。
