# segmented

来源：TDesign Mobile Vue

组件简介：用于展示多个选项并允许用户选择其中单个选项。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-vue/develop/src/segmented/segmented.md

## API

### Segmented Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否撑满父元素宽度 | N
disabled | Boolean | - | 是否禁用 | N
options | Object | [] | 数据化配置选项内容。TS 类型：`string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string \| TNode; icon?: TNode; disabled?: boolean }`。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
value | String / Number | - | 当前选中的值。支持语法糖 `v-model` 或 `v-model:value` | N
defaultValue | String / Number | - | 当前选中的值。非受控属性 | N
onChange | Function |  | TS 类型：`(context: { value: string \| number, selectedOption: SegmentedItem }) => void`<br/>选项值发生变化时触发 | N

### Segmented Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: string \| number, selectedOption: SegmentedItem })` | 选项值发生变化时触发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-segmented-bg-color | @bg-color-component-disabled | -
--td-segmented-item-active-bg | @bg-color-container | -
--td-segmented-item-active-color | @brand-color | -
--td-segmented-item-color | @text-color-primary | -
--td-segmented-item-disabled-color | @text-color-disabled | -
--td-segmented-item-label-font | @font-body-medium | -
--td-segmented-transition | all @anim-duration-base @anim-time-fn-easing | -
