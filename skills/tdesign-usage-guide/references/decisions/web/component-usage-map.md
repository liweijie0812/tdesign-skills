# TDesign 组件何时使用

本文按 TDesign Web 设计指南整理 Web 组件“何时使用”。组件名以 TDesign 为准。若上游设计文档暂未覆盖某个组件，则按企业级后台与业务系统中的通用选型原则补齐，但表述仍保持 TDesign 语境。

## 通用

### Button

- 当用户需要点击操作命令并触发业务逻辑时使用。
- 主按钮用于页面或操作区域中最重要的动作，应控制数量，避免多个主按钮争抢焦点。
- 详细规则见 `components/button.md`。

### Icon

- 用于提升识别效率、表达状态，或承载紧凑型操作。
- 图标含义不够通用时，应搭配文字或 `Tooltip`。
- 详细规则见 `components/icon.md`。

### Link

- 当点击结果是跳转到页面、区域、文件或外部资源时使用。
- 当点击结果是修改数据、提交命令或启动任务时，优先使用 `Button`。
- 详细规则见 `components/link.md`。

### Typography

- 用于文本层级、阅读节奏和语义化内容展示。
- 适用于标题、段落、强调文本、可复制文本等场景，避免零散自定义文本样式。
- 详细规则见 `components/typography.md`。

## 布局

### Divider

- 用于分隔内容组、表单区块、菜单组或视觉区域。
- 当留白或卡片分组已能表达层级时，避免过度使用分割线。
- 详细规则见 `components/divider.md`。

### Grid

- 用于响应式列布局和页面对齐。
- 当内容需要在不同屏幕下保持稳定的横向比例时使用。
- 详细规则见 `components/grid.md`。

### Layout

- 用于应用级页面结构，如顶部栏、侧边导航、内容区和页脚。
- 适合管理后台、控制台、仪表盘等稳定页面框架。
- 详细规则见 `components/layout.md`。

### Space

- 用于控制相邻组件之间的间距。
- 适合按钮组、表单控件组、行内操作等，优先于零散 margin 样式。
- 详细规则见 `components/space.md`。

## 导航

### Affix

- 用于将页面中的操作区、导航、筛选条件或提示内容固定在滚动容器的指定位置。
- 当用户滚动页面时仍需要持续访问某个控件或信息时使用。
- 详细规则见 `components/affix.md`。

### Anchor

- 用于长文档或长配置页面的页内导航。
- 当用户需要在同一页面的多个区块间跳转时使用。
- 详细规则见 `components/anchor.md`。

### BackTop

- 用于较长滚动页面，帮助用户快速返回顶部。
- 页面较短或没有明显纵向滚动时不需要使用。
- 详细规则见 `components/back-top.md`。

### Breadcrumb

- 用于展示当前位置在层级结构中的路径，并支持快速返回上级。
- 适合多层级产品结构、文档结构或资源结构。
- 详细规则见 `components/breadcrumb.md`。

### Dropdown

- 用于将上下文相关操作收纳在触发器后面，节省空间。
- 适合操作菜单，不适合承担值选择。
- 详细规则见 `components/dropdown.md`。

### Menu

- 用于导航结构或一组相关命令集合。
- 当多个条目需要持续展示、分组或层级组织时使用。
- 详细规则见 `components/menu.md`。

### Pagination

- 用于将大量数据拆分为分页浏览。
- 常与 `Table` 或 `List` 搭配，用于分批浏览记录。
- 详细规则见 `components/pagination.md`。

### Steps

- 用于展示有顺序的流程进度。
- 当用户需要理解当前步骤、已完成步骤和剩余步骤时使用。
- 详细规则见 `components/steps.md`。

### Tabs

- 用于在同一上下文内切换平级内容面板。
- 不适合表达有先后顺序的流程，流程类场景优先使用 `Steps`。
- 详细规则见 `components/tabs.md`。

## 数据录入

### AutoComplete

- 当用户输入自由文本，同时需要候选建议提升输入效率时使用。
- 适合建议值有帮助但不是唯一合法值的场景。
- 详细规则见 `components/auto-complete.md`。

### Cascader

- 用于从层级数据中逐级选择，且下一级选项依赖上一级选项。
- 适合地区、组织、分类、权限路径等选择。
- 详细规则见 `components/cascader.md`。

### Checkbox

- 用于多选或相互独立的布尔选项。
- 当多个选项可以独立选择时使用。
- 详细规则见 `components/checkbox.md`。

### ColorPicker

- 当用户需要选择或输入颜色值时使用。
- 适合主题配置、样式配置、图表配置和视觉配置场景。
- 详细规则见 `components/color-picker.md`。

### DatePicker

