# 表格列表页场景卡

用于后台管理列表、资源列表、数据检索、批量操作和结构化记录浏览。

## 默认组件组合

### Web

- 页面框架：`Layout`、`Card`、`Space`。
- 筛选区：`Form`、`Input`、`Select`、`DatePicker`、`Button`。
- 数据区：`Table`，按需要启用列配置、排序、筛选、选择、展开、编辑或固定列。
- 分页：`Pagination` 或 `Table` 内建分页能力，按项目既有模式选一种。
- 状态反馈：`Loading`、`Skeleton`、`Empty`、`Message`、`Popconfirm`。

### Mobile / Miniprogram

- 页面框架：使用当前项目页面容器，必要时用 `Cell`、`CellGroup`、`Grid`、`Row`、`Col` 组织内容，不照搬 Web `Layout` / `Card` / `Space`。
- 筛选区：`Form`、`Input`、`Picker`、`Cascader`、`DateTimePicker`、`Button`，复杂筛选可用 `Popup` / `Drawer` 承载。
- 数据区：结构化少列数据可用 `Table`；条目流优先用 `Cell`、`CellGroup`，Mobile React / Mobile Vue 可按需用 `List`。
- 分页：优先用接口分页、加载更多或 `PullDownRefresh`；只有当前栈 API 明确支持时才使用表格内建分页。
- 状态反馈：`Loading`、`Skeleton`、`Empty`、当前栈支持的 `Toast` / `Message`；破坏性操作用 `Dialog` 或当前栈支持的确认组件。

## 选型规则

- 结构化行列数据用 `Table`，条目流或卡片流用 `List` 或 `Card`。
- 禁止用 `table-filled`、表格截图、静态块或图标代替真实 `Table`。
- 操作列只放高频动作，低频动作折叠到 `Dropdown`。
- 破坏性行操作使用 `Popconfirm` 或 `Dialog`，文案说明后果。
- 单元格内容过长时优先省略、悬浮说明或展开详情，不拉宽整表。
- Web 筛选区、工具栏、表格、分页和状态反馈的颜色、间距和边框优先直接写 `var(--td-*)` 形式的 CSS Variables；Mobile / Miniprogram 按当前端 Design Token 和组件变量确认。
- Web 表格操作图标必须来自 TDesign Icons manifest；Mobile / Miniprogram 按当前端图标 API 和项目图标方案确认。任何端都不使用 Emoji、自绘 SVG、外部 iconfont 或临时网络图片。
- Mobile / Miniprogram 数据密度更低，优先减少列数、拆详情页或使用条目流，不强行复刻 Web 宽表格。
- 小程序当前未同步 `List` 组件 API 时，不要假定可用；简单条目优先用 `Cell` / `CellGroup` 或项目已有列表封装。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/table/index.md`，列渲染和事件按 JSX/onXxx 写法。
- Vue Next 查 `skills/tdesign-vue-next/references/api/table/index.md`，自定义单元格按 Vue 插槽或项目列配置写法。
- Vue 2 查 `skills/tdesign-vue2/references/api/table/index.md`，自定义单元格按 Vue 2 scoped slot 或项目列配置写法。
- Mobile React 查 `skills/tdesign-mobile-react/references/api/table/index.md`，表格能力和交互密度不等同 Web。
- Mobile Vue 查 `skills/tdesign-mobile-vue/references/api/table/index.md`，事件、列配置和插槽按移动端 Vue API。
- Miniprogram 查 `skills/tdesign-miniprogram/references/api/table/index.md`，属性、事件和插槽按小程序 API。

## 验证清单

- 筛选、分页、排序的状态来源清晰，URL、store 或组件状态不要互相覆盖。
- 空数据、加载中、加载失败和无权限状态都有明确呈现。
- 批量操作需要选择状态、禁用条件和确认机制。
- 表格横向滚动、固定列和移动端降级策略明确。
- 批量操作完成后有当前端支持的 `Message` / `Notification` / `Toast` 等结果反馈，并刷新或更新表格数据。
- 成功、告警、错误和禁用状态未跨语义用色。
- Mobile / Miniprogram 需要验证触控选择、下拉刷新、加载更多、固定操作区和小屏幕溢出。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-006`、`DS-007`、`DS-008`、`DS-010`、`DS-011`、`DS-012`。
- 结构化行列数据必须使用真实 `Table` 与列配置；禁止截图、静态块、图标或 `table-filled` 伪装。
- Web 筛选区、工具栏、表格、分页和状态反馈交付前按 `../design/checklist.json` 的 `outputTemplate` 输出适用项结果。
