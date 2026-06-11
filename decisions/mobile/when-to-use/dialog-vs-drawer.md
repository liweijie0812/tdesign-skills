# Mobile / Miniprogram Dialog vs Drawer

按中断强度、内容体量和触控成本选择。适用于 `tdesign-mobile-react`、`tdesign-mobile-vue` 和 `tdesign-miniprogram`。

## 选择 Dialog

- 用户必须先完成确认、告警、短表单或关键决策，才能继续当前流程。
- 内容短，主要是危险确认、结果提示、少量输入或必要信息补充。
- 操作有风险或不可逆，需要明确文案说明后果。

## 选择 Drawer

- 需要保留页面上下文，同时展示辅助信息、筛选、配置或中等体量内容。
- 内容比 `Dialog` 更长，但仍适合在当前页面边缘展开处理。
- 用户可以暂时查看或调整，不需要强制阻断主流程。

## 相关组件

- 操作集合优先 `ActionSheet`。
- 底部或自定义浮层优先确认 `Popup` 是否更合适。
- 简单轻反馈优先 `Toast` / `Message`，不要默认用 `Dialog`。

## 不要这样用

- 不要把长表单、大表格或复杂配置塞进 `Dialog`。
- 不要用 `Drawer` 承担高风险确认。
- 不要把 Web 的 `Popconfirm` 取舍默认套到 Mobile / Miniprogram。
