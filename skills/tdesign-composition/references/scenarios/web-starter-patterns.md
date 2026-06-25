# Web Starter 页面模式与组件搭配提炼

基于 TDesign Web starter 中 `dashboard`、`detail`、`form`、`list`、`login`、`result`、`user` 七类页面模块整理。本文用于回答 Web starter 常见页面如何组织、常用组件如何搭配、哪些组合是高频模式。它只提供页面级模式和组合参考，不替代具体组件 API。

## 使用边界

- 适用于 Web starter 风格页面的场景映射、组件搭配和高频模式复用。
- 重点回答“这一类页面通常怎么拆模块、怎么组合 TDesign 组件”。
- 不替代单组件 API，也不保证 starter 中的自定义组件能直接在用户项目复用。
- 需要落地某个具体组件写法时，先用本文确定场景与组合，再回对应技术栈 skill 的 `references/api/<component>/index.md` 和 examples。
- 需要更细的页面结构规则时，再回 `dashboard-page.md`、`detail-page.md`、`form-page.md`、`table-list-page.md`、`login-page.md`、`error-page.md` 等正式场景卡。

## 场景总览

| 场景分类 | 页面模块 | 业务场景 |
| --- | --- | --- |
| 数据看板 | `dashboard/base`、`dashboard/detail` | 运营数据总览、采购监控、销售趋势、渠道分析 |
| 详情展示 | `detail/base`、`detail/advanced`、`detail/deploy`、`detail/secondary` | 合同详情、产品详情、部署详情、通知消息 |
| 表单录入 | `form/base`、`form/step` | 基础表单录入、分步流程录入 |
| 列表管理 | `list/base`、`list/card`、`list/tree`、`list/filter` | 表格列表、卡片列表、树形筛选列表、筛选列表 |
| 登录注册 | `login` | 账号密码登录、扫码登录、手机验证码登录、注册 |
| 结果反馈 | `result/success`、`result/fail`、`result/403`、`result/404`、`result/500`、`result/browser-incompatible`、`result/maintenance`、`result/network-error` | 操作结果、异常状态 |
| 个人中心 | `user` | 个人信息、团队、访问数据、产品服务 |

## 场景与搭配

### Dashboard

- 页面常拆成多个业务分区，例如指标卡、趋势图、排行表、概览区；每个分区外层都用 `Card` 承载。
- 高频组合：`Row` + `Col` 做响应式栅格，`Card` 的 `actions` 区放日期筛选、单选切换或导出按钮。
- 数据区常见组合：指标卡 + 图表 + 排行表，表格内部用状态列、趋势列和操作列增强信息密度。
- 图表容器通常需要窗口尺寸监听和主题联动，保证自适应与明暗模式切换。

### Detail

- 基础详情页常用 `Card` + `Descriptions` 展示结构化字段，另一块使用 `Steps` / `Timeline` 展示进度或变更轨迹。
- 高级详情页会在信息区之外增加业务明细区，常见组合是 `Table` + `Tag` + `Link` + `Space`，再用 `Dialog` 展开详情。
- 部署或监控型详情页通常采用 `Card` + 图表 + 列表的混合布局。
- 通知或消息详情倾向于 `Tabs` + `List` + 操作图标 / 提示 / 删除确认。

### Form

- 基础录入页通常用 `Form` + `Row` + `Col` + `FormItem` 组成栅格表单。
- 字段组合高频为 `Input`、`Select`、`RadioGroup`、`DatePicker`、`Textarea`、`Upload`。
- 上传场景常与上传前校验、响应格式转换和结果反馈联动。
- 分步录入页通常顶部放 `Steps`，内容区按步骤切换多个 `Form`。

### List

- 标准表格列表页常见结构：顶部工具栏 + 搜索筛选区 + `Table` + 分页。
- 工具栏组合：主按钮、次按钮、搜索框；筛选复杂时再补 `Form` 筛选区。
- 表格高频能力：多选、排序、分页、吸顶表头、状态标签、操作列、删除确认。
- 卡片列表页常见结构：顶部工具栏 + 卡片网格 + 分页。
- 树筛选列表常见结构：左侧 `Tree` / 搜索筛选，右侧通用表格。

### Login

- 登录页以 `Form` 为核心，字段通过 `Input` 的前后缀图标增强语义。
- 常见形态包括密码登录、验证码登录、扫码登录和注册表单，共享页面框架，只切换表单主体。
- 验证码输入常见组合：`FormItem` + `Input` + 倒计时按钮。
- 页面外围通常还会搭配品牌头部、设置入口和登录后回跳逻辑。

### Result

- 结果页结构较稳定：状态图形 + 标题 + 提示 + 操作按钮。
- 成功、失败、异常、无权限、维护中等状态适合统一封装成结果页组件，再通过插槽挂操作区。

### User

- 个人中心常用 `Row` + `Col` 做主次栏布局，例如 3:1 双栏。
- 主区常见组合：`Card` + `Tabs` + 日期筛选 + 图表。
- 侧栏常见组合：`Card` + 头像 + `Descriptions` + `List` / 产品服务入口。

## 通用搭配模式

| 模式 | 涉及组件 | 典型场景 |
| --- | --- | --- |
| 卡片 + 操作区 | `Card` + `actions` + 日期筛选 / 单选切换 / 按钮 | 图表卡片筛选 |
| 卡片 + 表格 | `Card` + `Table` + `Tag` + `Link` + `Space` | 列表和明细表 |
| 卡片 + 图表 | `Card` + 图表容器 + 尺寸监听 | 仪表盘、监控、趋势分析 |
| 表格 + 弹窗详情 | `Table` + `Dialog` + `Descriptions` | 查看详情 |
| 表格 + 删除确认 | 危险操作链接 / 按钮 + `Dialog` / `Popconfirm` + 反馈 | 删除操作 |
| 表单 + 栅格 | `Form` + `Row` + `Col` + `FormItem` | 录入表单 |
| 步骤条 + 分段表单 | `Steps` + 多个 `Form` | 分步流程 |
| 树筛选 + 表格 | 搜索输入 + `Tree` + 通用表格 | 左筛右表 |
| 卡片网格 + 分页 | `Row` + `Col` + 卡片组件 + `Pagination` | 卡片列表 |

## 自定义组件类型

- 趋势指示器：用于涨跌、环比或同比展示。
- 产品卡片：用于卡片列表和服务产品区。
- 通用结果页：统一异常状态和成功状态输出。
- 通用表格：封装筛选、分页、操作列和 CRUD 行为。
- 页面分区组件：如 dashboard 中的指标区、图表区、排行区、概览区。

## 高频组件

- 最高频：`Card`、`Button`、`Icon`。
- 高频布局：`Row`、`Col`。
- 高频数据组件：`Table`、`Tag`、`Link`、`Dialog`。
- 中频交互：`Form`、`Input`、`Select`、`DateRangePicker`、`Steps`、`Tabs`、`List`、`Upload`、`Descriptions`。

## 如何使用本文

- 用户问“Web starter 的列表页通常怎么搭”时，先用本文定位 `List` 场景，再回 `table-list-page.md` 做页面结构细化。
- 用户问“starter 里的 `Table` 常和哪些组件一起出现”时，优先引用本文的通用搭配模式，再回当前技术栈 `table` API 给真实写法。
- 用户问“Web starter 的登录页常见 TDesign 组合”时，优先引用 `Login` 小节，再回 `form`、`input`、`button` API 落地。
