# TDesign 反模式入口

这些规则用于避免 AI 在已安装 TDesign 的项目中重复造轮子、混用技术栈或编造 API。先确认平台，再读取对应端反模式。

## 查阅顺序

1. Web 查 `decisions/web/anti-patterns.md`。
2. Mobile / Miniprogram 查 `decisions/mobile/anti-patterns.md`。
3. 跨端 API、子组件和插槽差异查 `api/_shared/`。
4. 当前栈真实 API 查 `api/<stack>/<component>/index.md`。

## 通用禁止项

- 不编造 TDesign 组件名、props、事件、插槽、函数式 API 或组合能力。
- 不把 Ant Design、Element Plus、Naive UI、原生 HTML 的 API 当成 TDesign API。
- 不把项目私有封装说成 TDesign 官方组件。
- 不为了视觉相似选择错误组件，必须按任务、数据结构和交互成本判断。
- 不在 TDesign 已提供组件的情况下手写等价实现。
