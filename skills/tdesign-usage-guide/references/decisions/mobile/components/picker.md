# Mobile Picker 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Picker` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于从移动端滚轮或面板中选择单列或多列值。
- 适合选项有限、需要触控选择且不需要完整展开列表的场景。
- 选项之间没有逐级依赖，或多列只是并列值组合时使用 `Picker`。
- 适合性别、状态、时间段、简单分类等触控友好的有限选项。

## 选型要点

- 选项应相对有限，用户可以通过滚动快速完成选择。
- 多列 Picker 适合并列值组合；如果后一级依赖前一级路径，应使用 `Cascader`。
- 选项很多且用户需要关键词定位时，优先 `Search`、`Indexes` 或业务搜索页。
- 需要日期时间语义时使用 `DateTimePicker` 或 `Calendar`，不要用普通 Picker 重做。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`Cascader`、`TreeSelect`、`DropdownMenu`。
- 选项是层级路径时使用 `Cascader`；搜索是主要任务时使用 `Search`；页面内分类导航使用 `Tabs` / `SideBar`；长列表索引定位使用 `Indexes`。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而手写滚轮或底部面板，先使用 TDesign Picker / Cascader。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
- 不要用 `Picker` 承担复杂筛选面板，复杂筛选可放入 `Popup` / `Drawer`。
- 不要把操作菜单做成 Picker，操作集合应使用 `ActionSheet`。
