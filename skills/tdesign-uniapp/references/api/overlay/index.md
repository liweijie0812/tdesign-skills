# overlay

来源：TDesign UniApp

组件简介：通过遮罩层，可以强调部分内容。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/overlay/README.md

## API

### Overlay Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
background-color | String | - | 遮罩层的背景色 | N
duration | Number | 300 | 背景色过渡时间，单位毫秒 | N
prevent-scroll-through | Boolean | true | 防止滚动穿透，即不允许点击和滚动 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 是否展示 | N
z-index | Number | 11000 | 遮罩层级 | N

### Overlay Events

名称 | 参数 | 描述
-- | -- | --
click | `({ visible: boolean })` | 点击遮罩时触发

### Overlay Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-overlay-bg-color | @mask-active | -
--td-overlay-transition-duration | 300ms | -
