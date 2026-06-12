# TDesign Mobile 与小程序组件搭配索引

适用于 `tdesign-mobile-react`、`tdesign-mobile-vue` 和 `tdesign-miniprogram`。本文只给 Mobile / Miniprogram 组合方向，具体 props、事件、插槽、external classes 和平台能力必须查当前技术栈 skill 的 `references/api/<component>/index.md`。

## 页面导航和主入口

- 基础组合：`Navbar`、`TabBar`、`Tabs`、`SideBar`、`Indexes`。
- 页面结构：`Cell`、`CellGroup`、`Grid`、`Row`、`Col`。
- 避免：不要照搬 Web 的 `Header`、`Aside`、`Content`、`Footer` 应用壳语义。

## 移动端表单

- 基础组合：`Form`、`FormItem`、`Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Checkbox`、`Radio`、`Switch`、`Stepper`、`Upload`、`Button`。
- 布局：优先单列、分组、分步或拆页面，长表单可使用固定底部操作区。
- 反馈：使用当前栈支持的 `Toast` / `Message` / `Dialog`，不要照搬 Web `Notification`。
- 查阅：`skills/tdesign-composition/references/scenarios/form-page.md`。

## 移动端列表 / 信息流

- 基础组合：`Cell`、`CellGroup`、`List`、`Tag`、`Badge`、`Empty`、`Skeleton`。
- 操作：滑动操作用 `SwipeCell`，筛选用 `Search`、`Picker`、`DropdownMenu` 或 `Popup`。
- 加载：使用接口分页、加载更多或 `PullDownRefresh`。
- 查阅：`skills/tdesign-composition/references/scenarios/table-list-page.md`。

## 筛选和选择

- 简单搜索：`Search` 或 `Input`，按当前栈 API 确认。
- 单列或多列选择：`Picker`。
- 层级路径选择：`Cascader`。
- 页面内分类切换：`Tabs`、`SideBar`、`Indexes`。
- 复杂筛选面板：`Popup` / `Drawer` 承载筛选 `Form`。

## 反馈和浮层

- 轻反馈：`Toast` / `Message`。
- 强确认：`Dialog`。
- 操作集合：`ActionSheet`。
- 底部或局部浮层：`Popup`、`Drawer`。
- 遮罩和底层能力：仅在标准反馈组件不能满足时使用 `Overlay`。

## 上传和结果页

- 上传：`Upload`、`Progress`、`Loading`、`Toast` / `Message`。
- 成功、失败或异常结果：`Result`、`Button`、`Link`。
- 空数据：`Empty`，应搭配恢复动作或下一步建议。
- 小程序上传能力受微信平台 API 约束，必须查 `skills/tdesign-miniprogram/references/api/upload/index.md`。

## 小程序注意

- 小程序写法使用 WXML/JS、短横线属性、`bind` 事件和 `usingComponents`。
- 小程序若缺少某个组件，例如 `List`，优先使用 `Cell` / `CellGroup` 或项目已有封装。
- 不把 Mobile React / Mobile Vue 的事件、插槽和函数式调用套到小程序。

## Mobile / Miniprogram 反模式

- 不照搬 Web 多列宽表格、常驻侧栏、hover 交互和桌面快捷操作。
- 不把所有轻反馈都做成 `Dialog`，短反馈优先 `Toast` / `Message`。
- 不在小屏幕强行塞复杂多字段弹窗，长任务优先拆页面、分组或分步。
