# TDesign 相似组件选型入口

当多个 TDesign 组件都可能满足用户需求时，先确认平台，再进入对应端的相似组件规则。本文只保留跨端通用原则和查阅入口。

## 查阅顺序

1. 识别当前栈：Web、Mobile 或 Miniprogram。
2. Web 查 `web/similar-components.md`。
3. Mobile / Miniprogram 查 `mobile/similar-components.md`。
4. 高频单项取舍按平台查 `web/components/<component>.md` 或 `mobile/components/<component>.md`。
5. 具体组件是否存在按 `skills/tdesign-docs/references/meta/stack-matrix.json` 和当前技术栈 skill 的 `references/api/` 确认。

## 通用原则

- 先按任务意图选择组件，不按视觉相似度选择。
- 选择值、触发操作、展示信息、承载导航和表达反馈是不同任务，不应互相替代。
- 同名组件在 Web、Mobile 和 Miniprogram 的能力、交互密度和 API 可能不同。
- 如果当前端没有某个相似组件，优先选择同端组件组合，不跨端照搬。

## 快速判定问题

- 用户是在“选一个值”，还是“执行一个动作”。
- 用户需要“看到全部结构”，还是“只完成一次快速选择”。
- 用户需要“短暂确认”，还是“承载较长内容与连续操作”。
- 当前页面是“桌面高密度场景”，还是“移动端单列触控场景”。

## 常见误判

- 把 `Dropdown`、`ActionSheet` 这类操作菜单误当成值选择组件。
- 把 `Dialog`、`Drawer`、`Popup` 只按出现位置区分，而忽略中断强度和内容体量。
- 把 `Tabs`、`Menu`、`TabBar` 都当成“切换组件”，忽略它们服务的导航层级不同。
- 把 `Table`、`List`、`Cell` 只按视觉列表理解，而不看信息密度和交互负担。

## 建议输出结构

- 先给结论：当前任务更适合哪个组件。
- 再给判断依据：任务类型、数据结构、交互成本、平台约束。
- 最后补一个备选方案：什么条件下换成另一个组件。
