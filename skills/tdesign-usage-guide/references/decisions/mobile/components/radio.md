# Mobile Radio 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Radio` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于从少量互斥选项中选择一个。
- 选项较多或需要多级选择时考虑 `Picker`、`Cascader` 或 `TreeSelect`。
- 适合支付方式、配送方式、性别、状态、类型等需要全部可见的少量单选项。
- 当选项是页面级分类切换时，优先考虑 `Tabs` 或 `Segmented`。

## 选型要点

- 选项应互斥且数量少，用户能在移动端一屏或少量滚动内完成比较。
- 选项文案较长时，可结合说明文本或 `Cell` 布局，避免触控目标过小。
- 选项很多、空间有限或需要滚轮选择时使用 `Picker`。
- 随表单提交的单选值适合 `Radio`；即时开关状态使用 `Switch`。

## 反模式

- 不要用 `Radio` 表达多选，使用 `Checkbox`。
- 不要把大量选项铺满移动页面，优先 `Picker` 或搜索选择。
- 不要用 `Radio` 伪装页面分类导航。
- 不要直接套用 Web Radio 的密集横排布局。
