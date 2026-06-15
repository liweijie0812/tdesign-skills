# TDesign 平台设计口径

设计选型先按平台口径判断，再按当前技术栈确认 API 和写法。

## Web

- 适用于 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`。
- 设计依据使用 TDesign Web 设计指南：`tdesign-common/docs/web/design`。
- 组件选型优先查 `web/component-usage-map.md`、`web/similar-components.md` 和 `web/components/`。
- 典型场景是管理后台、控制台、数据密集表格、复杂表单、桌面端导航和多列布局。

## Mobile 系

- 适用于 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`、`tdesign-uniapp`。
- 设计依据统一使用 TDesign Mobile 设计指南：`tdesign-common/docs/mobile/design`。
- 小程序和 UniApp 不单独维护设计指南；组件选型与交互口径复用 Mobile，具体 API 和平台能力分别查 `tdesign-miniprogram/references/api/` 和 `tdesign-uniapp/references/api/`。
- 组件选型优先查 `mobile/component-usage-map.md`、`mobile/similar-components.md` 和 `mobile/components/`，再查通用决策文档。
- 典型场景是触控操作、单列信息流、底部或顶部固定操作、移动端反馈、移动端导航、微信小程序页面和 UniApp 页面。

## 取舍规则

- 同名组件不能默认复用同一条设计规则；先确认当前平台是 Web 还是 Mobile 系。
- Web 与 Mobile 系规则冲突时，以当前平台对应设计指南为准。
- API、props、事件、插槽、导入方式和模板写法不按设计指南推断，必须查当前技术栈 skill 的 `references/api/` 文档。
- 当 Mobile 系没有单独条目时，可以参考 Web 的通用任务语义，但必须去掉桌面端专属假设，例如 hover、宽表格、侧边栏常驻和键盘快捷操作。
- 组件取舍按平台 `similar-components.md` 和 `components/` 理解；同一任务在 Web 与 Mobile 系可能对应不同组件，例如 Web 常用 `Select`，Mobile 系常用 `Picker`。

## 平台判定捷径

- 出现后台、控制台、审批台、数据报表、复杂筛选，一般优先按 Web 口径思考。
- 出现单手操作、吸底提交、底部弹层、宫格入口、微信页面限制，一般优先按 Mobile 系口径思考。
- 出现“小程序”或 “UniApp” 字样时，设计规则仍走 Mobile，但实现必须额外检查对应平台能力和 `tdesign-miniprogram/references/api/` 或 `tdesign-uniapp/references/api/`。

## 跨平台回答规则

- 用户未说明平台但需求明显受平台影响时，先追问；若要直接回答，必须拆成 Web 与 Mobile 系两套建议。
- 不把桌面端高信息密度布局直接压缩成移动端页面；移动端优先减少并列关系、缩短决策路径。
- 不把移动端弹层、吸底按钮、手势操作直接迁回 Web；Web 先考虑鼠标键盘效率、信息并列和页面稳定性。

## 设计与实现分层

- `tdesign-usage-guide/references/decisions/` 负责回答“该选什么组件、为什么”。
- 各技术栈 skill 的 `references/api/` 负责回答“当前栈有没有、怎么写”。
- `tdesign-composition/references/scenarios/` 负责回答“某类页面通常怎么组织”。
