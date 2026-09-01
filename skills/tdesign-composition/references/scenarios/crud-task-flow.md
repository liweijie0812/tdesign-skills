# CRUD 任务流场景卡

用于资源管理、用户管理、配置管理、批量导入、批量操作和状态流转类后台页面。

## 默认组件组合

### Web

- 页面框架：`Layout`、`Card`、`Space`。
- 查询筛选：`Form`、`Input`、`Select`、`DatePicker`、`Button`。
- 数据列表：`Table`、`Pagination`、`Tag`、`Badge`、`Dropdown`。
- 新增/编辑：`Dialog`、`Drawer` 或独立 `Form` 页面，复杂任务拆页面。
- 批量操作：`Checkbox` / 表格选择列、`Button`、`Dropdown`、`Popconfirm` / `Dialog`。
- 导入导出：`Upload`、`Table` / `List`、`Message`、`Alert`、`Progress`。

### Mobile / Miniprogram

- 列表浏览：`Navbar`、`Search`、`Tabs`、`Cell`、`CellGroup`；`List` 需先确认当前栈覆盖。
- 筛选：`Popup`、`Drawer`、`Picker`、`Cascader`。
- 编辑：优先独立表单页；轻量编辑可用 `Popup` / `Dialog`。

## 组合规则

- 查询、列表、分页、排序和批量选择状态来源要一致。
- 新增/编辑入口要区分主操作和行内次要操作，复杂表单不塞进小弹窗。
- 删除、禁用、下线、清空、批量覆盖等操作必须二次确认。
- 批量操作前展示已选数量和禁用原因，完成后反馈结果并刷新或局部更新数据。
- 导入流程要覆盖上传中、校验失败、部分成功、全部失败和可下载错误明细。
- 状态流转需要展示当前状态、可执行动作、权限限制和流转后的反馈。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/table/index.md`、`form/index.md`、`dialog/index.md`、`upload/index.md`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/table/index.md`、`form/index.md`、`dialog/index.md`、`upload/index.md`。
- Vue 2 查 `skills/tdesign-vue2/references/api/table/index.md`、`form/index.md`、`dialog/index.md`、`upload/index.md`。
- Mobile / Miniprogram 先查对应端 `cell`、`search`、`popup`、`dialog`、`upload` 能力；`list` 需确认当前栈覆盖，小程序可用 `Cell` / `CellGroup` 或项目列表封装降级，不照搬 Web 宽表格和复杂工具栏。

## 验证清单

- 空数据、加载中、加载失败、无权限和接口错误都有明确展示。
- 搜索、重置、分页、排序和刷新不会互相覆盖状态。
- 批量操作、危险操作和状态流转都有确认与结果反馈。
- 导入任务有文件格式、大小、进度、失败原因和重试策略。
- Mobile / Miniprogram 下列表密度、触控目标和筛选弹层可用。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-006`、`DS-007`、`DS-008`、`DS-010`、`DS-011`、`DS-012`。
- Web 结构化列表必须使用真实 `Table` 与列配置；条目流或移动端列表可按当前端能力降级。
- Web CRUD 任务流交付前按 ``tdesign-design-spec` 的 `references/design/checklist.json`` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 ``tdesign-design-spec` 的 `references/quality-gate.md`` 检查目标文件。
