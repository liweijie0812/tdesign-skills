# Mobile Cascader 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Cascader` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于逐级选择层级数据，例如地区、分类或组织路径。
- 当层级数据需要在紧凑空间中完成路径选择时使用。
- 选项下一级依赖上一级，用户需要选择一条完整路径时使用 `Cascader`。

## 选型要点

- 先确认当前需求属于 `数据录入` 场景，再决定是否使用 `Cascader`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
- 不要把无层级关系的普通枚举做成 `Cascader`。
- 不要照搬 Web `Select` 的交互和 API；移动端值选择优先按 `Picker`、`Cascader`、`TreeSelect` 的数据结构取舍。
