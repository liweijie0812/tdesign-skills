# TDesign 选型规则总入口

`tdesign-usage-guide/references/decisions/` 用来回答“该选什么组件、为什么”，不负责展开具体 API 写法。

## 适用问题

- 当前场景应该使用哪个 TDesign 组件。
- 某个组件什么时候使用、什么时候不该使用。
- 多个相似组件如何取舍。
- 从原生 HTML、其他组件库或设计稿迁移到 TDesign 时如何映射语义。
- 评审代码中的组件选型、跨端套用、重复造轮子和降级策略。

## 判断流程

1. 先判平台：Web、Mobile、Miniprogram 或 UniApp，不明确时先说明假设。
2. 再判任务：操作、导航、数据录入、数据展示、反馈、布局、系统配置或手势滚动。
3. 再判交互：值选择还是执行业务动作、短提示还是强确认、页面导航还是区域切换、结构化数据还是条目流。
4. 再判约束：信息密度、触控成本、是否需要保留上下文、是否需要持续可见、当前技术栈是否真的支持。
5. 最后给结论：推荐组件、判断依据、替代条件和不可做事项。

## 查阅顺序

1. 先看 `platform-design-policy.md`，确认当前问题属于 Web 还是 Mobile / Miniprogram。
2. 组件何时使用：先查 `web/component-usage-map.md` 或 `mobile/component-usage-map.md`；需要展开单组件细则时，再查 `web/components/<component>.md` 或 `mobile/components/<component>.md`。
3. 相似组件怎么选：先看 `similar-components.md`，再按平台查 `web/similar-components.md` 或 `mobile/similar-components.md`。
4. 高频单项取舍：按平台查 `web/similar-components.md` / `mobile/similar-components.md`，再查对应 `components/<component>.md`。
5. 页面怎么搭：先看 `component-composition-map.md`，再查 `web/component-composition-map.md` 或 `mobile/component-composition-map.md`。
6. 什么不能做：先看 `anti-patterns.md`，再查 `web/anti-patterns.md` 或 `mobile/anti-patterns.md`。
7. 当前栈缺组件或能力不够：查 `fallback-policy.md`。

## 输出要求

- 先给明确结论，不把所有可能组件并列给用户自行判断。
- 每个结论至少说明一个任务依据和一个平台依据。
- 涉及相似组件时，说明切换条件，例如内容体量、打断强度、数据结构或交互成本变化。
- 涉及代码落地时，只给选型口径；具体 props、事件、插槽、类型和导入路径必须回到当前技术栈 skill。

## 与其他目录的边界

- `tdesign-usage-guide/references/decisions/`：回答“该选什么、为什么”。其中 `web/component-usage-map.md` 和 `mobile/component-usage-map.md` 是按平台拆分的轻量索引，`web/components/` 和 `mobile/components/` 是按组件拆分的详细规则。
- 各技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写”。
- `tdesign-composition/references/scenarios/`：回答“某类页面通常怎么组织”。

## 使用原则

- 所有规则先按平台理解，再按当前技术栈确认是否真实可用。
- 不跨端复用组件结论，不从设计规则反推 API。
- 为节省上下文，优先读平台轻量索引：`web/component-usage-map.md` 或 `mobile/component-usage-map.md`，只有需要更细规则时才读平台 `components/` 下单组件文档。
- 组件级细则统一放在平台 `components/` 下，单项取舍也并入对应组件文档。
