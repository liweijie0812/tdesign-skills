# TDesign API 文档索引

本文档由 `../../../../scripts/sync-api-docs.mjs` 生成，组件范围来自 `tdesign-common/js/components.ts`。

每个技术栈 skill 的 `references/api/<component>/index.md` 是 API Markdown；若上游存在 `type.ts` 或 `props.ts`，会同步到同一技术栈目录作为精确类型源。公共类型定义同步到 `references/api/common.ts` 或 `references/api/common/common.ts`。

## Web 技术栈

- [TDesign React](../../../tdesign-react/references/api/index.md)
- [TDesign Vue Next](../../../tdesign-vue-next/references/api/index.md)
- [TDesign Vue 2](../../../tdesign-vue2/references/api/index.md)

## 移动端与小程序

- [TDesign Mobile React](../../../tdesign-mobile-react/references/api/index.md)
- [TDesign Mobile Vue](../../../tdesign-mobile-vue/references/api/index.md)
- [TDesign Miniprogram](../../../tdesign-miniprogram/references/api/index.md)

## 同步结果

- react: 72 个成功，0 个未同步
- vue-next: 72 个成功，0 个未同步
- vue2: 72 个成功，0 个未同步
- mobile-react: 66 个成功，0 个未同步
- mobile-vue: 66 个成功，0 个未同步
- miniprogram: 65 个成功，1 个未同步
- uniapp: 65 个成功，1 个未同步

## 使用约束

- React 项目只查阅 `skills/tdesign-react/references/api/` 下的 API 文档。
- Vue 3 / Vue Next 项目只查阅 `skills/tdesign-vue-next/references/api/` 下的 API 文档。
- Vue 2 项目只查阅 `skills/tdesign-vue2/references/api/` 下的 API 文档。
- 移动端 React 项目只查阅 `skills/tdesign-mobile-react/references/api/` 下的 API 文档。
- 移动端 Vue 项目只查阅 `skills/tdesign-mobile-vue/references/api/` 下的 API 文档。
- 小程序项目只查阅 `skills/tdesign-miniprogram/references/api/` 下的 API 文档。
- 不同技术栈、移动端和小程序的 props、事件、插槽、组件命名和引入方式不能混用。
- API 表描述不够精确时，优先读取同技术栈目录下对应组件或子组件的 `type.ts` / `props.ts` / `common.ts`，不要依赖用户项目 `node_modules` 推断 TDesign 官方 API。
- 不根据其他组件库习惯或历史记忆臆造子组件名；尤其 `Table` 等复杂组件，先查当前栈 API 是否通过 `columns`、类型或配置项暴露能力，再决定是否存在独立子组件。
