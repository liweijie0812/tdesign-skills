# list

来源：TDesign Mobile Vue

组件简介：瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-vue/develop/src/list/list.md

## API

### List Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
asyncLoading | String / Slot / Function | - | 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
footer | String / Slot / Function | - | 底部。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
header | String / Slot / Function | - | 头部。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
onLoadMore | Function |  | TS 类型：`() => void`<br/>点击加载更多时触发 | N
onScroll | Function |  | TS 类型：`(bottomDistance: number, scrollTop: number) => void`<br/>列表滚动时触发，bottomDistance 表示底部距离；scrollTop 表示顶部滚动距离 | N

### List Events

名称 | 参数 | 描述
-- | -- | --
load-more | \- | 点击加载更多时触发
scroll | `(bottomDistance: number, scrollTop: number)` | 列表滚动时触发，bottomDistance 表示底部距离；scrollTop 表示顶部滚动距离
