# TDesign 组件搭配索引

当用户要求生成页面、改造 UI 或询问“组件怎么搭配”时，先按当前项目安装的 TDesign 包确认技术栈，再按任务类型选择组件组合。本文只给组合方向，具体 props、事件、插槽和导入方式必须查当前栈 `api/<stack>/<component>/index.md`。

## 通用使用顺序

1. 识别平台和技术栈：Web、Mobile、Miniprogram；React、Vue Next、Vue 2、Mobile React、Mobile Vue、小程序。
2. 查 `meta/stack-matrix.json` 确认当前栈是否提供目标组件。
3. 查对应组件使用图谱确认何时使用：Web 查 `decisions/web/component-usage-map.md`，Mobile / Miniprogram 查 `decisions/mobile/component-usage-map.md`。
4. 按本文选择组件组合，再进入 `scenarios/` 查页面级细节。
5. 实现前只读取当前栈当前组件的 API，不跨栈照搬写法。

## Web 页面组合

### 应用壳 / 控制台框架

- 基础组合：`Layout`、`Header`、`Aside`、`Content`、`Footer`、`Menu`、`Breadcrumb`。
- 内容承载：`Card`、`Space`、`Grid`、`Row`、`Col`。
- 辅助导航：`Tabs` 用于平级内容切换，`Steps` 用于流程进度，`BackTop` 用于长页返回顶部。
- 查阅：`scenarios/layout-shell.md`、`design/layout.md`、`design/offices.md`。

### 表单页 / 配置页

- 基础组合：`Form`、`FormItem`、`Input`、`Textarea`、`Select`、`DatePicker`、`Radio`、`Checkbox`、`Switch`、`Upload`、`Button`。
- 布局组织：`Card`、`Space`、`Divider`、`Tabs`、`Grid`、`Row`、`Col`。
- 反馈：字段错误用 `Form` 校验能力，提交结果用 `Message`，页面级问题用 `Alert`。
- 查阅：`scenarios/form-page.md`。

### 表格列表页 / 检索页

- 基础组合：筛选区用 `Form`、`Input`、`Select`、`DatePicker`、`Button`；数据区用 `Table`；分页用 `Pagination` 或 `Table` 内建分页。
- 行操作：高频操作用 `Button` / `Link`，低频操作收纳到 `Dropdown`，轻量确认用 `Popconfirm`，高风险确认用 `Dialog`。
- 状态：`Loading`、`Skeleton`、`Empty`、`Message`。
- 查阅：`scenarios/table-list-page.md`、`design/offices-task.md`。

### 详情页 / 只读信息

- 基础组合：`Descriptions` 展示字段和值，`Card` 分组，`Divider` 分隔，`Tag` 表达状态，`Timeline` 展示历史。
- 操作：页面主操作用 `Button`，跳转用 `Link`，上下文操作用 `Dropdown`。
- 反馈：局部提示用 `Alert`，操作后反馈用 `Message`。
- 避免：不要用禁用态 `Form` 伪装只读详情，除非页面需要在读写态之间切换。

### 弹窗确认 / 短表单

- 基础组合：`Dialog`、`Form`、`FormItem`、`Input`、`Select`、`Button`。
- 轻量确认：低到中等风险且内容短时优先 `Popconfirm`。
- 大体量任务：内容较长、需要保留页面上下文或侧边编辑时使用 `Drawer`。
- 查阅：`decisions/when-to-use/dialog-vs-drawer.md`、`api/_shared/dialog/contract.md`。

### 抽屉编辑 / 辅助详情

- 基础组合：`Drawer`、`Form` / `Descriptions`、`Tabs`、`Button`。
- 适用：需要更多空间，同时不希望用户离开当前列表或详情上下文。
- 避免：必须强中断决策或高风险确认时不要用 `Drawer` 替代 `Dialog`。

### 数据导入 / 文件上传

- 基础组合：`Upload`、`Button`、`Progress`、`Alert`、`Table`、`Dialog`。
- 流程：选择文件、上传进度、解析结果、错误明细、确认导入。
- 反馈：上传中用 `Progress` / `Loading`，结果用 `Message`，可修复错误用 `Table` 展示明细。
- 查阅：`design/offices-task.md`。

### 仪表盘 / 数据概览

- 基础组合：`Grid`、`Row`、`Col`、`Card`、`Statistic`、`Progress`、`Table`、`List`。
- 趋势或状态：用 `Tag`、`Badge`、`Tooltip` 辅助说明。
- 加载和空态：用 `Skeleton`、`Loading`、`Empty`。

## Mobile / Miniprogram 页面组合

### 页面导航和主入口

- 基础组合：`Navbar`、`TabBar`、`Tabs`、`SideBar`、`Indexes`。
- 页面结构：`Cell`、`CellGroup`、`Grid`、`Row`、`Col`。
- 避免：不要照搬 Web 的 `Header`、`Aside`、`Content`、`Footer` 应用壳语义。

### 移动端表单

- 基础组合：`Form`、`FormItem`、`Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Checkbox`、`Radio`、`Switch`、`Stepper`、`Upload`、`Button`。
- 布局：优先单列、分组、分步或拆页面，长表单可使用固定底部操作区。
- 反馈：使用当前栈支持的 `Toast` / `Message` / `Dialog`，不要照搬 Web `Notification`。
- 查阅：`scenarios/form-page.md`。

### 移动端列表 / 信息流

- 基础组合：`Cell`、`CellGroup`、`List`、`Tag`、`Badge`、`Empty`、`Skeleton`。
- 操作：滑动操作用 `SwipeCell`，筛选用 `Search`、`Picker`、`DropdownMenu` 或 `Popup`。
- 加载：使用接口分页、加载更多或 `PullDownRefresh`。
- 查阅：`scenarios/table-list-page.md`。

### 移动端反馈和浮层

- 轻反馈：`Toast` / `Message`。
- 强确认：`Dialog`。
- 底部或局部浮层：`Popup`、`ActionSheet`、`Drawer`。
- 遮罩和底层能力：仅在标准反馈组件不能满足时使用 `Overlay`。

## 反模式

- 不确认组件是否存在就直接使用，尤其是 Web only、Mobile only 和小程序缺失组件。
- 不查 API 就编造 props、事件、插槽、函数式调用或 external classes。
- 用原生 `div`、`input`、`table`、`window.confirm()` 重复实现 TDesign 已有能力。
- 把 Web 的多列宽表格、常驻侧栏、hover 交互照搬到 Mobile / Miniprogram。
- 为了视觉相似选择错误组件，组件选择必须以任务、数据结构和交互成本为准。
