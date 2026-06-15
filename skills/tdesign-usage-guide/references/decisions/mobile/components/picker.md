# Mobile Picker 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Picker` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于从移动端滚轮或面板中选择单列或多列值。
- 适合选项有限、需要触控选择且不需要完整展开列表的场景。
- 选项之间没有逐级依赖，或多列只是并列值组合时使用 `Picker`。
- 适合性别、状态、时间段、简单分类等触控友好的有限选项。

## 选型要点

- 先确认当前需求属于 `数据录入` 场景，再决定是否使用 `Picker`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`Cascader`、`TreeSelect`、`DropdownMenu`。
- 选项是层级路径时使用 `Cascader`；搜索是主要任务时使用 `Search`；页面内分类导航使用 `Tabs` / `SideBar`；长列表索引定位使用 `Indexes`。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
- 不要用 `Picker` 承担复杂筛选面板，复杂筛选可放入 `Popup` / `Drawer`。
