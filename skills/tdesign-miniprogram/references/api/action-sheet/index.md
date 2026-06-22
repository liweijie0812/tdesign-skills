# action-sheet

来源：TDesign Miniprogram

组件简介：从底部弹出的模态框，提供和当前场景相关的操作动作，也支持提供信息输入和描述。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/action-sheet/README.md

## API

### ActionSheet Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | center | `0.29.0`。水平对齐方式。可选项：center/left | N
cancel-text | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
description | String | - | `0.29.0`。动作面板描述文字 | N
items | Array | - | 必需。菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem { label: string; description?: string; color?: string; disabled?: boolean; icon?: string \| object; suffixIcon?: string \| object }`。[详细类型定义](./type.ts) | Y
popup-props | Object | {} | 透传 Popup 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](../popup/index.md)。[详细类型定义](./type.ts) | N
show-cancel | Boolean | true | 是否显示取消按钮 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 显示与隐藏 | N
default-visible | Boolean | undefined | 显示与隐藏。非受控属性 | N

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 点击取消按钮时触发
close | `(trigger: ActionSheetTriggerSource)` | 关闭时触发。[详细类型定义](./type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | 选择菜单项时触发

### ActionSheet Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### ActionSheet External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-cancel | 取消样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-action-sheet-border-color | @component-stroke | -
--td-action-sheet-border-radius | @radius-extraLarge | -
--td-action-sheet-cancel-color | @text-color-primary | -
--td-action-sheet-color | @text-color-primary | -
--td-action-sheet-description-color | @text-color-placeholder | -
--td-action-sheet-description-font | @font-body-medium | -
--td-action-sheet-disabled-color | @text-color-disabled | -
--td-action-sheet-dot-active-color | @brand-color | -
--td-action-sheet-dot-color | @text-color-disabled | -
--td-action-sheet-dot-size | 16rpx | -
--td-action-sheet-gap-color | @bg-color-page | -
