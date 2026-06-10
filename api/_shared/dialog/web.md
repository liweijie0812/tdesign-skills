# Dialog Web 差异

本文只说明 Web 端 Dialog 的查阅入口和端差异，不替代具体 API。实现前必须按项目技术栈查对应 API 与类型源。

## 查阅入口

- React：`api/react/dialog/index.md`，类型源为 `api/react/dialog/type.ts` 和 `api/react/common.ts`。
- Vue Next：`api/vue-next/dialog/index.md`，类型源为 `api/vue-next/dialog/type.ts`、`api/vue-next/dialog/props.ts` 和 `api/vue-next/common.ts`。
- Vue 2：`api/vue2/dialog/index.md`，类型源为 `api/vue2/dialog/type.ts`、`api/vue2/dialog/props.ts` 和 `api/vue2/common.ts`。

## 结构差异

- Web Dialog 常见结构是标题、内容和底部操作区，React 常见为 `header`、`body`、`footer`，Vue 常见为 props、默认插槽和命名插槽组合。
- React 事件使用 `onConfirm`、`onCancel`、`onClose` 等回调命名；Vue 事件使用 `confirm`、`cancel`、`close` 等模板事件命名。
- Web 支持更完整的浮层能力，如 `attach`、`mode`、`placement`、`draggable`、ESC 关闭和函数式 `DialogPlugin` / `dialog`，具体支持度按当前栈 API。
- 不要把 Web 的 `header`、`body`、`footer`、`attach`、ESC 关闭和 React 点语法套到移动端或小程序。

## 内容与结构

- 标题和内容：React 常见 `header` / `body` / `children`，Vue 常见 `header` / `body` / `default` 或插槽。
- 操作区：`footer` 控制底部区域，`confirmBtn` 和 `cancelBtn` 控制确认与取消按钮；按钮对象类型要查当前栈 `type.ts`。
- 内容卡片：React 和 Vue Next 有 `DialogCard`，适合复用标准头部、内容和操作区结构；Vue 2 API 是否支持同名能力必须查当前文档。
- 弹窗位置：`placement`、`top`、`width` 和 `mode` 是 Web 侧能力，移动端和小程序不要照搬。

## 关闭与状态

- 展示状态使用 `visible`，受控模式下由业务状态驱动。
- Web 常见 `closeOnEscKeydown`、`closeOnOverlayClick`、`showOverlay`、`preventScrollThrough`、`destroyOnClose`，默认值按当前栈 API。
- React / Vue Next 有 `confirmLoading`，React 函数式实例还提供 `setConfirmLoading`；Vue 2 是否有同等实例能力按 API。
- `attach` 和 `showInAttachedElement` 影响挂载节点和层级上下文，微前端、弹窗容器和局部滚动场景必须谨慎确认。

## 事件与函数式调用

- React 回调名以 `on` 开头，例如 `onConfirm`、`onCancel`、`onClose`、`onOpened`、`onClosed`、`onEscKeydown`、`onOverlayClick`。
- Vue 事件使用模板事件名，例如 `confirm`、`cancel`、`close`、`opened`、`closed`、`esc-keydown`、`overlay-click`。
- 关闭来源类型通常包含 `esc`、`close-btn`、`cancel`、`overlay`，但具体参数和类型以当前栈 `type.ts` 为准。
- 函数式调用入口包括 React 的 `dialog` / `DialogPlugin` 和 Vue 的 `DialogPlugin`，实例常见 `show`、`hide`、`destroy`、`update`。

## 使用边界

- 需要阻断页面任务、明确确认结果时用 `Dialog`；需要保留上下文编辑时优先 `Drawer`。
- 需要轻量二次确认时优先 `Popconfirm`，不要用大型弹窗承载一个短句确认。
- 大表单、复杂表格、可滚动长内容不要默认塞入 `Dialog`，否则会造成焦点、滚动和操作区可见性问题。
- Vue 项目不要直接使用 React 的 `DialogPlugin.confirm(options)` 类型假设或 JSX/TNode 写法，React 项目也不要照搬 Vue 插槽名。
