# Mobile ActionSheet 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `ActionSheet` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于从底部弹出一组与当前上下文相关的操作。
- 适合移动端操作选择，不适合复杂表单或长内容展示。
- 适合分享、更多操作、图片处理、订单操作、联系人操作等少量上下文动作。
- 值选择使用 `Picker` / `Cascader` / `TreeSelect`；强确认使用 `Dialog`。

## 选型要点

- 操作项应短且动作明确，适合拇指点击；数量过多时应拆分或改为页面。
- 破坏性操作可以出现在 ActionSheet 中，但需要清晰文案，必要时二次确认。
- 当前上下文必须明确，例如“对这条记录做什么”，不要作为全局导航抽屉使用。
- 需要展示长内容、表单或自定义区域时考虑 `Popup` / `Drawer`，但仍需控制内容体量。

## 反模式

- 不要用 `ActionSheet` 做表单、筛选面板或长列表选择。
- 不要把互斥值选择伪装成操作项；值选择应使用选择类组件。
- 不要在一个 ActionSheet 中混合无关操作和导航。
- 不要直接套用 Web `Dropdown` 的 hover 和菜单密度。