- 当用户需要选择日期、日期范围、月份、季度或年份时使用。
- 当日期格式正确性重要时，优先于普通文本输入。
- 详细规则见 `components/date-picker.md`。

### Form

- 当需要向用户收集信息时使用。
- 当提交信息需要校验时使用。
- 详细规则见 `components/form.md`。

### Input

- 用于短文本自由输入。
- 需要反馈校验状态时，可搭配状态和提示文本。
- 详细规则见 `components/input.md`。

### InputAdornment

- 用于将输入框与前缀、后缀、单位或相关控件组合。
- 当附加内容会改变输入含义时使用，如金额单位、计量单位、协议前缀等。
- 详细规则见 `components/input-adornment.md`。

### InputNumber

- 当输入值必须是数字时使用。
- 当需要最小值、最大值、精度、步进或加减控制时使用。
- 详细规则见 `components/input-number.md`。

### Radio

- 当用户必须从少量选项中选择一个时使用。
- 选项较多或空间有限时，优先使用 `Select`。
- 详细规则见 `components/radio.md`。

### RangeInput

- 当用户需要成对输入起始值和结束值时使用。
- 适合数值范围、文本范围或筛选区间。
- 详细规则见 `components/range-input.md`。

### Rate

- 用于评分、满意度或偏好程度表达。
- 当值是主观评价并可用等级表达时使用。
- 详细规则见 `components/rate.md`。

### Select

- 当需要在有限空间中展示大量选项，并从中选择一个或多个值时使用。
- 选项较多时，应提供搜索能力。
- 详细规则见 `components/select.md`。

### SelectInput

- 用于构建自定义选择类交互中的底层输入与展示能力。
- 标准选项选择场景优先使用 `Select`。
- 详细规则见 `components/select-input.md`。

### Slider

- 当用户需要从连续范围中选择值，且允许近似输入时使用。
- 适合音量、百分比、阈值、强度等视觉化调整。
- 详细规则见 `components/slider.md`。

### Switch

- 用于即时生效的开关状态切换。
- 如果值需要随表单一起提交，而不是即时生效，应优先使用 `Checkbox`。
- 详细规则见 `components/switch.md`。

### TagInput

- 当用户需要输入或编辑多个标签值时使用。
- 适合标签、关键词、收件人或自定义 token 列表。
- 详细规则见 `components/tag-input.md`。

### Textarea

- 用于多行自由文本输入。
- 适合描述、评论、备注、长文本等场景。
- 详细规则见 `components/textarea.md`。

### TimePicker

- 当用户需要选择时间或时间范围时使用。
- 当时间格式正确性重要时，优先于普通文本输入。
- 详细规则见 `components/time-picker.md`。

### Transfer

- 当用户需要在源列表和目标列表之间移动条目时使用。
- 当已选和未选集合需要同时可见时使用。
- 详细规则见 `components/transfer.md`。

### TreeSelect

- 当用户需要在紧凑表单控件中从树形数据里选择一个或多个项时使用。
- 当用户需要直接浏览、展开并操作层级结构时，优先使用 `Tree`。
- 详细规则见 `components/tree-select.md`。

### Upload

- 当用户需要上传文件或图片时使用。
- 根据文件类型和任务密度选择列表、卡片或拖拽样式。
- 详细规则见 `components/upload.md`。

## 数据展示

### Avatar

- 用于视觉化表示用户、组织、团队或实体。
- 当需要身份展示时，可使用图片、首字母或图标作为兜底内容。
- 详细规则见 `components/avatar.md`。

### Badge

- 用于展示未读数、状态点或附着在其他元素上的小型数字标记。
- 当标记用于补充父组件信息时使用，不宜单独承载复杂信息。
- 详细规则见 `components/badge.md`。

### Calendar

- 用于日期导向的日程、事件或日历浏览。
- 当用户需要按日期查看信息分布时使用。
- 详细规则见 `components/calendar.md`。

### Card

- 用于将相关内容和操作组织在一个容器中。
- 适合仪表盘区块、预览、内容模块或对象摘要。
- 详细规则见 `components/card.md`。

### Collapse

- 当内容可以分组并按需展开时使用。
- 适合收起次要内容或高级配置，降低页面复杂度。
- 详细规则见 `components/collapse.md`。

### Comment

- 用于展示用户评论、回复、作者信息、时间和相关操作。
- 适合讨论、评审、审计、协作等场景。
- 详细规则见 `components/comment.md`。

### Descriptions

- 用于只读字段和值的信息展示。
- 适合详情页、摘要页、确认页。
- 详细规则见 `components/descriptions.md`。

### Empty

- 当没有数据、没有结果或没有可展示内容时使用。
- 如果用户可以创建、重置或重试，应搭配恢复动作。
- 详细规则见 `components/empty.md`。

