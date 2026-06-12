# TDesign 共享语义索引

`tdesign-docs/references/api/shared/` 只放跨栈语义、端差异入口和组合使用建议，不作为 props、事件、插槽或类型的权威来源。实现时必须回到当前技术栈 skill 的 `references/api/<component>/index.md` 和同目录 `type.ts` / `props.ts` / `common.ts` 确认。

## 使用规则

- 先用 `_shared` 判断任务语义、端差异和组合边界，再回到当前栈 API 写代码。
- Web、移动端和小程序只能复用设计意图，不能复用 props、事件、插槽、样式入口或函数式调用签名。
- 同名组件在不同端可能有不同默认值、关闭链路、层级、slots 和 external classes。
- API 表描述不够精确时，读取对应组件或子组件目录下的 `type.ts` / `props.ts` 和公共 `common.ts`。

## Dialog

- [通用契约](./dialog/contract.md)：跨 Web、移动端和小程序都成立的 Dialog 任务语义。
- [Web 差异](./dialog/web.md)：React、Vue Next、Vue 2 的 Dialog API 查阅入口和写法边界。
- [移动端差异](./dialog/mobile.md)：Mobile React、Mobile Vue 的 Dialog API 查阅入口和写法边界。
- [小程序差异](./dialog/miniprogram.md)：小程序 Dialog 属性、事件、插槽和 external classes 边界。

## 子组件与组合项

- [Web 子组件](./sub-components/web.md)：Web React / Vue 子组件、插槽型组件和组合配置项使用语义。
- [移动端子组件](./sub-components/mobile.md)：Mobile React / Mobile Vue 子组件和组合配置项使用语义。
- [小程序子组件](./sub-components/miniprogram.md)：小程序子组件、插槽和 external classes 使用语义。

## 不在这里维护的内容

- 不维护完整 props、事件、插槽、CSS Variables 或类型定义。
- 不维护导入语句、组件注册方式或小程序 JSON 配置。
- 不替代 `tdesign-usage-guide/references/decisions/` 的组件选型规则，也不替代 `tdesign-composition/references/scenarios/` 的页面级组合方案。
