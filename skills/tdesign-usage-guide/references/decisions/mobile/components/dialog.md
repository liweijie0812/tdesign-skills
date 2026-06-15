# Mobile Dialog 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Dialog` 的设计选型。具体 `visible`、`title`、`content`、`actions`、`buttonLayout`、`confirmBtn`、`cancelBtn`、`closeOnOverlayClick`、插件调用、插槽、external classes 和事件必须回到当前栈 API 确认。

## 何时使用

- 用户必须先完成确认、告警、短输入或关键决策，才能继续当前流程时使用。
- 内容短，主要是危险确认、结果提示、少量输入或必要信息补充。
- 操作有风险或不可逆，例如删除、取消订单、注销、退出、覆盖数据，需要明确说明后果。
- 权限、隐私、平台能力或业务规则需要用户明确同意时，可使用 `Dialog` 或平台规定能力。

## 与相似组件

- 轻反馈优先 `Toast` / `Message`，不要为了提示成功而默认弹窗。
- 操作集合优先 `ActionSheet`。
- 底部或自定义内容弹层优先考虑 `Popup`。
- 需要保留页面上下文并展示中等体量内容时使用 `Drawer`。

## 内容与按钮

- 标题要短，正文要直接说明影响和下一步。
- 确认按钮文案应表达结果，例如“删除”“确认支付”“退出登录”。
- 多按钮场景要控制数量，按钮过多时考虑 `ActionSheet` 或拆流程。
- 竖排按钮适合较长按钮文案或多个动作；横排按钮适合确认/取消等少量动作。
- 危险操作需要清晰风险说明，不应只依赖红色按钮。

## 移动端行为

- 默认避免点击蒙层关闭关键决策弹窗，防止误触。
- 异步确认时使用按钮加载或页面反馈，避免重复点击。
- 弹窗内容应短小，避免键盘、滚动和安全区造成操作困难。
- 短表单可以放入 `Dialog`；长表单、复杂配置或筛选面板应使用页面、`Popup` 或 `Drawer`。
- 小程序事件、插槽、external classes 和层级要按当前 API 确认，不要套用 React / Vue 写法。

## 反模式

- 不要把所有提示都做成 `Dialog`。
- 不要把长表单、大表格、复杂配置塞进 `Dialog`。
- 不要用 `Drawer` 承担高风险确认，也不要用 `Dialog` 承担操作集合。
- 不要照搬 Web 的 ESC、hover、宽弹窗和桌面关闭习惯。
