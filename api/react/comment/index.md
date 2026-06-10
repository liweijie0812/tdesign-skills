# comment

来源：TDesign React

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-react/develop/packages/components/comment/comment.md

## API
### Comment Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actions | Array | - | 操作。TS 类型：`Array<TNode>`。[通用类型定义](../common.ts) | N
author | TNode | - | 作者。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
avatar | TNode | - | 头像。TS 类型：`string \| AvatarProps \| TNode`，[Avatar API Documents](../avatar/index.md)。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
content | TNode | - | 内容。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
datetime | TNode | - | 时间。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
quote | TNode | - | 引用。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
reply | TNode | - | 回复。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
