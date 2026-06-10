# empty

来源：TDesign React

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-react/develop/packages/components/empty/empty.md

## API

### Empty Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
action | TElement | - | 操作按钮。TS 类型：`TNode`。[通用类型定义](../common.ts) | N
description | TNode | - | 描述文字。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
image | TNode | - | 组件图片，可以完全自定义内容。值类型为字符串时，表示图片地址；值类型为对象时，则表示透传全部属性到图片组件。TS 类型：`string \| ImageProps \| TNode `，[Image API Documents](../image/index.md)。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
imageStyle | Object | - | 透传图片样式表。TS 类型：`Styles`。[通用类型定义](../common.ts) | N
size | String | medium | 空状态的尺寸，默认为 `medium`。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](../common.ts) | N
title | TNode | - | 错误标题。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
type | String | empty | 组件类型，如：空数据/成功/失败/网络错误/建设中。可选项：empty/success/fail/network-error/maintenance | N
