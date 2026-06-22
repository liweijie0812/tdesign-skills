# space

来源：TDesign React

组件简介：控制组件之间的间距。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-react/develop/packages/components/space/space.md

## API
### Space Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
align | String | - | 对齐方式。可选项：start/end/center/baseline | N
breakLine | Boolean | false | 是否自动换行，仅在 horizontal 时有效	 | N
direction | String | horizontal | 间距方向。可选项：vertical/horizontal | N
separator | TNode | - | 分隔符。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
size | String / Number / Array | 'medium' | 间距大小。TS 类型：`SpaceSize \| SpaceSize[]` `type SpaceSize = number \| string \| SizeEnum`。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
