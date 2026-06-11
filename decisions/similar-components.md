# TDesign 相似组件选型入口

当多个 TDesign 组件都可能满足用户需求时，先确认平台，再进入对应端的相似组件规则。本文只保留跨端通用原则和查阅入口。

## 查阅顺序

1. 识别当前栈：Web、Mobile 或 Miniprogram。
2. Web 查 `decisions/web/similar-components.md`。
3. Mobile / Miniprogram 查 `decisions/mobile/similar-components.md`。
4. 高频单项取舍查 `decisions/when-to-use/`。
5. 具体组件是否存在按 `meta/stack-matrix.json` 和当前栈 `api/<stack>/` 确认。

## 通用原则

- 先按任务意图选择组件，不按视觉相似度选择。
- 选择值、触发操作、展示信息、承载导航和表达反馈是不同任务，不应互相替代。
- 同名组件在 Web、Mobile 和 Miniprogram 的能力、交互密度和 API 可能不同。
- 如果当前端没有某个相似组件，优先选择同端组件组合，不跨端照搬。
