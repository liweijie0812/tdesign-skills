# TDesign API 总入口

各技术栈 skill 的 `references/api/` 用来回答“当前栈有没有、怎么写”，是 props、事件、插槽、类型、导入方式和组件用法示例的权威来源。

## 查阅顺序

1. 先确认当前技术栈：`react`、`vue-next`、`vue2`、`mobile-react`、`mobile-vue` 或 `miniprogram`。
2. 组件是否存在先查 `../meta/stack-matrix.json`；不要看到同名组件就默认当前栈可用。
3. 进入当前技术栈 skill，例如 `tdesign-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`。
4. 具体组件先看该 skill 的 `references/api/<component>/index.md`。
5. 如果 API 表不够精确，再看同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
6. 只有在需要理解跨端共享语义、组合边界或端差异时，才查 `tdesign-docs/references/api/shared/`。
7. 不同技术栈不能混读 API；实现时只以当前栈目录内容为准。
8. 用户要求“给个示例”时，也先走以上路径；示例代码必须由当前栈 API、类型源和同栈 examples 支撑，不能根据其他框架习惯现编。

## 组件用法题固定顺序

1. 先确认技术栈，不明确时先基于依赖或已有代码做假设。
2. 先确认组件在当前栈可用，再进入当前栈 `references/api/<component>/index.md`。
3. API 表不够精确时，补读同目录 `type.ts`、`props.ts`、`common.ts` 或子组件类型文件。
4. 只有在需要给用户示例、变体或完整落地写法时，才去读同栈 `references/examples/README.md` 和命中的示例文件。
5. 回答时先给技术栈前提和关键 API，再给最小示例，不从其他框架示例反推当前栈写法。

## 组件用法题回答模板

- 先说前提：当前按哪个技术栈回答。
- 再说依据：关键 props、事件、插槽、导入方式或列配置来自哪个当前栈 API 目录。
- 再给示例：优先最小可用写法，再按需补 1 个最接近需求的变体。
- 最后说边界：哪些点来自类型源或仍需按当前项目代码确认。

## 示例读取约束

- Web / Mobile React 优先读 `base.tsx`，再按需读 1 个关键变体。
- Vue / Mobile Vue 优先读 `base.vue`，再按需读 1 个关键变体。
- Miniprogram / UniApp 优先读 `base/` 或组件目录下的最小示例文件，再按需补充 JSON / TS / WXML 对应文件。
- 不连续读取同组件的大量示例；只保留“最小可用 + 最接近需求”两份证据。

## Few-shot 回答示例

- 用户问：“React 里 `Table` 怎么用？”
  回答结构：先说“按 `tdesign-react` 回答”，再列 `Table` 的关键 props 或 `columns`，最后给最小 JSX 示例。

- 用户问：“Vue 3 的 `Dialog` 给个示例。”
  回答结构：先说“按 `tdesign-vue-next` 回答”，再列 `visible`、事件、插槽或插件式入口，最后给最小 `.vue` 示例。

- 用户问：“小程序 `Tabs` 的 `change` 怎么写？”
  回答结构：先说“按 `tdesign-miniprogram` 回答”，再列 WXML 属性和 `bind` 事件，最后给最小 WXML/JS 示例。

## 与其他目录的边界

- 技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写、怎么用、示例怎么落地”。
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
