# TDesign API 总入口

各技术栈 skill 的 `references/api/` 用来回答“当前栈有没有、怎么写”，是 props、事件、插槽、类型和导入方式的权威来源。

## 查阅顺序

1. 先确认当前技术栈：`react`、`vue-next`、`vue2`、`mobile-react`、`mobile-vue` 或 `miniprogram`。
2. 组件是否存在先查 `../meta/stack-matrix.json`；不要看到同名组件就默认当前栈可用。
3. 进入当前技术栈 skill，例如 `tdesign-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`。
4. 具体组件先看该 skill 的 `references/api/<component>/index.md`。
5. 如果 API 表不够精确，再看同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
6. 只有在需要理解跨端共享语义、组合边界或端差异时，才查 `tdesign-docs/references/api/shared/`。
7. 不同技术栈不能混读 API；实现时只以当前栈目录内容为准。

## 与其他目录的边界

- 技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写”。
- `tdesign-usage-guide/references/decisions/`：回答“该选什么组件、为什么”。
- `tdesign-composition/references/scenarios/`：回答“某类页面通常怎么组织”。

## `_shared` 的用途

- `tdesign-docs/references/api/shared/` 只放跨端语义、组合边界和端差异入口。
- `tdesign-docs/references/api/shared/` 不是 props、事件、插槽、类型或导入方式的最终依据。
- 看完 shared 后，必须回到当前技术栈 skill 的 `references/api/<component>/index.md` 落实实现。

## 使用原则

- API 表不完整时优先读同目录类型源，不依赖用户项目 `node_modules` 推断官方 API。
- React、Vue、Mobile、Miniprogram 的组件命名、事件、插槽和样式入口都可能不同，不能互相套用。
- 只按当前任务读取需要的组件文件，不整树加载所有技术栈的 `references/api/`。
