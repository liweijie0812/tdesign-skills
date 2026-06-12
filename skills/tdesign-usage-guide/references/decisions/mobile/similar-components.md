# TDesign Mobile 与小程序相似组件选型

适用于 `tdesign-mobile-react`、`tdesign-mobile-vue` 和 `tdesign-miniprogram`。具体 props、事件、插槽和小程序 external classes 必须查当前技术栈 skill 的 `references/api/<component>/index.md`。

## Button、Link、Fab

- `Button`：用于当前流程的提交、确认、删除、保存或启动业务动作。
- `Link`：用于跳转、协议、页脚链接或轻量文本入口。
- `Fab`：用于全局高频或强引导的悬浮操作入口。

判断规则：触发业务动作优先 `Button`；跳转优先 `Link`；需要浮在内容上保持可达时才用 `Fab`。

## Navbar、TabBar、Tabs、SideBar、Indexes

- `Navbar`：页面顶部导航，承载标题、返回、关闭或少量页面级操作。
- `TabBar`：应用主功能模块的底部切换。
- `Tabs`：同一页面或模块内按分类维度切换。
- `SideBar`：移动端左右分栏分类导航。
- `Indexes`：按字母、城市、联系人等索引定位长列表。

判断规则：按导航层级选择。全局主模块用 `TabBar`；页面标题和返回用 `Navbar`；页面内分类用 `Tabs` / `SideBar`；超长索引用 `Indexes`。

## Toast、Message、Dialog、ActionSheet、Popup、Drawer

- `Toast`：短暂轻反馈，不需要用户操作。
- `Message`：较轻量提示，可用于连续操作反馈。
- `Dialog`：需要用户决策、危险确认或短表单。
- `ActionSheet`：底部弹出一组上下文操作。
- `Popup`：底部、顶部或中间弹出自定义内容。
- `Drawer`：边缘弹出内容，保留页面上下文。

判断规则：轻反馈用 `Toast` / `Message`；强确认用 `Dialog`；操作集合用 `ActionSheet`；标准组件无法满足的自定义内容再用 `Popup` / `Drawer`。

## Cell、List、Table、Grid

- `Cell` / `CellGroup`：移动端列表项、设置项、表单项或信息摘要。
- `List`：连续条目流，适合消息、资源或轻量记录。
- `Table`：结构化少列数据，能力和密度不等同 Web。
- `Grid`：宫格入口或功能快捷入口。

判断规则：单列信息优先 `Cell` / `List`；少列结构化数据才考虑 `Table`；功能入口用 `Grid`。小程序缺少 `List` 时使用 `Cell` / `CellGroup` 或项目已有列表封装。

## Picker、Cascader、TreeSelect、SideBar、Indexes

- `Picker`：单列或多列触控选择。
- `Cascader`：逐级选择层级路径。
- `TreeSelect`：紧凑空间选择树形数据。
- `SideBar`：页面内分类导航。
- `Indexes`：长列表快速定位。

判断规则：值选择用 `Picker` / `Cascader` / `TreeSelect`；页面分类导航用 `SideBar`；长列表定位用 `Indexes`。

## Checkbox、Radio、Switch

- `Checkbox`：多选或延迟提交的布尔值。
- `Radio`：少量互斥选项中单选一个。
- `Switch`：即时生效的开关状态。

判断规则：随表单提交的布尔值优先 `Checkbox`；互斥选择用 `Radio`；切换立即生效才用 `Switch`。

## Input、Textarea、Search、Stepper、Slider

- `Input`：短文本、手机号、验证码等输入。
- `Textarea`：备注、说明、评论等多行输入。
- `Search`：搜索是主要任务时使用。
- `Stepper`：数量加减。
- `Slider`：连续范围近似选择。

判断规则：按输入值类型选择。搜索不要默认手写输入框；数量加减用 `Stepper`；需要精确数字时不要只依赖 `Slider`。

## Loading、Skeleton、Progress、Empty、Result

- `Loading`：通用等待。
- `Skeleton`：内容结构已知但数据未返回。
- `Progress`：可量化进度。
- `Empty`：无数据、无结果或无内容。
- `Result`：成功、失败、异常或流程完成结果。

判断规则：列表和详情加载优先 `Skeleton`；没有数据用 `Empty`；流程结果用 `Result`；不确定时长不要伪造 `Progress` 百分比。
