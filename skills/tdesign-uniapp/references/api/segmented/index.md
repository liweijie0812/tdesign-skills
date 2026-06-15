# segmented

来源：TDesign UniApp

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/segmented/README.md

## API

### Segmented Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
block | Boolean | false | 是否撑满父元素宽度 | N
disabled | Boolean | - | 是否禁用 | N
options | Object | [] | 数据化配置选项内容。TS 类型：`string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string; icon?: string \| object; disabled?: boolean }`。[详细类型定义](./type.ts) | N
value | String / Number | - | 当前选中的值 | N
default-value | String / Number | undefined | 当前选中的值。非受控属性 | N

### Segmented Events

名称 | 参数 | 描述
-- | -- | --
change | `(detail: { value: string \| number, selectedOption: SegmentedItem })` | 选项值发生变化时触发

### Segmented External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-item | 列表子项样式类
t-class-thumb | 动画背景样式类

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
