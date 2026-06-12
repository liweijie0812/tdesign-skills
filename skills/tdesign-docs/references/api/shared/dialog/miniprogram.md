# Dialog 小程序差异

本文只说明小程序 Dialog 的查阅入口和平台差异，不替代具体 API。实现前必须查小程序 API 与类型源。

## 查阅入口

- 小程序：`skills/tdesign-miniprogram/references/api/dialog/index.md`，类型源为 `skills/tdesign-miniprogram/references/api/dialog/type.ts`、`skills/tdesign-miniprogram/references/api/dialog/props.ts` 和 `skills/tdesign-miniprogram/references/api/common/common.ts`。

## 平台差异

- 小程序属性使用短横线命名，例如 `button-layout`、`cancel-btn`、`close-btn`、`close-on-overlay-click`、`show-overlay`、`z-index`。
- 小程序 Dialog 有明确的 slots 和 external classes，样式定制优先使用文档列出的 slot、`t-class-*` 与 CSS Variables。
- 小程序事件参数和 Web / Mobile 不一致，例如 `close` 事件传入触发源，`confirm` 和 `cancel` 不等同于 React/Vue 的 MouseEvent 回调。
- 小程序层级默认值、导航栏适配和平台行为不同，不要复用 Web 或 Mobile React/Vue 的 `attach`、ESC 关闭、React 回调命名或 Vue 插槽写法。

## 内容与结构

- 标题和内容：使用 `title`、`content`，复杂内容通过 `top`、`middle`、`content` 等 slots 承载。
- 操作区：使用 `actions`、`confirm-btn`、`cancel-btn`，自定义 slot 时需要自行保证确认/取消行为。
- 按钮排列：`button-layout` 控制多按钮横向或纵向排列，长文案和多操作要优先检查移动屏幕宽度。
- 自定义导航栏：使用自定义导航栏时查 `using-custom-navbar`，避免弹窗定位和安全区异常。

## 关闭与状态

- 展示状态使用 `visible`，属性名保持小程序短横线或文档定义，不使用 React/Vue v-model 写法。
- `close-on-overlay-click`、`show-overlay`、`prevent-scroll-through` 控制遮罩和滚动穿透，高风险操作不要默认允许遮罩关闭。
- `z-index` 小程序默认值与 Web / Mobile 不同，叠加 `Popup`、`Toast`、自定义导航栏时必须按小程序 API 调整。
- 小程序 Dialog API 未列出 `destroyOnClose` 时，不要假设关闭后会销毁或保留内部状态。

## 事件、插槽与样式

- 事件包括 `cancel`、`close`、`confirm`、`overlay-click`；`close` 参数是 `DialogEventSource`，以 `type.ts` 为准。
- slots 包括 `actions`、`cancel-btn`、`confirm-btn`、`content`、`middle`、`title`、`top`。
- external classes 包括 `t-class`、`t-class-action`、`t-class-cancel`、`t-class-confirm`、`t-class-content`。
- 样式定制优先使用 external classes 和 CSS Variables，不要照搬 Web className 或 Vue scoped slot 方案。

## 使用边界

- 小程序 Dialog 适合短确认、提示和轻量内容，不适合承载复杂表单、长列表和多步骤配置。
- 涉及平台返回、页面滚动、自定义导航栏和键盘输入时，要按小程序真机行为验证。
- 不能把 React 的 `onConfirm`、Vue 的 `@confirm` 参数形态、Web 的 `attach` 或 Mobile Vue 的 `beforeClose` 直接套到小程序。
