# Dialog vs Drawer

按任务中断强度和内容体量选择，不按视觉偏好选择。先按平台读取端规则。

## 查阅入口

- Web：查 `decisions/web/when-to-use/dialog-vs-drawer.md`。
- Mobile / Miniprogram：查 `decisions/mobile/when-to-use/dialog-vs-drawer.md`。

## 通用原则

- 必须强中断、危险确认、告警或短表单时使用 `Dialog`。
- 需要更多空间且保留页面上下文时使用 `Drawer`。
- 完全自定义浮层且标准组件无法满足时才考虑 `Popup`。
- Dialog 通用语义见 `api/_shared/dialog/contract.md`，端差异按 `api/_shared/dialog/` 确认。
