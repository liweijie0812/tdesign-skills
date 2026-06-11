# TDesign 组件搭配索引

当用户要求生成页面、改造 UI 或询问“组件怎么搭配”时，先识别当前项目安装的 TDesign 包，再进入对应端的组件搭配规则。本文只做入口索引，不承载端内细节。

## 查阅顺序

1. 识别平台和技术栈：Web、Mobile、Miniprogram；React、Vue Next、Vue 2、Mobile React、Mobile Vue、小程序。
2. 查 `meta/stack-matrix.json` 确认当前栈是否提供目标组件。
3. Web 组件搭配查 `decisions/web/component-composition-map.md`。
4. Mobile / Miniprogram 组件搭配查 `decisions/mobile/component-composition-map.md`。
5. 页面级细节再查 `scenarios/`。
6. 实现前只读取当前栈当前组件的 API，不跨栈照搬写法。

## 通用原则

- 组件搭配先按平台选择，不把 Web 桌面布局套到 Mobile / Miniprogram。
- 组合方案只表达任务结构，具体 props、事件、插槽和导入方式必须查当前栈 `api/<stack>/<component>/index.md`。
- 如果当前端缺少某个组件，按 `decisions/fallback-policy.md` 降级，并说明不是 TDesign 官方能力。
