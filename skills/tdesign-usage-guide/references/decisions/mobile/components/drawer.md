# Mobile Drawer 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Drawer` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于移动端侧向或边缘弹出内容。
- 仅在需要保留页面上下文且内容体量适中时使用；简单确认优先 `Dialog`。
- 需要保留页面上下文，同时展示辅助信息、筛选、配置或中等体量内容时使用 `Drawer`。
- 用户可以暂时查看或调整，不需要强制阻断主流程时使用 `Drawer`。

## 相关取舍

- 操作集合优先 `ActionSheet`；底部或自定义浮层优先确认 `Popup` 是否更合适；简单轻反馈优先 `Toast` / `Message`。

## 选型要点

- 先确认当前需求属于 `反馈` 场景，再决定是否使用 `Drawer`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
- 不要把长表单、大表格或复杂配置塞进 `Dialog`，也不要用 `Drawer` 承担高风险确认。
- 不要把 Web 的 `Popconfirm` 取舍默认套到 Mobile / Miniprogram。
