# Mobile TabBar 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `TabBar` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于应用主功能模块间的底部切换。
- 适合少量高频、平级、全局模块，不适合临时分类筛选。

## 选型要点

- 先确认当前需求属于 `导航` 场景，再决定是否使用 `TabBar`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
