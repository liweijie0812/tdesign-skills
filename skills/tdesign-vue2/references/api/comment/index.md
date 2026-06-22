# comment

来源：TDesign Vue 2

组件简介：评论用于对页面内容的反馈、评价、讨论等，如对文章的评价，对话题的讨论等。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-vue/develop/src/comment/comment.md

## API
### Comment Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
actions | Array | - | 操作。TS 类型：`Array<TNode>`。[通用类型定义](../common.ts) | N
author | String / Slot / Function | - | 作者。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
avatar | String / Object / Slot / Function | - | 头像。TS 类型：`string \| AvatarProps \| TNode`，[Avatar API Documents](../avatar/index.md)。[通用类型定义](../common.ts)。[详细类型定义](./type.ts) | N
content | String / Slot / Function | - | 内容。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
datetime | String / Slot / Function | - | 时间。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
quote | String / Slot / Function | - | 引用。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
reply | String / Slot / Function | - | 回复。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
