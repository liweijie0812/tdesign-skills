# 表格列表页场景卡

用于后台管理列表、资源列表、数据检索、批量操作和结构化记录浏览。

## 默认组件组合

- 页面框架：`Layout`、`Card`、`Space`。
- 筛选区：`Form`、`Input`、`Select`、`DatePicker`、`Button`。
- 数据区：`Table`，按需要启用列配置、排序、筛选、选择、展开、编辑或固定列。
- 分页：`Pagination` 或 `Table` 内建分页能力，按项目既有模式选一种。
- 状态反馈：`Loading`、`Skeleton`、`Empty`、`Message`、`Popconfirm`。

## 选型规则

- 结构化行列数据用 `Table`，条目流或卡片流用 `List` 或 `Card`。
- 操作列只放高频动作，低频动作折叠到 `Dropdown`。
- 破坏性行操作使用 `Popconfirm` 或 `Dialog`，文案说明后果。
- 单元格内容过长时优先省略、悬浮说明或展开详情，不拉宽整表。

## 栈差异提醒

- React 查 `api/react/table/index.md`，列渲染和事件按 JSX/onXxx 写法。
- Vue Next 查 `api/vue-next/table/index.md`，自定义单元格按 Vue 插槽或项目列配置写法。
- Vue 2 查 `api/vue2/table/index.md`，自定义单元格按 Vue 2 scoped slot 或项目列配置写法。

## 验证清单

- 筛选、分页、排序的状态来源清晰，URL、store 或组件状态不要互相覆盖。
- 空数据、加载中、加载失败和无权限状态都有明确呈现。
- 批量操作需要选择状态、禁用条件和确认机制。
- 表格横向滚动、固定列和移动端降级策略明确。
