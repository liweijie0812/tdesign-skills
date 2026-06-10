# 移动端子组件与组合项何时使用

本文补充 TDesign Mobile React 和 Mobile Vue 常见子组件、插槽型组件和组合配置项的使用场景。它不是完整 API 清单；真实可用性、标签名、props、事件、插槽和类型必须回到当前栈 API 与本地类型源确认。

## 查阅边界

- Mobile React API 入口是 `api/mobile-react/<component>/index.md`，类型源通常是同目录 `type.ts` 和 `api/mobile-react/common.ts`。
- Mobile Vue API 入口是 `api/mobile-vue/<component>/index.md`，类型源通常是同目录 `type.ts`、`props.ts` 和 `api/mobile-vue/common.ts`。
- Mobile React 组件命名、Mobile Vue 标签/插槽和 Web 组件命名不能互相套用。

## 常见组合项

### 布局与容器

- `Row` / `Col`：用于移动端栅格布局，适合表单、卡片和指标区域的轻量分栏；不要照搬 Web 的密集列数。
- `GridItem`：用于 `Grid` 中的单个宫格入口，适合功能入口、快捷操作和图标导航。
- `CellGroup`：用于组织一组 `Cell`，适合设置项、详情字段和列表式入口的分组。
- `Footer`：用于页面或区块底部说明、版权和辅助链接，不承担主要操作区。

### 排版

- `Text`：用于普通行内文本、状态文本、强调文本、可复制文本或省略文本。
- `Title`：用于移动端页面、区块和卡片标题，保持层级清晰，不用纯字号替代语义。
- `Paragraph`：用于较长说明文本，省略、展开收起和复制能力优先查 typography 配置。
- `TypographyEllipsis` / `TypographyCopyable`：用于省略和复制配置，避免手写 CSS 截断和自定义复制反馈。

### 导航与索引

- `TabPanel`：用于 `Tabs` 中的单个内容面板，适合平级内容切换。
- `TabBarItem`：用于底部导航中的单个入口，适合主功能区切换。
- `SideBarItem`：用于侧边导航中的单个入口，适合分类、频道或设置分组。
- `StepItem`：用于 `Steps` 中的单个步骤，适合进度、状态和流程节点。
- `IndexesAnchor`：用于 `Indexes` 中的索引锚点，适合通讯录、城市选择等按字母或分类快速定位。
- `SwiperNavigation`：用于 `Swiper` 导航配置，适合轮播指示与切换控制；具体结构以当前栈类型为准。

### 数据录入与选项

- `FormItem`：用于表单单个字段容器，承载标签、校验、提示和布局，不要自行拼装错误信息。
- `FormRule` / `FormErrorMessage`：用于表单校验规则和错误信息类型，规则结构以当前栈类型为准。
- `RadioGroup`：用于一组互斥选项，移动端选项数量较少且需要明确选择时优先使用。
- `CheckboxGroup`：用于一组多选项，适合筛选、偏好设置和批量选择。
- `CheckTag`：用于轻量标签选择，适合筛选条件、兴趣偏好和状态切换。
- `Picker` 相关配置：用于移动端滚轮或弹层选择，选项结构和事件按当前栈 API。
- `DateTimePicker` 配置：用于日期时间选择，格式、范围、列控制以当前栈 `type.ts` 为准。

### 数据展示

- `AvatarGroup`：用于展示多人、团队或协作者头像集合，空间有限时优先用数量折叠能力。
- `CollapsePanel`：用于折叠内容中的单个面板，适合 FAQ、说明分组和可展开设置。
- `BaseTableCol`：用于移动端表格列定义；移动端表格能力比 Web 收敛，复杂列控制先查当前 API。
- `UploadFile`：用于上传文件项类型，预览、状态、失败重试和进度显示以当前栈类型为准。
- `GuideStep`：用于引导流程中的单个步骤，适合新功能引导和关键操作提示。

### 反馈与浮层

- `DialogPlugin` / `dialog`：用于即时创建确认、提示或告警对话框，实例销毁和更新按当前栈 API。
- `DrawerPlugin` / `drawer`：用于即时创建抽屉，适合附属流程、详情和编辑面板。
- `Toast` / `ToastOptions`：用于轻量全局反馈，适合操作结果、加载状态和短提示。
- `LoadingPlugin` / `loading`：用于全局或局部加载反馈，避免与页面骨架屏重复表达。
- `MessagePlugin`：Mobile Vue 存在对应入口时可用于消息反馈；Mobile React 是否同名暴露按 API 确认。

### 全局配置

- `GlobalConfigProvider`：用于统一组件默认配置、文案和行为，不要在每个页面重复写相同 props。
- `ActionSheetConfig`、`CalendarConfig`、`CascaderConfig`、`DropdownMenuConfig`、`FormConfig`、`GuideConfig`、`ImageConfig`、`InputConfig`、`ListConfig`、`PickerConfig`、`PullDownRefreshConfig`、`QRCodeConfig`、`RateConfig`、`TabBarConfig`、`TableConfig`、`UploadConfig`：用于全局默认行为，实际字段以 `config-provider/type.ts` 为准。
- `UploadConfigProgress`：用于统一上传进度展示配置，避免每个上传入口重复定义。

## 使用约束

- 移动端空间有限，子组件组合应优先服务触控、阅读和单手操作，不照搬 Web 的密集布局。
- 复杂表格、复杂表单和多层导航在移动端要先判断是否适合当前端，而不是直接复用 Web 组合。
- API 表描述不够精确时，读取对应组件目录下的 `type.ts` / `props.ts`。
- Mobile React 和 Mobile Vue 事件命名、插槽能力、函数式插件入口可能不同，同名组件也要分栈确认。
- 组合项用于减少临时结构和自定义 CSS，但不能替代当前项目已有的业务封装约定。
