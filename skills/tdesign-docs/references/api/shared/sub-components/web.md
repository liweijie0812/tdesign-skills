# Web 子组件与组合项何时使用

本文补充 TDesign Web 常见子组件、插槽型组件和组合配置项的使用场景。生成页面或实现业务组件时，优先用这些子组件和配置项组合能力，少写自定义 CSS 和临时结构。

本文不是完整 API 清单，也不保证每个条目在 React、Vue Next 和 Vue 2 都存在。真实可用性、标签名、导入名、props、事件、插槽和类型必须回到当前栈 API 与本地类型源确认。

## 查阅边界

- Web API 入口统一是 `skills/tdesign-react/references/api/<component>/index.md`、`skills/tdesign-vue-next/references/api/<component>/index.md` 或 `skills/tdesign-vue2/references/api/<component>/index.md`。
- API 表描述不够精确时，读取同技术栈目录下对应组件或子组件的 `type.ts` / `props.ts`，公共类型读当前技术栈 skill 的 `references/api/common.ts`。
- React 点语法、Vue 标签写法和 Vue 插槽写法不能互相套用。
- 移动端和小程序子组件语义见 `mobile.md` 与 `miniprogram.md`。

## 类型源提示

- React 通常以 `type.ts` 为主，Vue Next / Vue 2 通常同时有 `props.ts` 和 `type.ts`。
- `ConfigProvider` 的全局配置项较多，具体字段以 `config-provider/type.ts` 和 `props.ts` 为准。
- `Table`、`Upload`、`Tree`、`Select`、`DatePicker` 等复杂组件的组合配置较多，优先查本地类型源，不要凭 API 表摘要推断。

## 跨框架命名规则

- 本文标题使用语义名称，不强制代表某个框架的真实标签或导出名。
- React 项目使用 React 组件命名和导入方式，例如 `Layout.Header`、`Form.FormItem` 或项目已有写法。
- Vue 项目使用 Vue 组件标签或插件注册名，例如 `t-header`、`t-aside`、`t-form-item`、`t-tab-panel`，不要照搬 React 的点语法。
- 实现前优先查看当前项目已有用法和对应 TDesign 框架文档。

## 布局与页面结构

### 布局头部区域

- 用于页面或应用壳的顶部区域。
- 适合放置产品标识、全局搜索、顶部导航、用户信息和全局操作。
- React 常见写法：`Layout.Header`。
- Vue Next 常见写法：`t-header`。

### 布局侧边栏区域

- 用于页面或应用壳的侧边栏区域。
- 适合放置主导航、分组菜单或辅助筛选。
- React 常见写法：`Layout.Aside`。
- Vue Next 常见写法：`t-aside`。

### 布局内容区域

- 用于承载页面主体内容。
- 适合包裹列表页、详情页、表单页和仪表盘主要内容区。
- React 常见写法：`Layout.Content`。
- Vue Next 常见写法：`t-content`。

### 布局底部区域

- 用于页面底部信息区域。
- 适合放置版权、辅助链接或页面级说明。
- React 常见写法：`Layout.Footer`。
- Vue Next 常见写法：`t-footer`。

### 栅格行列

- 用于栅格布局中的行与列组合。
- 适合响应式表单、卡片栅格、指标面板和多栏页面。
- React 常见写法：`Row` / `Col`。
- Vue 常见写法：`t-row` / `t-col`。

## 排版

### 文本

- 用于普通行内文本、状态文本、强调文本或可复制文本。
- 当需要加粗、斜体、标记、删除线、下划线、代码样式、键盘样式、主题色、禁用态、复制或省略时使用。
- React 常见写法：`Text` 或 `Typography.Text`，以项目已有写法为准。
- Vue Next 常见写法：`t-typography-text`。

### 标题

- 用于页面、区块、卡片或内容区域的标题层级。
- 当需要 `h1` 到 `h6` 语义层级、标题省略或统一标题样式时使用。
- React 常见写法：`Title` 或 `Typography.Title`，以项目已有写法为准。
- Vue Next 常见写法：`t-typography-title`。

### 段落

- 用于较长的块级文本内容。
- 当需要多行文本、段落省略、展开收起或统一段落样式时使用。
- React 常见写法：`Paragraph` 或 `Typography.Paragraph`，以项目已有写法为准。
- Vue Next 常见写法：`t-typography-paragraph`。

### 文本省略配置

- 用于 `Text`、`Title` 或 `Paragraph` 的内容省略、展开和收起控制。
- 当内容较长但页面空间有限，需要控制显示行数、展开按钮或省略提示时使用。
- React/Vue 常见写法：通过 `ellipsis` 配置，不应手写大量 CSS 截断逻辑。

### 文本复制配置

- 用于 `Text` 的复制能力和复制触发元素配置。
- 当展示 ID、链接、密钥片段、命令、编号等需要用户复制的内容时使用。
- React/Vue 常见写法：通过 `copyable` 配置，不应自行拼装复制按钮和提示逻辑。

## 导航

