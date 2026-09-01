# TDesign Web 视觉一致性规则

本文把 `design-spec.md`、`tokens.md`、`color.md`、`layout.md`、`offices.md` 和 `offices-task.md` 中分散的 Web 中后台视觉规则收敛成一份显式规则表，用于回答“间距、配色、排版、圆角、阴影、布局和状态应该如何保持一致”。无设计文件场景下，颜色根规则先查 `../modules/M02-colors.md`，排版、间距、组件尺寸和圆角根规则先查 `../modules/M03-typography-spacing-radius.md`，布局、应用壳和导航结构根规则先查 `../modules/M04-layout-navigation.md`。

## 适用范围

- 适用于 TDesign Web 中后台、控制台、运营后台、配置页、列表页、表单页、详情页和仪表盘页面。
- 适用于用户要求“按 TDesign 风格”“统一视觉”“补齐间距和配色规则”“对齐 Web 设计规范”但没有提供完整设计稿的场景。
- 不适用于 Mobile / Miniprogram / UniApp 页面；这些端只参考通用 Token 原则，不复用本文的应用壳、侧栏和桌面密度规则。

## 使用优先级

- 先使用 TDesign 组件、组件 `theme` / `variant` / `status` / `size` / `layout` 等公开能力，不优先写自定义 CSS 覆盖内部结构。
- 再优先在业务样式里直接写 `var(--td-*)` 形式的 TDesign CSS Variables；只有组件 API 明确要求数字、像素字符串、图表色值或 fallback 时，才保留必要硬值。
- 最后补最小业务 CSS，只处理组件组合和公开 props 无法覆盖的布局或局部样式。
- 需要组件 API、事件、插槽和技术栈写法时，回到对应技术栈 skill 的 `references/api/` 文件确认。

## 布局基线

| 规则项 | 默认值 | 说明 |
| --- | --- | --- |
| 内容区列数 | `12` 列 | Web 中后台主体内容统一按 `12` 栅格组织 |
| 栅格槽宽 | `16px` | 内容区默认 `gutter` |
| 页面安全边距 | `24px` | 页面左右安全边距默认值 |
| Header 高度 | `var(--td-comp-size-xxxl)` | 标准后台顶栏高度 |
| 侧栏展开宽度 | `232px` | 左侧导航展开态默认宽度 |
| 侧栏收起宽度 | `64px` | 左侧导航收起态默认宽度 |
| 响应断点 | `992px` | 侧栏展开 / 收起与桌面布局切换参考值 |

- 应用壳优先使用 `Layout`、`Header`、`Aside`、`Content`、`Footer` 和 `Menu` 官方组合，不从空白 `div` 开始手写后台框架。
- 顶部导航和侧边导航一般不要完整并存；如业务必须并存，全页只能保留一个 Logo + 系统名称品牌位。
- 自定义 `Header` 高度时，必须同时设置 `height`、`min-height` 和 `flex-shrink: 0`，并继续使用 `var(--td-comp-size-xxxl)` 作为默认值。
- 内容区优先使用卡片、区块、栅格和分组结构组织信息，不要整页平铺信息和操作。

## 间距规则

### 默认档位

| 场景 | Token / 值 | 默认用法 |
| --- | --- | --- |
| 图标和文字紧邻 | `var(--td-size-2)` / `4px` | 图标前缀、紧贴说明、微型状态组合 |
| 小组件间距 | `var(--td-size-4)` / `8px` | 按钮组、标签组、紧邻控件 |
| 表单项内部、小区块 | `var(--td-size-5)` / `12px` | 表单单元内部、短说明块 |
| 常规组件间距 | `var(--td-size-6)` / `16px` | 表单字段组、工具栏项、紧凑容器下限 |
| 页面安全边距、卡片内边距、常规区块间距 | `var(--td-size-8)` / `24px` | 页面主体、卡片、筛选区与结果区分隔 |
| 页面头和主体、大区块间距 | `var(--td-size-10)` / `32px` | 页面顶部信息区与主体区分隔 |
| 强分隔区块 | `var(--td-size-13)` / `48px` | 仪表盘大模块、强分段布局 |

### 使用规则

