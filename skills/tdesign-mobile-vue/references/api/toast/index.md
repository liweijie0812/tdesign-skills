# toast

来源：TDesign Mobile Vue

组件简介：用于轻量级反馈或提示，不会打断用户操作。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-vue/develop/src/toast/toast.md

## API

### Toast Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
direction | String | row | 图标排列方式。可选项：row/column | N
duration | Number | 2000 | 弹窗显示毫秒数 | N
icon | String / Slot / Function | - | 自定义图标。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
message | String / Slot / Function | - | 弹窗显示文字。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
overlayProps | Object | {} | 遮罩层属性，透传至 Overlay。TS 类型：`OverlayProps `，[Overlay API Documents](../overlay/index.md)。[详细类型定义](./type.ts) | N
placement | String | middle | 弹窗展示位置。可选项： top/middle/bottom | N
preventScrollThrough | Boolean | false | 防止滚动穿透，即不允许点击和滚动 | N
showOverlay | Boolean | false | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/warning/error | N
onClose | Function |  | TS 类型：`() => void`<br/>轻提示隐藏的时候触发 | N
onDestroy | Function |  | TS 类型：`() => void`<br/>轻提示销毁的时候触发 | N

### Toast Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 轻提示隐藏的时候触发
destroy | \- | 轻提示销毁的时候触发

### ToastOptions

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](../common.ts) | N
className | String | - | 弹框类名，示例：'t-class-toast-first t-class-toast-second' | N
style | String / Object | - | 弹框 style 属性，输入 [CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText)。TS 类型：`string \| Styles`。[通用类型定义](../common.ts) | N
`ToastProps` | \- | - | 继承 `ToastProps` 中的全部属性 | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-toast-bg-color | @mask-active | -
--td-toast-color | @text-color-anti | -
--td-toast-column-icon-size | 32px | -
--td-toast-max-width | 185px | -
--td-toast-radius | @radius-default | -
--td-toast-row-icon-size | 24px | -
