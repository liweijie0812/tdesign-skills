# Dialog 通用契约

本文件描述跨 React、Vue Next、Vue 2 都成立的 Dialog 语义。具体 props、事件名、插槽和导入方式必须回到当前栈 API 文档确认。

## 适用场景

- 局部中断当前任务，让用户完成确认、告警、短表单或关键决策。
- 展示需要聚焦处理的信息，并提供明确的确认、取消或关闭路径。
- 对破坏性或高后果操作进行强确认。

## 内容结构

- `header` 表达对话框目的，不要只写“提示”。
- `body` 放说明、表单或需要用户确认的关键信息。
- `footer` 放主要操作和次要操作，按钮文案应表达结果。
- `closeBtn`、遮罩关闭、ESC 关闭是否启用，应按业务后果决定。

## 状态语义

- `visible` 表示展示状态，受控使用时由业务状态驱动。
- `confirmLoading` 表示确认动作处理中，避免重复提交。
- `destroyOnClose` 控制关闭后是否销毁子内容，影响表单状态保留。
- `showOverlay`、`preventScrollThrough`、`zIndex` 影响浮层层级和滚动体验。

## 事件语义

- `confirm` 表示用户触发主要确认动作，不等于一定提交成功。
- `cancel` 表示用户触发取消按钮，通常也会触发关闭链路。
- `close` 表示关闭事件，触发来源可能是取消、关闭按钮、遮罩或 ESC。
- `opened`、`closed` 表示动画结束后的生命周期。

## 栈差异入口

- React：查 `api/react/dialog/index.md`，事件为 `onConfirm`、`onCancel`、`onClose`。
- Vue Next：查 `api/vue-next/dialog/index.md`，事件为 `confirm`、`cancel`、`close`，常见受控写法可用 `v-model:visible`。
- Vue 2：查 `api/vue2/dialog/index.md`，事件为 `confirm`、`cancel`、`close`，按项目 Vue 2 受控约定实现。
