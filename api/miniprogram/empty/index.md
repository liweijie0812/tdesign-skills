# empty

来源：TDesign Miniprogram

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/empty/README.md

## API

### Empty Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
description | String | - | 描述文字 | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String | - | 图片地址 | N

### Empty Slots

名称 | 描述
-- | --
action | 操作按钮
description | 自定义 `description` 显示内容
image | 自定义 `image` 显示内容

### Empty External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-description | 描述样式类
t-class-image | 图片样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-empty-action-margin-top | @spacer-4 | -
--td-empty-description-color | @text-color-placeholder | -
--td-empty-description-font | @font-body-medium | -
--td-empty-description-margin-top | @spacer-2 | -
--td-empty-icon-color | @text-color-placeholder | -
