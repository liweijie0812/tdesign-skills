# side-bar

来源：TDesign Miniprogram

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/side-bar/README.md

## API

### SideBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
value | String / Number | - | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N

### SideBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number \| string, label: string)` | 选项值发生变化时触发
click | `(value: number \| string, label: string)` | 点击选项时触发

### SideBar Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义侧边导航栏内容


### SideBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | - | 透传至 Badge 组件。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/side-bar-item/type.ts) | N
disabled | Boolean | false | 是否禁用 | N
icon | String / Object | - | 图标，传对象则透传至 Icon | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N

### SideBarItem Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义侧边导航项内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-side-bar-bg-color | @bg-color-secondarycontainer | -
--td-side-bar-height | 100% | -
--td-side-bar-width | 206rpx | -
--td-side-bar-active-color | @brand-color | -
--td-side-bar-border-radius | 18rpx | -
--td-side-bar-color | @text-color-primary | -
--td-side-bar-disabled-color | @text-color-disabled | -
--td-side-bar-font | @font-body-large | -
--td-side-bar-icon-size | 40rpx | -
--td-side-bar-item-height | auto | -
