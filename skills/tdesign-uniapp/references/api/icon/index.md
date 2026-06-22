# icon

来源：TDesign UniApp

组件简介：Icon 作为 UI 构成中重要的元素，一定程度上影响 UI 界面整体呈现出的风格。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/icon/README.md

## API

### Icon Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
color | String | - | 图标颜色 | N
name | String | - | 必需。图标名称或图片链接 | Y
prefix | String | - | 自定义图标前缀 | N
size | String / Number | - | 图标大小, 如 `20`, `20px`, `48rpx`, 默认单位是 `px` | N

### Icon Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击图标时触发。[通用类型定义](../common/common.ts)

### Icon External Classes

类名 | 描述
-- | --
t-class | 根节点样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
ant: norma | ant: norma | -