### Image

- 用于图片展示，并支持兜底、预览或加载状态。
- 详细规则见 `components/image.md`。

### ImageViewer

- 用于预览大图或浏览图片集合。
- 当用户需要缩放、切换或仔细查看图片时使用。
- 详细规则见 `components/image-viewer.md`。

### List

- 用于展示结构相似的重复条目，且横向字段对比不是核心任务。
- 适合动态流、消息、资源列表和轻量记录。
- 详细规则见 `components/list.md`。

### Progress

- 用于展示任务完成百分比或阶段性进度。
- 当进度可量化时使用。
- 详细规则见 `components/progress.md`。

### QRCode

- 用于渲染可扫码的二维码内容，如链接、ID 或登录信息。
- 详细规则见 `components/qrcode.md`。

### Statistic

- 用于突出展示数值指标。
- 适合仪表盘、摘要区块和 KPI 卡片。
- 详细规则见 `components/statistic.md`。

### Swiper

- 用于轮播式内容浏览。
- 适合横幅、推荐内容、图片组或引导页。
- 详细规则见 `components/swiper.md`。

### Table

- 当需要展示大量结构化信息，方便用户浏览和获取批量数据时使用。
- 当数据需要排序、搜索、筛选、分页、选择、展开、编辑或自定义操作时使用。
- 详细规则见 `components/table.md`。

### Tag

- 用于标记、分类、状态表达或轻量元信息展示。
- 当用户可以移除已选标签或筛选条件时，使用可关闭标签。
- 详细规则见 `components/tag.md`。

### Timeline

- 用于展示按时间顺序排列的事件、流程历史、日志或生命周期记录。
- 详细规则见 `components/timeline.md`。

### Tooltip

- 用于在悬浮或聚焦时展示简短说明。
- 适合解释图标、截断文本或陌生控件。
- 详细规则见 `components/tooltip.md`。

### Tree

- 用于展示和操作层级数据。
- 当用户需要展开、收起、选择、勾选、拖拽或查看节点时使用。
- 详细规则见 `components/tree.md`。

### Watermark

- 用于在内容上添加身份、保密或追溯标记。
- 适合截图、敏感页面或需要来源归属的内容。
- 详细规则见 `components/watermark.md`。

## 反馈

### Alert

- 用于页面级或区块级的提示、成功、警告或错误信息。
- 当信息需要在上下文中持续可见时使用。
- 详细规则见 `components/alert.md`。

### Dialog

- 当需要展示操作反馈或提示信息时使用。
- 当用户需要填写或查看相关信息，并且需要局部中断当前任务但不离开当前流程时使用。
- 详细规则见 `components/dialog.md`。

### Drawer

- 用于需要比浮层更多空间、同时保留页面上下文的侧边任务面板。
- 适合详情查看、配置、编辑或辅助流程。
- 详细规则见 `components/drawer.md`。

### Guide

- 用于分步引导、新功能发现或操作教学。
- 当用户需要被引导关注多个界面目标时使用。
- 详细规则见 `components/guide.md`。

### Loading

- 用于表示局部或页面级内容正在加载。
- 如果最终内容结构已知，优先使用 `Skeleton` 降低等待感。
- 详细规则见 `components/loading.md`。

### Message

- 用于操作后的轻量全局反馈。
- 适合短暂展示成功、失败、警告、信息或加载提示。
- 详细规则见 `components/message.md`。

### Notification

- 用于更丰富或停留时间更长的全局通知。
- 当内容需要标题、描述、手动关闭或比 `Message` 更高的可见性时使用。
- 详细规则见 `components/notification.md`。

### Popconfirm

- 用于靠近触发操作的轻量二次确认。
- 适合不需要强中断的确认场景。
- 详细规则见 `components/popconfirm.md`。

### Popup

- 作为底层浮层能力，用于高阶组件无法满足的自定义浮层场景。
- 标准交互优先使用 `Dropdown`、`Select`、`Tooltip` 或 `Popconfirm`。
- 详细规则见 `components/popup.md`。

### Skeleton

- 用于内容结构加载中的占位展示。
- 当展示即将出现的布局能降低等待感时使用。
- 详细规则见 `components/skeleton.md`。

## 系统与配置

### ConfigProvider

- 用于提供 TDesign 全局配置，如语言、类名前缀、主题、组件默认配置或全局提示配置。
- 通常放在应用根部，除非配置只作用于某个局部子树。
- 详细规则见 `components/config-provider.md`。

### StickyTool

- 用于视口边缘的固定快捷工具或快捷操作。
- 适合客服、反馈、设置或常用辅助操作。
- 详细规则见 `components/sticky-tool.md`。
