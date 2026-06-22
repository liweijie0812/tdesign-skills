# cascader

来源：TDesign Mobile React

组件简介：用于多层级数据的逐级选择。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-react/develop/src/cascader/cascader.md

## API

### Cascader Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
checkStrictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
closeBtn | TNode | true | 关闭按钮。TS 类型：`boolean \| TNode`。[通用类型定义](../common.ts) | N
header | TElement | - | `0.21.2`。头部。TS 类型：`TNode`。[通用类型定义](../common.ts) | N
keys | Object | - | 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名。TS 类型：`CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
lazy | Boolean | false | 是否异步加载 | N
loadCompleted | Boolean | false | 是否完成异步加载 | N
middleContent | TElement | - | `0.21.2`。中间内容。TS 类型：`TNode`。[通用类型定义](../common.ts) | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
overlayProps | Object | {} | `0.21.2`。遮罩层的属性，透传至 overlay。TS 类型：`OverlayProps`，[Overlay API Documents](../overlay/index.md)。[详细类型定义](./type.ts) | N
placeholder | String | 选择选项 | 未选中时的提示文案 | N
subTitles | Array | [] | 每级展示的次标题。TS 类型：`Array<string>` | N
theme | String | step | 展示风格。可选项：step/tab | N
title | TNode | - | 标题。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
value | String / Number | - | 选项值 | N
defaultValue | String / Number | - | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N
onChange | Function |  | TS 类型：`(value: string \| number, selectedOptions: CascaderOption[]) => void`<br/>值发生变更时触发 | N
onClose | Function |  | TS 类型：`(trigger: CascaderTriggerSource) => void`<br/>关闭时触发。[详细类型定义](./type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/> | N
onPick | Function |  | TS 类型：`(context: { value: string \| number, label: string, index: number, level: number }) => void`<br/>选择后触发 | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-cascader-active-color | @brand-color | -
--td-cascader-bg-color | @bg-color-container | -
--td-cascader-border-color | @component-stroke | -
--td-cascader-disabled-color | @text-color-disabled | -
--td-cascader-options-height | 320px | -
--td-cascader-options-title-color | @text-color-placeholder | -
--td-cascader-step-arrow-color | @text-color-placeholder | -
--td-cascader-step-dot-size | 8px | -
--td-cascader-step-height | 44px | -
--td-cascader-title-color | @text-color-primary | -
--td-cascader-title-font | @font-title-large | -
--td-cascader-title-padding | @spacer-2 | -
