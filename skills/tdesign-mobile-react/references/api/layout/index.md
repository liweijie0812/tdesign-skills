# layout

来源：TDesign Mobile React

组件简介：以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-react/develop/src/layout/layout.md

## API
### Col Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
offset | String / Number | - | 列的偏移量（默认单位px） | N
span | String / Number | - | 列的宽度（默认单位px） | N

### Row Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
gutter | String / Number | - | 列之间的间距（默认单位px） | N
