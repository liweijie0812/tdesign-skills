# 小程序子组件与组合项何时使用

本文补充 `tdesign-miniprogram` 常见子组件、插槽、external classes 和组合配置项的使用场景。它不是完整 API 清单；真实属性名、事件名、插槽名、external classes 和类型必须回到小程序 API 与本地类型源确认。

## 查阅边界

- 小程序 API 入口是 `api/miniprogram/<component>/index.md`。
- 小程序类型源位于对应组件或子组件目录，例如 `api/miniprogram/avatar-group/type.ts`、`api/miniprogram/grid-item/type.ts`、`api/miniprogram/tab-panel/type.ts`。
- 公共类型读 `api/miniprogram/common/common.ts`。
- 小程序属性使用短横线命名，不能套用 React 回调命名或 Vue 插槽写法。

## 常见组合项

### 布局与容器

- `Row` / `Col`：用于小程序栅格布局，适合表单、卡片和指标区域，真实类型源在 `row/` 和 `col/` 目录。
- `GridItem`：用于 `Grid` 中的单个宫格入口，适合功能入口、快捷操作和图标导航。
- `CellGroup`：用于组织一组 `Cell`，适合设置项、详情字段和分组列表。
- `Footer`：用于页面底部说明、版权和辅助链接，不承担主要确认操作。

### 排版

- `Text`：用于普通文本、状态文本、强调文本、可复制文本或省略文本。
- `Title`：用于标题层级；小程序 `typography` 聚合文档对应真实 `title/` 目录类型源。
- `Paragraph`：用于长文本段落；小程序 `typography` 聚合文档对应真实 `paragraph/` 目录类型源。
- 排版 slots：`Text`、`Title`、`Paragraph` 都可能提供 slots，具体 slot 名称以 `api/miniprogram/typography/index.md` 为准。

### 导航与索引

- `TabPanel`：用于 `Tabs` 中的单个内容面板，真实类型源在 `tab-panel/`。
- `TabBarItem`：用于底部导航单个入口，真实类型源在 `tab-bar-item/`。
- `SideBarItem`：用于侧边导航单个入口，真实类型源在 `side-bar-item/`。
- `StepItem`：用于 `Steps` 中的单个步骤，真实类型源在 `step-item/`。
- `IndexesAnchor`：用于 `Indexes` 中的锚点，真实类型源在 `indexes-anchor/`。
- `SwiperNav`：用于 `Swiper` 导航，真实类型源在 `swiper-nav/`。

### 数据录入与选项

- `FormItem`：用于表单单个字段容器，承载标签、校验、提示和布局，真实类型源在 `form-item/`。
- `FormRule` / `FormErrorMessage`：用于表单校验规则和错误信息类型，规则结构以 `api/miniprogram/form/type.ts` 为准。
- `RadioGroup`：用于一组互斥选项，真实类型源在 `radio-group/`。
- `CheckboxGroup`：用于一组多选项，真实类型源在 `checkbox-group/`。
- `CheckTag`：用于轻量标签选择，真实类型源在 `check-tag/`。
- `PickerItem`：用于 `Picker` 的选项项，真实类型源在 `picker-item/`。
- `Textarea` slots 和 external classes：输入框样式和附加内容优先用文档列出的 slots / external classes，不要手写内部结构。

### 数据展示

- `AvatarGroup`：用于展示多人、团队或协作者头像集合，真实类型源在 `avatar-group/`。
- `CollapsePanel`：用于 `Collapse` 中的单个面板，真实类型源在 `collapse-panel/`。
- `BaseTableCol`：用于小程序表格列定义，复杂列能力以 `api/miniprogram/table/index.md` 和 `table/type.ts` 为准。
- `Upload` slots：上传按钮、文件列表和自定义内容按 `api/miniprogram/upload/index.md`，文件类型以 `upload/type.ts` 为准。
- `GuideStep`：用于引导流程中的单个步骤，类型以 `guide/type.ts` 为准。

### 反馈与浮层

- `Dialog` slots：`actions`、`cancel-btn`、`confirm-btn`、`content`、`middle`、`title`、`top` 用于自定义弹窗结构。
- `Drawer`、`Popup`、`Popover` slots 和 external classes：用于小程序浮层自定义，优先查对应 API。
- `Toast`、`Message`、`Loading`：用于轻量反馈和加载提示，事件、external classes 和层级按小程序 API。
- `ActionSheet`：用于底部动作面板，适合移动端操作列表，不要用 Dialog 承载多项动作菜单。

### 全局配置

- `GlobalConfigProvider`：用于统一组件默认配置、文案和行为，类型以 `config-provider/type.ts` 为准。
- `ActionSheetConfig`、`CalendarConfig`、`CascaderConfig`、`DateTimePickerConfig`、`DropdownMenuConfig`、`FormConfig`、`GuideConfig`、`ImageConfig`、`InputConfig`、`PickerConfig`、`PullDownRefreshConfig`、`QRCodeConfig`、`RateConfig`、`TabBarConfig`、`UploadConfig`：用于全局默认行为，实际字段以小程序 `config-provider/type.ts` 为准。
- `UploadConfigProgress`：用于统一上传进度展示配置，避免每个上传入口重复定义。

## 使用约束

- 小程序样式定制优先使用文档列出的 slots、external classes 和 CSS Variables。
- 子组件如果没有独立 API 表，也可能有独立 `type.ts` / `props.ts`，按真实目录查类型源。
- 事件参数、平台能力、层级和滚动行为与 Web / Mobile React / Mobile Vue 不同，必须按 `api/miniprogram/` 确认。
- 小程序没有 React 点语法和 Vue 插槽语法，文档里的子组件语义要转换成小程序真实标签、属性、事件和 slot。
- external classes 是小程序样式定制的重要入口，优先使用 `t-class-*`，不要依赖 Web className 或深层选择器。
