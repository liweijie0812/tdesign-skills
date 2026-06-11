# TDesign 反模式入口

这些规则用于避免 AI 在已安装 TDesign 的项目中重复造轮子、混用技术栈或编造 API。先确认平台，再读取对应端反模式。

## 查阅顺序

1. Web 查 `decisions/web/anti-patterns.md`。
2. Mobile / Miniprogram 查 `decisions/mobile/anti-patterns.md`。
3. 跨端 API、子组件和插槽差异查 `api/_shared/`。
4. 当前栈真实 API 查 `api/<stack>/<component>/index.md`。

## 通用禁止项

- 不编造 TDesign 组件名、props、事件、插槽、函数式 API 或组合能力。
- 不把其他组件库或原生 HTML 的 API 当成 TDesign API。
- 不把项目私有封装说成 TDesign 官方组件。
- 不为了视觉相似选择错误组件，必须按任务、数据结构和交互成本判断。
- 不在 TDesign 已提供组件的情况下手写等价实现。

## 识别信号

- 出现“顺手写一个弹窗 / 选择器 / 表格”但未确认当前栈是否有对应组件时，先停下来查 `meta/stack-matrix.json` 和 `api/`。
- 出现 `onChange(value, option)`、`visible`、`overlay`、`slots.default` 这类跨库习惯写法时，不默认认为 TDesign 支持。
- 看到需求里包含“像 Antd 那样”“参考 Element 的写法”时，只能借鉴任务语义，不能复用 API 名称。
- 当用户只描述视觉样式，没有说明任务目标时，先补齐“选择值 / 承载操作 / 展示信息 / 页面导航 / 反馈确认”中的真实任务类型。

## 最小核对清单

- 先确认平台：Web 还是 Mobile 系。
- 再确认技术栈：React、Vue Next、Vue 2、Mobile React、Mobile Vue、小程序。
- 再确认组件是否真实存在于当前栈。
- 最后才写 props、事件、插槽和组合方式。

## 推荐回答方式

- 如果当前栈没有该组件，直接说明“当前 TDesign 栈无官方组件”，并跳转 `decisions/fallback-policy.md`。
- 如果存在多个候选组件，先引用 `decisions/similar-components.md`，再按平台查 `decisions/web/when-to-use/` 或 `decisions/mobile/when-to-use/` 做取舍，然后给实现。
- 如果需求跨平台，分别给 Web 与 Mobile 系方案，不合并成一套伪通用答案。