### 面包屑项

- 用于 `Breadcrumb` 中的单个路径节点。
- 当路径节点需要点击返回上级或展示当前层级时使用。
- React 常见写法：`BreadcrumbItem` 或 `Breadcrumb.Item`，以项目已有写法为准。
- Vue 常见写法：`t-breadcrumb-item`。

### 菜单项

- 用于 `Menu` 中的单个导航项或命令项。
- 当条目没有下级菜单时使用。
- React 常见写法：`MenuItem`。
- Vue 常见写法：`t-menu-item`。

### 子菜单

- 用于 `Menu` 中带有下级分组的菜单项。
- 当导航需要层级折叠、展开或分组时使用。
- React 常见写法：`Submenu` 或 `SubMenu`，以项目已有写法为准。
- Vue 常见写法：`t-submenu`。

### 菜单分组

- 用于 `Menu` 内的菜单分组。
- 当多个菜单项属于同一业务域或功能域时使用。
- React 常见写法：`MenuGroup`。
- Vue 常见写法：`t-menu-group`。

### 下拉操作项

- 用于 `Dropdown` 中的单个操作项。
- 当触发器展开后需要展示多个可点击操作时使用。
- React 常见写法：`DropdownItem` 或通过 `options` 配置。
- Vue 常见写法：`t-dropdown-item` 或通过 `options` 配置。

### 步骤项

- 用于 `Steps` 中的单个步骤。
- 当每一步需要标题、说明、状态或图标时使用。
- React 常见写法：`StepItem`。
- Vue 常见写法：`t-step-item`。

### 标签页内容面板

- 用于 `Tabs` 中的单个内容面板。
- 当多个平级内容需要切换展示时，每个内容区使用一个标签页内容面板。
- React 常见写法：`TabPanel`。
- Vue 常见写法：`t-tab-panel`。

## 数据录入

### 表单项

- 用于 `Form` 中的单个字段容器。
- 当字段需要标签、校验、提示、状态或布局控制时使用。
- 不要绕过表单项自行拼装标签和错误信息，除非是完全自定义表单控件。
- React 常见写法：`FormItem` 或 `Form.FormItem`。
- Vue 常见写法：`t-form-item`。

### 动态表单列表

- 用于 `Form` 中的动态数组字段。
- 适合动态增减联系人、规则、明细行、配置项等重复字段组。
- React 常见写法：`FormList` 或 `Form.FormList`。
- Vue 常见写法：按 TDesign Vue 表单列表能力或项目已有封装实现。

### 选择器选项

- 用于 `Select` 中的单个可选项。
- 当选项需要自定义禁用、标题或复杂内容时使用。
- React 常见写法：`Option` 或 `Select.Option`。
- Vue 常见写法：`t-option`。

### 选择器选项分组

- 用于 `Select` 中的选项分组。
- 当选项数量较多且可按业务类别分组时使用。
- React 常见写法：`OptionGroup` 或 `Select.OptionGroup`。
- Vue 常见写法：`t-option-group`。

### 复选框组

- 用于一组复选项的统一控制。
- 当多个 `Checkbox` 共享同一个数组值或需要统一禁用、布局时使用。
- React 常见写法：`CheckboxGroup`。
- Vue 常见写法：`t-checkbox-group`。

### 复选框选项

- 用于 `CheckboxGroup` 中的单个复选项。
- 当单个选项需要独立禁用、自定义内容或更明确的标签结构时使用。
- React 常见写法：`Checkbox`。
- Vue 常见写法：`t-checkbox`。

### 单选框组

- 用于一组单选项的统一控制。
- 当多个 `Radio` 共同表示一个字段值时使用。
- React 常见写法：`RadioGroup`。
- Vue 常见写法：`t-radio-group`。

### 单选框选项

- 用于 `RadioGroup` 中的单个单选项。
- 当少量选项需要完整展示并明确互斥时使用。
- React 常见写法：`Radio`。
- Vue 常见写法：`t-radio`。

### 单选按钮

- 用于按钮样式的单选组展示。
- 当单选项需要更强操作感或适合横向切换时使用。
- React/Vue 常见写法：使用 `RadioGroup` 的 `theme="button"` 和 `options` 或子 `Radio` 组合；不要编造文档未确认的额外子组件。

### 输入框组

- 用于组合多个输入框或输入框相关控件。
- 当多个输入值属于同一语义组，如 IP 段、范围、账号信息或复合输入时使用。
- React 常见写法：`InputGroup` 或 `Input.Group`，以项目已有写法为准。
- Vue 常见写法：`t-input-group`。

## 数据展示

### 头像组

- 用于展示多个用户、成员或实体头像的集合。
- 当空间有限且需要表达多人参与、群组成员或协作者时使用。
- React 常见写法：`AvatarGroup` 或 `Avatar.Group`，以项目已有写法为准。
- Vue 常见写法：按 TDesign Vue 头像组能力或项目已有封装实现。

### 描述项

