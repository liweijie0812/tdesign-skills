# TDesign Mobile 与小程序相似组件选型

适用于 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp`。具体 props、事件、插槽和小程序 external classes 必须查当前技术栈 skill 的 `references/api/<component>/index.md`。

## Button、Link、Fab

- `Button`：用于当前流程的提交、确认、删除、保存或启动业务动作。
- `Link`：用于跳转、协议、页脚链接或轻量文本入口。
- `Fab`：用于全局高频或强引导的悬浮操作入口。

判断规则：触发业务动作优先 `Button`；跳转优先 `Link`；需要浮在内容上保持可达时才用 `Fab`。

更多按钮优先级、吸底按钮、图标按钮、加载禁用和小程序开放能力规则见 `components/button.md`。

## Navbar、TabBar、Tabs、Segmented、SideBar、Indexes

- `Navbar`：页面顶部导航，承载标题、返回、关闭或少量页面级操作。
- `TabBar`：应用主功能模块的底部切换。
- `Tabs`：同一页面或模块内按分类维度切换。
- `Segmented`：同一区域内少量平级视图、状态或范围切换。
- `SideBar`：移动端左右分栏分类导航。
- `Indexes`：按字母、城市、联系人等索引定位长列表。

判断规则：按导航层级选择。全局主模块用 `TabBar`；页面标题和返回用 `Navbar`；页面内分类用 `Tabs` / `SideBar`；少量轻量状态切换用 `Segmented`；超长索引用 `Indexes`。

误判修正：不要把所有“切换”都做成 `Tabs`。应用主模块切换属于 `TabBar`；页面标题和返回属于 `Navbar`；二到四个轻量状态适合 `Segmented`；长列表快速定位才使用 `Indexes`。

## Toast、Message、Dialog、ActionSheet、Popover、Popup、Drawer、Overlay

- `Toast`：短暂轻反馈，不需要用户操作。
- `Message`：较轻量提示，可用于连续操作反馈。
- `Dialog`：需要用户决策、危险确认或短表单。
- `ActionSheet`：底部弹出一组上下文操作。
- `Popover`：触发点附近的轻量提示或少量快捷操作。
- `Popup`：底部、顶部或中间弹出自定义内容。
- `Drawer`：边缘弹出内容，保留页面上下文。
- `Overlay`：遮罩或自定义浮层底层能力。

判断规则：轻反馈用 `Toast` / `Message`；强确认用 `Dialog`；操作集合用 `ActionSheet`；轻量解释用 `Popover`；标准组件无法满足的自定义内容再用 `Popup` / `Drawer` / `Overlay`。

误判修正：不要把成功提示默认做成 `Dialog`；危险确认不要只用 `Toast`；多个上下文操作不要塞进 `Dialog` 按钮；标准选择器、操作面板或确认框能满足时，不优先使用底层 `Popup` / `Overlay`。

更多 Dialog 内容、按钮、关闭和移动端行为规则见 `components/dialog.md`。

## Cell、List、Table、Grid、QRCode、CountDown

- `Cell` / `CellGroup`：移动端列表项、设置项、表单项或信息摘要。
- `List`：连续条目流，适合消息、资源或轻量记录。
- `Table`：结构化少列数据，能力和密度不等同 Web。
- `Grid`：宫格入口或功能快捷入口。
- `QRCode`：可扫码识别的链接、凭证、订单或分享信息。
- `CountDown`：有明确截止时间的倒计时。

判断规则：单列信息优先 `Cell` / `List`；少列结构化数据才考虑 `Table`；功能入口用 `Grid`；跨设备核验用 `QRCode`；时间敏感截止用 `CountDown`。小程序或 UniApp 缺少 `List` 时使用 `Cell` / `CellGroup` 或项目已有列表封装。

误判修正：移动端不要照搬 Web 高密度表格；设置项、资料项和表单项优先 `Cell`；功能入口宫格不要用普通列表模拟；二维码只用于真实扫码传递，不用于普通编号展示。

更多 Table 移动端约束、替代方案和状态规则见 `components/table.md`。

## Typography、Link、Tag、Cell

- `Typography`：标题、正文、说明、强调文本等文本层级展示。
- `Link`：跳转、协议、页脚链接或轻量文本入口。
- `Tag`：状态、属性、分类或轻量标记。
- `Cell`：移动端列表项、设置项、表单项或信息摘要容器。

判断规则：纯文本层级用 `Typography`；可跳转文本用 `Link`；状态和分类标记用 `Tag`；文本需要与图标、右侧值或跳转提示组成一行信息时用 `Cell`。

## Tag、CheckTag、Checkbox、Radio

- `Tag`：展示状态、属性、分类或轻量元信息。
- `CheckTag`：轻量标签选择，适合兴趣、偏好、筛选条件或状态切换。
- `Checkbox` / `CheckboxGroup`：多选项，适合明确表单值或批量选择。
- `Radio` / `RadioGroup`：少量互斥选项中单选一个。

判断规则：只展示用 `Tag`；轻量点选标签用 `CheckTag`；需要表单语义和明确多选值用 `Checkbox`；互斥单选用 `Radio`。

## Search、DropdownMenu、Picker、Cascader、TreeSelect、SideBar、Indexes

- `Search`：关键词检索是主要任务。
- `DropdownMenu`：列表上方少量筛选或排序条件。
- `DropdownItem` / `dropdown-item`：`DropdownMenu` 中的单个筛选或排序项。
- `Picker`：单列或多列触控选择。
- `Cascader`：逐级选择层级路径。
- `TreeSelect`：紧凑空间选择树形数据。
- `SideBar`：页面内分类导航。
- `Indexes`：长列表快速定位。

判断规则：关键词检索用 `Search`；列表筛选排序用 `DropdownMenu`，单个条件项由 `DropdownItem` / `dropdown-item` 承载；值选择用 `Picker` / `Cascader` / `TreeSelect`；页面分类导航用 `SideBar`；长列表定位用 `Indexes`。

误判修正：`DropdownMenu` 适合列表上方少量筛选排序，不适合承载复杂表单；`Picker` 适合有限选项的触控选择，不适合搜索大量远程数据；页面分类导航不要误用成表单值选择。

## Checkbox、Radio、Switch

- `Checkbox`：多选或延迟提交的布尔值。
- `Radio`：少量互斥选项中单选一个。
- `Switch`：即时生效的开关状态。

判断规则：随表单提交的布尔值优先 `Checkbox`；互斥选择用 `Radio`；切换立即生效才用 `Switch`。

## Input、Textarea、Stepper、Slider

- `Input`：短文本、手机号、验证码等输入。
- `Textarea`：备注、说明、评论等多行输入。
- `Stepper`：数量加减。
- `Slider`：连续范围近似选择。

判断规则：按输入值类型选择。普通短文本用 `Input`；多行内容用 `Textarea`；数量加减用 `Stepper`；需要精确数字时不要只依赖 `Slider`。

## DateTimePicker、Calendar、ColorPicker

- `DateTimePicker`：选择日期、时间或日期时间组合。
- `Calendar`：日期或日期范围是任务主体，或需要查看日期分布。
- `ColorPicker`：主题、视觉、标注或图表颜色配置。

判断规则：简单日期时间值用 `DateTimePicker`；以日期浏览或范围选择为核心用 `Calendar`；真实需要用户配置颜色才用 `ColorPicker`。

## Loading、Skeleton、Progress、Empty、Result

- `Loading`：通用等待。
- `Skeleton`：内容结构已知但数据未返回。
- `Progress`：可量化进度。
- `Empty`：无数据、无结果或无内容。
- `Result`：成功、失败、异常或流程完成结果。

判断规则：列表和详情加载优先 `Skeleton`；没有数据用 `Empty`；流程结果用 `Result`；不确定时长不要伪造 `Progress` 百分比。

误判修正：无数据不是异常结果，优先 `Empty`；提交成功、失败、异常或流程结束才用 `Result`；结构已知的加载不要只显示转圈；没有真实进度不要使用百分比进度条。

## 父组件与子组件

- `GridItem`、`CellGroup`、`TabPanel`、`TabBarItem`、`SideBarItem`、`StepItem`、`IndexesAnchor`、`SwiperNav` / `SwiperNavigation`：只在对应父组件内部使用。
- `Text`、`Title`、`Paragraph`：归属 `Typography`，用于文本层级和段落语义。
- `FormItem`、`PickerItem`、`DropdownItem` / `dropdown-item`：归属 `Form`、`Picker` 和 `DropdownMenu`，用于字段容器或选择项结构。
- `AvatarGroup`、`CollapsePanel`、`BaseTableCol`：归属 `Avatar`、`Collapse`、`Table` 的组合能力。

判断规则：先选父组件，再决定是否需要子组件；不要把子组件当作独立页面能力替代父组件。