- 全站间距遵循 `8px` 栅格基数，只允许 `4px`、`12px` 作为更细粒度的小间距例外。
- 同一页面只保留 `1` 到 `2` 个主间距档位；常见组合是 `16px + 24px` 或 `24px + 32px`。
- 列表页中，筛选区、工具栏、表格、分页之间优先使用 `16px` 或 `24px` 的规律节奏，不要每层都换一个值。
- 表单页中，字段组之间优先使用 `16px`，表单大分区之间优先使用 `24px`，不要把所有字段挤成一层密度。
- 卡片内边距默认使用 `24px`；空间受限但仍需保证可读性时，才降到 `16px`。
- 页面布局间距优先使用 `Space`、`Row`、`Col`、`Layout` 和组件自带 spacing 能力，不要零散堆 `margin`。
- 禁止无规律间距，例如 `13px`、`17px`、`21px`；确需硬值时必须属于断点、`1px` 边框或平台例外。

## 配色规则

### 语义映射

| 语义 | Token | 默认场景 |
| --- | --- | --- |
| 页面底色 | `--td-bg-color-page` | 应用最底层背景 |
| 主容器背景 | `--td-bg-color-container` | `Card`、主内容面板、弹窗内容 |
| 弱分组背景 | `--td-bg-color-secondarycontainer` | 筛选区、弱分组、浅强调块 |
| 主文字 | `--td-text-color-primary` | 页面标题、正文、主要数据 |
| 次要文字 | `--td-text-color-secondary` | 描述、辅助说明、表格弱信息 |
| 占位文字 | `--td-text-color-placeholder` | 占位符、弱提示、空值提示 |
| 禁用文字 | `--td-text-color-disabled` | 禁用态文案和图标 |
| 链接文字 | `--td-text-color-link` | 文本链接和可跳转文本 |
| 主操作 / 选中态 | `--td-brand-color` | 主按钮、选中项、主要强调 |
| 成功态 | `--td-success-color` | 完成、通过、成功反馈 |
| 告警态 | `--td-warning-color` | 风险提醒、待处理、警示 |
| 错误态 | `--td-error-color` | 失败、删除、危险、阻断 |
| 反色前景 | `--td-text-color-anti` | 彩色实心底上的文字、图标、头像缩写 |

### 使用规则

- 页面背景、卡片背景、分割线和文字颜色优先直接写 `var(--td-*)`，不把零散 `hex` 当成业务颜色规范。
- 主按钮、主链接和主选中态优先使用品牌色语义，不直接写 `#0052d9`。
- 删除、失败、危险操作固定使用错误语义，不用品牌蓝或告警橙代替。
- 风险提醒使用告警语义，成功和通过使用成功语义，禁止把三类功能色互换成装饰色。
- 彩色实心底上的文字、图标和头像缩写必须使用 `--td-text-color-anti`，不能继续使用 `primary`、`secondary` 或 `brand` 前景色。
- `hover`、`focus`、`active`、`disabled` 必须使用同语义状态变量，不跨语义借色，例如错误按钮 hover 不使用品牌 hover。
- 自定义颜色样式默认写成 `color: var(--td-text-color-primary)`、`background: var(--td-bg-color-container)`、`border-color: var(--td-component-border)` 这类 CSS Variables 形式，不只停留在“概念上遵循 Token”。

## 排版层级

| 层级 | Token | 默认场景 |
| --- | --- | --- |
| 页面标题 | `--td-font-size-title-large` | 页面主标题 |
| 区块标题 | `--td-font-size-title-medium` | 卡片标题、区块标题 |
| 卡片内小标题 | `--td-font-size-title-small` | 次级模块标题 |
| 正文 | `--td-font-size-body-medium` | 表单、表格、正文内容 |
| 辅助说明 | `--td-font-size-body-small` | 描述、提示、表格弱信息 |
| 页面头标题 | `--td-font-size-headline-small` | 仪表盘头部、页面头区域 |

- 页面至少保持“页面标题 / 区块标题 / 正文 / 辅助信息”四级层次，避免全页同字号同字重。
- 强调信息优先使用 `--td-font-family-medium` 或对应标题字号，不靠随意加粗制造层级。
- 行高优先使用 `--td-line-height-*` 或 `--td-font-body-*`、`--td-font-title-*` 这类已包含字重和行高的 shorthand。
- 自定义字号、字重和行高时，优先直接写 `var(--td-font-size-*)`、`var(--td-line-height-*)` 或 `var(--td-font-*)`，不要重新发明一套排版值。
- 表单项、表格文本、操作区和卡片标题默认左对齐；金额、数量、百分比等数值列默认右对齐。
- 说明文案、错误文案和状态文案需要层级区分，不要把标题、正文、说明、禁用态全部写成同一种文字样式。