- 用于 `Descriptions` 中的单个字段和值。
- 当详情页、确认页或摘要区需要展示一个只读字段时使用。
- React 常见写法：`DescriptionsItem` 或 `Descriptions.Item`。
- Vue 常见写法：`t-descriptions-item`。

### 列表项

- 用于 `List` 中的单个列表项。
- 当每个条目需要标题、描述、操作或媒体内容时使用。
- React 常见写法：`ListItem` 或 `List.Item`。
- Vue 常见写法：`t-list-item`。

### 列表项元信息

- 用于 `ListItem` 中的标题、描述、头像等元信息。
- 当列表项需要标准化展示主体信息时使用。
- React 常见写法：`ListItemMeta` 或 `List.Item.Meta`。
- Vue 常见写法：`t-list-item-meta`。

### 折叠面板项

- 用于 `Collapse` 中的单个可展开面板。
- 当某一组内容需要标题、展开状态和独立内容区域时使用。
- React 常见写法：`CollapsePanel` 或 `Collapse.Panel`。
- Vue 常见写法：`t-collapse-panel`。

### 时间轴项

- 用于 `Timeline` 中的单个时间节点。
- 当事件需要时间、状态、标题或描述时使用。
- React 常见写法：`TimelineItem`。
- Vue 常见写法：`t-timeline-item`。

### 轮播项

- 用于 `Swiper` 中的单个轮播项。
- 当轮播中每一页需要独立图片、内容或操作时使用。
- React 常见写法：`SwiperItem`。
- Vue 常见写法：`t-swiper-item`。

### 树节点

- 用于 `Tree` 中的单个树节点。
- 当节点需要自定义图标、禁用、选中、展开、标签或操作时使用。
- React/Vue 通常通过 `Tree` 数据结构、插槽或节点渲染配置表达，不要假定必须手写同名节点标签。

## 表格

### BaseTable

- 用于基础表格展示。
- 当只需要结构化数据展示、固定列、合并单元格、空状态或基础滚动能力时使用。

### PrimaryTable

- 用于带有业务操作能力的主表格。
- 当需要选择、排序、筛选、分页、列配置、行展开、拖拽排序或可编辑单元格时使用。

### EnhancedTable

- 用于增强表格，尤其是树形结构表格。
- 当表格需要承载层级数据、树节点展开折叠或树形拖拽操作时使用。

### BaseTableCol / PrimaryTableCol

- 用于定义 `Table` 的列。
- 当需要列标题、字段映射、宽度、对齐、自定义渲染、排序、筛选、固定列或编辑配置时使用。

### TableColumnController

- 用于控制表格列的显示、隐藏和列配置入口。
- 当用户需要自定义表格展示字段时使用。

### TableColumnFilter

- 用于定义表格列筛选器。
- 当列需要单选、多选、输入筛选或自定义筛选组件时使用。

### TableEditableCellConfig

- 用于配置可编辑单元格行为。
- 当表格单元格需要进入编辑态、退出编辑态或触发校验时使用。

### TableTreeConfig

- 用于配置树形表格行为。
- 当 `Table` 同时承担层级数据展示、展开折叠或树节点操作时使用。

### Sorter / Filter / Pagination 配置

- 用于表格排序、筛选和分页行为配置。
- 当表格数据需要按列排序、按条件过滤或分页浏览时使用，优先使用 `Table` 内建能力而不是自定义控制区重复实现。

## 反馈与浮层

### DialogCard

- 用于对话框内容卡片结构。
- 当需要在对话框中复用标准头部、内容和操作区结构时使用。

### DialogPlugin / dialog

- 用于函数式创建确认、提示或告警对话框。
- 当对话框由事件即时触发、不适合常驻在页面 JSX/模板中时使用。

### DrawerPlugin / drawer

- 用于函数式创建抽屉。
- 当抽屉由事件即时触发，或需要集中管理显示隐藏时使用。

### MessagePlugin / Message

- 用于函数式触发全局轻量反馈。
- 当操作完成后需要即时提示成功、失败、警告、信息或加载状态时使用。

### NotifyPlugin / Notification

- 用于函数式触发全局通知。
- 当通知内容较完整、停留时间较长或需要手动关闭时使用。

### 全局消息配置

- 用于统一配置 `Message`、`Notification`、`Dialog` 等全局反馈行为。
- 当项目需要统一挂载节点、层级、持续时间、文案或主题时使用。
- React/Vue 常见写法：优先通过 `ConfigProvider` 或对应插件配置，不要在每个调用点重复写配置。

## 全局配置

### 组件默认配置

- 用于在 `ConfigProvider` 中统一设置组件默认行为。
- 当多个页面需要一致的尺寸、文案、空状态、上传配置或分页配置时使用。

### 国际化配置

- 用于统一设置 TDesign 组件语言和内置文案。
- 当项目需要中文、英文或多语言切换时使用。

### 主题与类名前缀配置

- 用于统一设置主题、样式前缀或全局样式上下文。
- 当项目有品牌主题、微前端隔离或样式隔离需求时使用。
