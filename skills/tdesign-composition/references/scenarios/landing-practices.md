# 落地实践：组件搭配替代 CSS

> 来源：基于 tdesign-vue-next 真实项目落地沉淀（原 `tdesign-guide` 规范），提炼为跨栈通用原则。
> 目的：**能用组件完成的，绝不手写 CSS**。借助 TDesign 组件搭配替代手写 CSS 凑布局，降低维护成本、保证全站视觉一致。
> 本文件只讲"怎么搭更规范"，具体组件写法和 props 回到当前技术栈 API skill 确认。

## 核心原则

- 能用组件完成的功能与布局，一律用组件，不手写 CSS 布局容器。
- 组件已有 `theme` / `variant` / `size` 等公开能力时先用组件能力，最后才补最小 CSS。
- 禁止硬编码颜色 / 字号 / 间距 / 圆角，一律走设计令牌（`var(--td-*)` 或当前端 Design Token）。
- 禁止用裸 `<a>` / `<button>` / `<div>` 承担业务操作，一律用 TDesign 操作组件。

## 常见「手写 CSS → 组件搭配」对照

| # | 场景 | ❌ 旧写法（手写 CSS） | ✅ 新写法（组件搭配） |
|---|---|---|---|
| 1 | 工具栏一排按钮 | `<div class="toolbar">` + `display:flex;gap:8px` | `Space`（支持换行），间距 `size="8"` |
| 2 | 工具栏左右分组 / 分隔 | `.toolbar-divider` + flex spacer | `Space` 分组 + 子项 `style="margin-left:auto"`（外层 `style="width:100%"`）；需分隔符用 `Space` 的 `separator` |
| 3 | 表格操作列裸链接 | `h('a', ...)` / `Button variant="text"` | `Link`（主操作 `theme="primary"`，危险 `theme="danger"`），多按钮用 `Space size="4"` 包裹 |
| 4 | 统计卡（数字 + 标签） | `<div class="stat">` + 手写 `.num/.label` | `Statistic`（`title` / `value` / `unit` / `color`） |
| 5 | 按钮语义（普通操作用 success / warning） | `theme="success"`（保存）、`theme="warning"`（预览） | 主操作 `theme="primary"`，次操作 `variant="outline"`，危险 `theme="danger"` |
| 6 | 页面顶部操作按钮组 | `.page-actions` + flex | `Space size="8"` |
| 7 | 左右 / 上下双栏布局 | `<div class="left/right">` + 手写 flex | `Row` / `Col`（或 `Grid`），`:gutter` 控制栏间距，`span` 总和 24 |
| 8 | 只读键值展示 | 裸 `<table>` / 手写 label-value | `Descriptions` / `DescriptionsItem` |
| 9 | 状态文字 | 裸 `<span style="color:#xxx">`、`<b>` / `<i>` | 排版组件文字（`theme` / `strong` / `italic` / `mark` 等布尔 prop） |

## 间距约定

- **工具栏按钮组**：`Space size="8"`（页面级操作，留白略大）。
- **表格操作列按钮组**：`Space size="4"`（更紧凑，避免按钮紧贴）。
- **块元素与后续内容**（如 `Alert` 之后）：`style="margin-bottom:16px"`（或当前端间距令牌）。
- 页面级内边距、块间垂直留白统一用当前端间距令牌，不零散写 margin。

## 6 套常用页面「套餐」默认组合

覆盖绝大多数中后台业务场景，新建页面时优先从套餐定位，再按需增删。

| 套餐 | 适用场景 | 默认组合 |
|---|---|---|
| A 标准列表页 | 管理类列表（含工具栏 + 弹窗） | `Space`（工具栏）+ `Table`（`:pagination`、`:loading`）+ `Link`（操作列）+ `Empty`（空态） |
| B 表单页 / 表单弹窗 | 新增 / 编辑 / 设置 | `Form` + `FormItem` + 字段组件 + `Dialog` / 页面；校验走 `Form :rules` + `validate()` |
| C Tab 分类页 | 页面内多类目切换 | `Tabs` + `TabPanel`，每面板内容用 `Card` 承载 |
| D 左右工作区 | 配置 + 结果双栏 | `Row` / `Col`（左约 1/3，右约 2/3）+ `Card` |
| E 只读信息展示 | 详情、结果汇总 | `Descriptions` |
| F 复杂流程页 | 流程设计器、节点化页面 | `Layout`（侧栏 / 内容 / 属性面板），复杂逻辑拆子组件 |

## 落地红线

- 空数据一律给 `Empty`，加载中给 `Loading` / `Skeleton`，错误给 `Alert` / `Message`。
- 危险操作（删除 / 禁用 / 下线）必须二次确认（`Popconfirm` / `Dialog`），文案说明后果。
- 表单校验统一走 `Form :rules` + `validate()`，禁止手写 `if` + 提示插件兜底。
- 单文件组件建议不超过约 400 行，超过按职责拆子组件；弹窗独立成 `*Dialog` 组件。
- 每个页面统一"页面容器 + 标题区 + 主体卡片"骨架，标题用排版组件，不用手写 `h1` + 自定义样式。
- 改完删除遗留的手写 `.toolbar` / `.stat` / `.num` / `.label` / `.toolbar-divider` 等死代码（仅保留纯容器职责，不再手写 `display:flex` 布局）。

## 使用提示

- 本文件给的是跨栈通用默认组合与落地原则；具体组件标签名、props、事件、插槽回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认（如 React 用点语法、Vue 用 `t-*` 标签、小程序用属性 / 事件绑定）。
- Web 与 Mobile / Miniprogram 结构不直接互相复用；移动端优先 `Cell` / `CellGroup` / `Grid` / 导航组件，不照搬 Web `Layout` / `Card` 密度。
- 改代码需通过项目构建（含类型检查），每个 PR 只做一件事并引用对应 Issue。
