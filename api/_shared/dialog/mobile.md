# Dialog 移动端差异

本文只说明移动端 Dialog 的查阅入口和端差异，不替代具体 API。实现前必须按项目技术栈查对应 API 与类型源。

## 查阅入口

- Mobile React：`api/mobile-react/dialog/index.md`，类型源为 `api/mobile-react/dialog/type.ts` 和 `api/mobile-react/common.ts`。
- Mobile Vue：`api/mobile-vue/dialog/index.md`，类型源为 `api/mobile-vue/dialog/type.ts`、`api/mobile-vue/dialog/props.ts` 和 `api/mobile-vue/common.ts`。

## 结构差异

- 移动端 Dialog 更强调轻量确认和短内容展示，常见结构是 `title`、`content`、`top`、`middle`、`actions`、`confirmBtn`、`cancelBtn`。
- Mobile React 事件使用 `onConfirm`、`onCancel`、`onClose`、`onOverlayClick`；Mobile Vue 同时有 `confirm`、`cancel`、`close`、`overlay-click` 事件。
- Mobile Vue 支持 `beforeClose` 异步关闭拦截；Mobile React 是否有同等能力必须查当前 API，不能直接照搬。
- 移动端按钮排列、滚动穿透、遮罩点击关闭和层级默认值与 Web 不同，不要复用 Web 默认假设。

## 内容与结构

- 标题和内容：移动端使用 `title`、`content`，并可通过 `top`、`middle` 承载轻量自定义区域。
- 操作区：`actions` 可定义操作列表；`confirmBtn` 和 `cancelBtn` 适合标准确认/取消结构。
- 按钮排列：`buttonLayout` 支持横向或纵向，多按钮、长文案或破坏性动作优先确认排列方式。
- 自定义按钮：当使用 TNode、Slot 或 Function 自定义按钮时，需要自行处理确认、取消和关闭链路。

## 关闭与状态

- 展示状态使用 `visible`，移动端通常由页面状态控制，不建议依赖隐式关闭。
- `closeOnOverlayClick` 默认更保守，高风险操作不要轻易开启遮罩点击关闭。
- `preventScrollThrough` 默认影响页面滚动穿透，长页面和弹窗内滚动要实际验证。
- `destroyOnClose` 会影响弹窗内表单或临时选择状态保留，关闭后重置与保留要按业务明确。

## 事件与函数式调用

- Mobile React 回调名为 `onCancel`、`onClose`、`onClosed`、`onConfirm`、`onOverlayClick`。
- Mobile Vue 既有 props 回调，也有 `cancel`、`close`、`closed`、`confirm`、`overlay-click` 事件。
- 移动端关闭来源常见 `cancel`、`overlay`、`close-btn`，没有 Web ESC 语义。
- 函数式调用包括 `dialog` / `DialogPlugin`、`confirm`、`alert`，实例常见 `show`、`hide`、`destroy`、`update`。

## 使用边界

- 移动端 Dialog 应保持内容短、操作少、决策清晰，复杂表单优先改成新页面或抽屉式/底部面板能力。
- 顶部、底部安全区、软键盘和滚动穿透会影响体验，输入型弹窗必须在真机或移动视口验证。
- 如果需要强业务拦截关闭，Mobile Vue 可优先查 `beforeClose`；Mobile React 不要假定有同名能力。
- 不要把 Web 的 `attach`、`mode`、`draggable`、ESC 关闭和 `header/body/footer` 写法套到移动端。