## 圆角、边框和阴影

### 默认映射

| 语义 | Token | 默认场景 |
| --- | --- | --- |
| 小圆角 | `--td-radius-small` | 小标签、小控件 |
| 默认圆角 | `--td-radius-default` | 按钮、输入框、表格单元格 |
| 中圆角 | `--td-radius-medium` | 卡片、弹窗、较大容器 |
| 大圆角 | `--td-radius-large` | 少量强调模块、大卡片 |
| 胶囊圆角 | `--td-radius-round` | Pill 标签、胶囊按钮 |
| 弱分割线 | `--td-component-stroke` | 卡片分割、Header 下边线、弱分隔 |
| 可见边框 | `--td-component-border` | 输入框、卡片描边、容器边界 |
| 浅阴影 | `--td-shadow-1` | 轻浮起卡片、弱悬浮 |
| 中阴影 | `--td-shadow-2` | 下拉、气泡、选择面板 |
| 高阴影 | `--td-shadow-3` | 通知、全局浮层 |

### 使用规则

- 控件默认使用 `--td-radius-default`，卡片和弹窗默认使用 `--td-radius-medium`，不要一页中混用大圆角和直角风格。
- 只有需要明显强调的大容器才使用 `--td-radius-large`，不要把所有卡片都做成过大圆角。
- 弱分隔优先使用 `--td-component-stroke`，可见描边优先使用 `--td-component-border`，不要同页混用多套边框色。
- 阴影只用于表达浮层层级，不用于制造装饰性厚重质感；同页不要同时出现深阴影和完全无层级的浮层体系。
- 自定义圆角、描边和阴影时，优先直接写 `var(--td-radius-*)`、`var(--td-component-*)`、`var(--td-shadow-*)`，不要把 Token 名称再翻译成一套硬编码数值。

## 状态与反馈

- 表单、列表、详情、图表和结果页必须覆盖加载、空态、错误态和无权限态，不能留空白页面。
- 危险操作必须使用 `Popconfirm`、`Dialog` 或当前栈等价确认组件，不只把按钮改成危险色。
- 图表模块必须使用项目明确的图表组件或图表库，不用占位框、截图、静态图标或装饰块冒充图表。
- Web 图标 `name` 必须来自 `tdesign-icons` manifest。
- 提交、导入、批量操作、预览等异步动作必须有 `loading` 或防重复提交策略。
- 状态表达不能只靠颜色，必须同时有文案、组件状态、图标或操作结果反馈。
- 查询和筛选场景必须明确“立即生效”或“点击查询后生效”，不要把两套交互混在同一区域。
- 结果反馈必须告诉用户当前状态、执行结果、下一步或恢复路径；失败态不能只有颜色变化没有文字说明。

## 禁止项

- 禁止大量硬编码 `hex`、`rgba`、任意 `px`、任意圆角和任意阴影。
- 禁止把 `Header` 改成 `52px`、`60px` 等非组件尺寸阶梯值，或只写 `height` 导致被 `flex` 压缩。
- 禁止同时引入第二套组件库或第二套设计语言破坏 TDesign 的视觉基线。
- 禁止用 `div`、截图、图标或静态块伪装 `Table`、`Form`、`Dialog`、`Pagination`、`Menu` 等真实组件。
- 禁止把图标、截图或装饰色块当作图表、表格、状态组件或业务模块本体。
- 禁止 Web 图标跳过 manifest 校验自造 `name`。
- 禁止侧栏和顶栏各放一套 Logo / 系统名称品牌位。

## 自检项映射

| 规则主题 | 对应检查项 |
| --- | --- |
| 使用真实 TDesign 组件 | `DS-001` |
| 颜色优先使用 CSS Variables | `DS-002` |
| 尺寸优先使用 CSS Variables | `DS-003` |
| Header 高度完整约束 | `DS-004` |
| 导航没有重复品牌位 | `DS-005` |
| 危险操作必须二次确认 | `DS-006` |
| 列表页覆盖空、加载、错误状态 | `DS-007` |
| 彩色实心底使用反色文字 | `DS-009` |
| 状态表达不只依赖颜色 | `DS-011` |
| 生成后逐项自检 | `DS-012` |

- 页面生成、页面改造或视觉走查后，继续按 `checklist.json` 的 `outputTemplate` 输出 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因`。
- 有可访问代码文件时，优先运行 `node skills/tdesign-design-spec/scripts/check-quality.mjs --platform web <file-or-directory>` 做静态门禁。
