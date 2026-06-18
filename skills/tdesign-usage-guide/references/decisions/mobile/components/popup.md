# Mobile Popup 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Popup` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于从底部、顶部或中间弹出自定义内容，且标准组件无法直接覆盖内容结构或交互。
- 适合中等体量的自定义筛选面板、说明面板、选择辅助内容或业务扩展面板。
- 标准确认用 `Dialog`，操作集合用 `ActionSheet`，值选择用 `Picker` / `Cascader` / `TreeSelect`。
- 只需要遮罩底层能力时考虑 `Overlay`，不要用 `Popup` 承担纯遮罩。

## 选型要点

- 移动端 `Popup` 应控制内容高度，避免长表单、复杂表格或多步骤流程挤在浮层内。
- 底部弹出更适合触控操作；中间弹出且需要强确认时通常应改用 `Dialog`。
- 需要保留页面上下文但内容更接近侧向任务面板时，可考虑 `Drawer`。
- 小程序、UniApp 的插槽、external classes、层级和滚动行为必须回到当前栈 API 确认。

## 反模式

- 不要用 `Popup` 重做标准 `Dialog`、`ActionSheet`、`Picker`。
- 不要把长表单、复杂配置、表格或完整页面塞进移动端 Popup。
- 不要因为视觉稿是“底部浮层”就忽略任务语义。
- 不要直接套用 Web Popup 的 hover、宽度和关闭习惯。
