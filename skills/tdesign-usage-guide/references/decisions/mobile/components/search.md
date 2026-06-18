# Mobile Search 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Search` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 当搜索是页面或列表的主要任务时使用。
- 适合商品、联系人、城市、记录、帮助内容等关键词检索。
- 只是在表单中输入一个普通字段时，不要用 `Search` 替代 `Input`。

## 选型要点

- Search 应服务检索任务，通常与列表、结果页、历史搜索、联想词或筛选条件联动。
- 搜索入口位于页面顶部时，要考虑滚动、吸顶、取消按钮和键盘弹出后的触控路径。
- 搜索结果为空时使用 `Empty` 说明无匹配；加载中使用 `Loading` 或列表骨架。
- 普通表单字段、编号输入或一次性关键词参数优先使用 `Input`。

## 反模式

- 不要只因为输入框带放大镜图标就使用 `Search`。
- 不要把复杂筛选表单塞进 Search，筛选排序优先 `DropdownMenu` 或页面筛选区。
- 不要忽略清空、取消、历史记录和无结果状态。
- 不要把 Web 搜索框布局和键盘行为直接套用到移动端或小程序。
