# TDesign 平台设计口径

设计选型先按平台口径判断，再按当前技术栈确认 API 和写法。

## Web

- 适用于 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`。
- 设计依据使用 TDesign Web 设计指南：`tdesign-common/docs/web/design`。
- 组件选型优先查 `decisions/web/component-usage-map.md`、`decisions/web/similar-components.md` 和 `decisions/web/when-to-use/`。
- 典型场景是管理后台、控制台、数据密集表格、复杂表单、桌面端导航和多列布局。

## Mobile 系

- 适用于 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`。
- 设计依据统一使用 TDesign Mobile 设计指南：`tdesign-common/docs/mobile/design`。
- 小程序不单独维护设计指南；组件选型与交互口径复用 Mobile，具体 API 和平台能力查 `api/miniprogram/`。
- 组件选型优先查 `decisions/mobile/component-usage-map.md`、`decisions/mobile/similar-components.md` 和 `decisions/mobile/when-to-use/`，再查通用 `decisions/`。
- 典型场景是触控操作、单列信息流、底部或顶部固定操作、移动端反馈、移动端导航和微信小程序页面。

## 取舍规则

- 同名组件不能默认复用同一条设计规则；先确认当前平台是 Web 还是 Mobile 系。
- Web 与 Mobile 系规则冲突时，以当前平台对应设计指南为准。
- API、props、事件、插槽、导入方式和模板写法不按设计指南推断，必须查当前栈的 `api/` 文档。
- 当 Mobile 系没有单独条目时，可以参考 Web 的通用任务语义，但必须去掉桌面端专属假设，例如 hover、宽表格、侧边栏常驻和键盘快捷操作。
