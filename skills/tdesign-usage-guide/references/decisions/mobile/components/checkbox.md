# Mobile Checkbox 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Checkbox` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于多选或多个独立布尔选项。
- 只允许选择一个时优先使用 `Radio`；即时状态切换优先使用 `Switch`。

## 选型要点

- 多个选项之间应相互独立，用户可以选择零个、一个或多个。
- 单个 Checkbox 适合协议确认、附加服务、偏好勾选等随提交生效的布尔值。
- 选项较多时要考虑分组、全选、半选、滚动和触控目标大小。
- 轻量标签式选择可考虑 `CheckTag`，但真实可用性需查当前栈子组件文档。

## 反模式

- 不要用 `Checkbox` 表达互斥单选，使用 `Radio`。
- 不要用 `Checkbox` 表达点击即生效的开关状态，使用 `Switch`。
- 不要默认勾选关键协议、隐私授权或高风险选项。
- 不要手写勾选行重复实现 TDesign Checkbox / Cell 组合能力。
