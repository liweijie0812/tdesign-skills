# 仪表盘场景卡

用于控制台首页、数据概览、运营看板、资源监控和趋势分析页面。

图表、图标和真实组件红线先查 `../modules/M05-components-icons-charts.md`；本场景卡只给仪表盘默认组合。

## 默认组件组合

### Web

- 页面框架：`Layout`、`Card`、`Row`、`Col`、`Space`。
- 指标概览：`Card`、`Statistic` 或项目已有指标组件，状态字段使用 `Tag` / `Badge`。
- 筛选区：`Form`、`Select`、`DatePicker`、`Button`，复杂筛选不要挤占首屏核心指标。
- 数据区：项目已有图表库或明确图表组件，数据明细使用 `Table`。
- 状态反馈：`Loading`、`Skeleton`、`Empty`、`Alert`、`Message`。

### Mobile / Miniprogram

- 页面框架：`Navbar`、`Grid`、`Cell`、`CellGroup` 或项目页面容器；不要假定 Mobile / Miniprogram 存在 `Card`。
- 指标概览：减少并列指标数量，优先纵向卡片或两列网格。
- 数据区：优先摘要、趋势简图或可跳转详情，不强行复刻 Web 大屏图表。

## 组合规则

- 先确定核心指标、辅助指标和可下钻明细，不把所有卡片放在同一层级。
- 趋势、对比、分布、关系和转化必须使用真实图表或项目图表组件，不用静态块、图标或图片冒充。
- 图表需要加载、空数据、失败和权限不足状态，不能只显示空白容器。
- 指标卡只表达摘要，复杂明细进入列表页、详情页或独立分析页。
- Web 自定义样式优先使用 `../design/tokens.md` 的语义 Token；图表配色优先使用项目图表规范或扩展色，不滥用功能色。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/card/index.md`、`grid/index.md`、`statistic/index.md` 或项目图表封装。
- Vue Next 查 `skills/tdesign-vue-next/references/api/card/index.md`、`grid/index.md`、`statistic/index.md`，完整模板可参考 `references/examples/pages/dashboard.vue`。
- Vue 2 查 `skills/tdesign-vue2/references/api/card/index.md`、`grid/index.md` 和项目图表封装。
- Mobile / Miniprogram 先查当前端 `grid`、`cell`、`loading`、`empty` 能力；如需卡片视觉，用项目容器或 `Cell` / `Grid` 组合实现，不直接假定 `Card` 可用。

## 验证清单

- 首屏能看出核心指标、时间范围、数据更新时间和异常状态。
- 图表标题、单位、图例、空态和失败态清晰。
- 指标状态不只依赖颜色，必要时使用文字、`Tag`、图标或说明辅助。
- 下钻入口、筛选条件和明细列表的状态来源一致。
- 小屏幕下指标卡和图表不会横向溢出。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-007`、`DS-008`、`DS-011`、`DS-012`。
- 如果包含结构化明细表格，追加 `DS-010`，必须使用真实 `Table` 与列配置。
- Web 仪表盘交付前按 `../design/checklist.json` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 `../quality-gate.md` 检查目标文件。
