# tab-bar

来源：TDesign Miniprogram

组件简介：用于在不同功能模块之间进行快速切换，位于页面底部。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/tab-bar/README.md

## API

### TabBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bordered | Boolean | true | 是否显示外边框 | N
fixed | Boolean | true | 是否固定在底部 | N
placeholder | Boolean | false | `1.12.1`。固定在底部时是否开启占位 | N
safe-area-inset-bottom | Boolean | true | 是否开启底部安全区适配 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | - | 当前选中标签的索引。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N
z-index | Number | 1 | `1.12.1`。标签栏层级 | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(detail: { value: string \| number })` | 选中标签切换时触发

### TabBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### TabBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | - | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](../badge/index.md)。[详细类型定义](../tab-bar-item/type.ts) | N
icon | String / Object | - | 图标名称。传入对象时透传至 Icon 组件 | N
link-type | String | redirectTo | `1.15.2`。页面跳转类型。可选项：redirectTo/switchTab/reLaunch/navigateTo | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](../tab-bar-item/type.ts) | N
url | String | - | `1.15.2`。点击后跳转的页面路径, 需要以 `/` 开头 | N
value | String / Number | - | 标识符 | N

### TabBarItem Slots

名称 | 描述
-- | --
icon | 自定义 `icon` 显示内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-tab-bar-bg-color | @bg-color-container | -
--td-tab-bar-border-color | @border-level-1-color | -
--td-tab-bar-round-shadow | @shadow-3 | -
--td-tab-bar-active-bg | @brand-color-light | -
--td-tab-bar-active-color | @brand-color | -
--td-tab-bar-color | @text-color-primary | -
--td-tab-bar-height | 80rpx | -
--td-tab-bar-hover-bg-color | rgba(0, 0, 0, 0.05) | -
--td-tab-bar-spread-border-color | @border-color | -
--td-tab-bar-spread-shadow | @shadow-3 | -
