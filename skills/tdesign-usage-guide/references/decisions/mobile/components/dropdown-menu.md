# Mobile DropdownMenu 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `DropdownMenu` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于移动端顶部或列表区域的筛选、排序和条件切换。
- 适合选项较少、与当前列表强相关的筛选项。
- 复杂多字段筛选应使用 `Popup` / `Drawer` 承载表单，不要把所有条件塞进下拉菜单。
- `DropdownItem` / `dropdown-item` 是 `DropdownMenu` 中的单个筛选或排序项，不作为独立页面选型入口。

## 选型要点

- 条件应与当前列表强相关，例如分类、排序、区域、状态、价格范围入口。
- 每个下拉项应保持轻量，用户能在一屏内快速完成选择。
- 多字段复杂筛选、需要输入或组合条件时，使用 `Popup` / `Drawer` 承载筛选表单。
- 与列表滚动结合时要考虑吸顶、遮罩、滚动穿透和结果刷新。

## 反模式

- 不要用 `DropdownMenu` 承担应用导航或操作菜单。
- 不要把复杂表单、长列表或多级树塞进下拉菜单。
- 不要把普通值选择和列表筛选混在一起，表单值选择优先 `Picker` / `Cascader`。
- 不要直接套用 Web Dropdown 的 hover、密度和触发习惯。
