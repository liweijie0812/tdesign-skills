# 详情页场景卡

用于对象档案、审批详情、订单详情、配置详情和资源详情等需要呈现结构化信息与处理轨迹的页面。

## 默认组件组合

### Web

- 页面容器：`Layout`、`Card`、`Space`、`Divider`。
- 信息区：`Descriptions`、`DescriptionsItem`，状态字段使用 `Tag` 或 `Badge`。
- 轨迹区：`Timeline`，按时间顺序展示创建、审批、变更和异常记录。
- 操作区：`Button`、`Popconfirm`、`Dialog`，危险操作必须二次确认。
- 反馈：`Message`、`Alert`、`Empty`，失败、无权限和加载状态要有文本说明。

### Mobile / Miniprogram

- 页面容器：使用当前项目页面容器，顶部用 `Navbar`，信息分组用 `Cell`、`CellGroup`、`Divider` 或 `Collapse`。
- 状态字段：使用 `Tag`、`Badge`、文本说明或当前端支持的状态组件，不只依赖颜色。
- 轨迹区：优先使用 `Steps`、`Timeline` 或按当前栈能力用 `Cell` 列表表达。
- 操作区：主操作可吸底，危险操作使用 `Dialog` 或当前端等价确认组件。

## 选型规则

- 只读结构化字段优先用 `Descriptions`，可编辑字段回到 `Form`。
- 多段信息使用 `Card` 分组，不把所有字段塞进一个长块。
- 状态、风险、审批结果和异常原因必须有文字或组件状态辅助表达。
- 时间线展示关键节点，完整日志量大时放入 `Table` 或独立日志页。
- Web 自定义样式优先使用 ``tdesign-design-spec` 的 `references/design/tokens.md`` 的语义 Token；Mobile / Miniprogram 按当前端 Design Token 和组件变量确认。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/descriptions/index.md`、`skills/tdesign-react/references/api/timeline/index.md`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/descriptions/index.md`、`skills/tdesign-vue-next/references/api/timeline/index.md`，完整模板见 `skills/tdesign-vue-next/references/examples/pages/details-page.vue`。
- Vue 2 查 `skills/tdesign-vue2/references/api/descriptions/index.md`、`skills/tdesign-vue2/references/api/timeline/index.md`。
- Mobile React / Mobile Vue / Miniprogram 先查对应端 `cell`、`tag`、`steps`、`dialog` 或 `timeline` 能力，不照搬 Web `Descriptions` 密度。

## 验证清单

- 主对象名称、状态、负责人、更新时间和关键说明在首屏可见。
- 状态表达包含文字、组件状态或图标，不只靠颜色。
- 操作权限、禁用原因和危险操作确认逻辑明确。
- 加载、空数据、无权限和异常状态都有明确文案。
- 移动端字段分组、吸底操作区和长内容折叠不会遮挡或溢出。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-006`、`DS-007`、`DS-008`、`DS-011`、`DS-012`。
- 涉及结构化日志表格时追加 `DS-010`，必须使用真实 `Table` 与列配置。
- Web 详情页交付前按 ``tdesign-design-spec` 的 `references/design/checklist.json`` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 ``tdesign-design-spec` 的 `references/quality-gate.md`` 检查目标文件。
