# Select vs Cascader

按选项数据结构和用户选择路径判断。先按平台读取端规则。

## 查阅入口

- Web：查 `decisions/web/when-to-use/select-vs-cascader.md`。
- Mobile / Miniprogram：查 `decisions/mobile/when-to-use/picker-vs-cascader.md`。

## 通用原则

- 扁平候选值使用单层选择组件。
- 层级路径选择使用 `Cascader`。
- 操作收纳不要伪装成值选择。
- Mobile / Miniprogram 不应照搬 Web `Select` 交互和 API。
