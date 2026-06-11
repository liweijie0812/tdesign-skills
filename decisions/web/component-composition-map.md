# TDesign Web 组件搭配索引

适用于 `tdesign-react`、`tdesign-vue-next` 和 `tdesign-vue`。本文只给 Web 组合方向，具体 props、事件、插槽和导入方式必须查当前栈 `api/<stack>/<component>/index.md`。

## 应用壳 / 控制台框架

- 基础组合：`Layout`、`Header`、`Aside`、`Content`、`Footer`、`Menu`、`Breadcrumb`。
- 内容承载：`Card`、`Space`、`Grid`、`Row`、`Col`。
- 辅助导航：`Tabs` 用于平级内容切换，`Steps` 用于流程进度，`BackTop` 用于长页返回顶部。
- 查阅：`scenarios/layout-shell.md`、`design/layout.md`、`design/offices.md`。

## 表单页 / 配置页

- 基础组合：`Form`、`FormItem`、`Input`、`Textarea`、`Select`、`DatePicker`、`Radio`、`Checkbox`、`Switch`、`Upload`、`Button`。
- 布局组织：`Card`、`Space`、`Divider`、`Tabs`、`Grid`、`Row`、`Col`。
- 反馈：字段错误用 `Form` 校验能力，提交结果用 `Message`，页面级问题用 `Alert`。
- 查阅：`scenarios/form-page.md`。

## 表格列表页 / 检索页

- 基础组合：筛选区用 `Form`、`Input`、`Select`、`DatePicker`、`Button`；数据区用 `Table`；分页用 `Pagination` 或 `Table` 内建分页。
- 行操作：高频操作用 `Button` / `Link`，低频操作收纳到 `Dropdown`，轻量确认用 `Popconfirm`，高风险确认用 `Dialog`。
- 状态：`Loading`、`Skeleton`、`Empty`、`Message`。
- 查阅：`scenarios/table-list-page.md`、`design/offices-task.md`。

## 详情页 / 只读信息

- 基础组合：`Descriptions` 展示字段和值，`Card` 分组，`Divider` 分隔，`Tag` 表达状态，`Timeline` 展示历史。
- 操作：页面主操作用 `Button`，跳转用 `Link`，上下文操作用 `Dropdown`。
- 反馈：局部提示用 `Alert`，操作后反馈用 `Message`。
- 避免：不要用禁用态 `Form` 伪装只读详情，除非页面需要在读写态之间切换。

## 弹窗确认 / 短表单

- 基础组合：`Dialog`、`Form`、`FormItem`、`Input`、`Select`、`Button`。
- 轻量确认：低到中等风险且内容短时优先 `Popconfirm`。
- 大体量任务：内容较长、需要保留页面上下文或侧边编辑时使用 `Drawer`。
- 查阅：`decisions/web/when-to-use/dialog-vs-drawer.md`、`api/_shared/dialog/contract.md`。

## 抽屉编辑 / 辅助详情

- 基础组合：`Drawer`、`Form` / `Descriptions`、`Tabs`、`Button`。
- 适用：需要更多空间，同时不希望用户离开当前列表或详情上下文。
- 避免：必须强中断决策或高风险确认时不要用 `Drawer` 替代 `Dialog`。

## 数据导入 / 文件上传

- 基础组合：`Upload`、`Button`、`Progress`、`Alert`、`Table`、`Dialog`。
- 流程：选择文件、上传进度、解析结果、错误明细、确认导入。
- 反馈：上传中用 `Progress` / `Loading`，结果用 `Message`，可修复错误用 `Table` 展示明细。
- 查阅：`design/offices-task.md`。

## 仪表盘 / 数据概览

- 基础组合：`Grid`、`Row`、`Col`、`Card`、`Statistic`、`Progress`、`Table`、`List`。
- 趋势或状态：用 `Tag`、`Badge`、`Tooltip` 辅助说明。
- 加载和空态：用 `Skeleton`、`Loading`、`Empty`。

## Web 反模式

- 不用 `div`、原生 `table`、手写分页和自定义弹窗复刻 TDesign 已有能力。
- 不把所有页面都做成 `Dialog` / `Drawer`，长任务优先页面化或抽屉化。
- 不用 Mobile 的 `Navbar`、`TabBar`、`Toast`、`Cell` 替代 Web 组件。
