# Mobile / Miniprogram Picker vs Cascader

按选项层级、触控成本和页面任务选择。适用于 `tdesign-mobile-react`、`tdesign-mobile-vue` 和 `tdesign-miniprogram`。

## 选择 Picker

- 用户从单列或多列有限选项中选择值。
- 选项之间没有逐级依赖，或多列只是并列值组合。
- 需要触控友好的滚轮或面板选择，例如性别、状态、时间段、简单分类。

## 选择 Cascader

- 选项是层级数据，并且下一级依赖上一级。
- 用户需要选择一条路径，例如地区、组织、分类或权限路径。
- 选择过程需要逐级收窄范围。

## 相关取舍

- 搜索是主要任务时优先 `Search`。
- 页面内分类导航使用 `Tabs` / `SideBar`，不要用选择器假装导航。
- 长列表索引定位使用 `Indexes`。
- 紧凑树形选择若当前栈支持，可考虑 `TreeSelect`。

## 不要这样用

- 不要把无层级关系的普通枚举做成 `Cascader`。
- 不要用 `Picker` 承担复杂筛选面板，复杂筛选可放入 `Popup` / `Drawer`。
- 不要照搬 Web `Select` 的交互和 API。
