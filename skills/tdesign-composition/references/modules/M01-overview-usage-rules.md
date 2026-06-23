# M01 - Overview & Usage Rules

本模块是 `tdesign-composition` 在无设计文件场景下的根约束。凡涉及页面生成、页面改造、组件搭配、视觉审计或其他模块化规则，必须先按本模块确定全局红线，再进入场景卡、Token、布局、图标或质量门禁资料。

## 1. 体系定位

**TDesign** 是腾讯开源的企业级设计体系，面向中后台、企业应用与跨端产品，包括 Web、Mobile、Miniprogram 和 UniApp。

默认视觉目标是现代简约、专业中性、高效清晰、多端统一。页面应保持理性克制、强秩序感、可复用组件与 Token、可读对比和清晰状态表达，适合大规模业务与长期迭代。

## 2. 无设计文件优先级

1. 以 TDesign 官方组件、Design Token、CSS Variables 和当前技术栈 API 为最高实现依据。
2. 工程已接入 `tdesign-react`、`tdesign-vue-next`、TDesign Mobile 或小程序组件库时，优先使用组件、主题 API 和公开 props，不并行发明第二套设计语言。
3. 没有设计稿、Figma、截图或 `DESIGN.md` 时，不假设像素级还原；按本 skill 场景卡、`references/design/` 规则和项目现有代码风格生成稳定默认方案。
4. 涉及具体组件 props、事件、插槽、类型和导入方式时，回到当前技术栈 skill 或项目依赖确认，不凭记忆编造 API。
5. 生成 Web 中后台页面时，侧栏优先使用官方 `Menu + Layout` 组合，顶栏优先使用官方顶部导航或 `Menu.HeadMenu` 等价组合。

## 3. HTML CDN 零配置路径

生成独立 HTML / CDN 示例时，必须在 `<head>` 中引入 Vue、TDesign UI、TDesign CSS 和对应图标包，并正确注册组件。

### Vue 3

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<link rel="stylesheet" href="https://unpkg.com/tdesign-vue-next/dist/tdesign.min.css" />
<script src="https://unpkg.com/tdesign-vue-next/dist/tdesign.min.js"></script>
<script src="https://unpkg.com/tdesign-icons-vue-next/dist/index.umd.js"></script>
```

未引入图标包时，禁止用 Emoji、自绘 SVG、外部 iconfont、PNG 或临时网络图片替代图标。

## 4. Usage 八条硬性规则

### Usage-1 规范入口

无设计文件场景下，提示词或任务说明应声明“遵循 `tdesign-composition` 的 TDesign 无设计文件规范”。如果项目已有局部业务规范，先遵守业务约束，再用本模块补齐 TDesign 默认规则。

### Usage-2 Token 优先

颜色、字号、间距、圆角、尺寸和状态样式优先映射到 TDesign CSS Variables，例如 `--td-bg-color-page`、`--td-text-color-primary`、`--td-brand-color`、`--td-size-*`、`--td-radius-*`、`--td-comp-*`。禁止大量孤立硬编码色值、任意 px、任意圆角和自定义阴影。

有色实心底上的文案和图标前景必须使用 `--td-text-color-anti`，禁止与 `--td-text-color-brand`、`--td-text-color-primary` 或 `--td-text-color-secondary` 混搭造成不可读对比。

### Usage-3 组件尺寸与状态

优先使用 TDesign 组件的 `theme`、`variant`、`status`、`size`、`layout`、`loading`、`disabled` 等公开能力。组件已有状态语义时不优先覆盖内部样式；异步、禁用、错误、成功、告警和空态必须可感知。

### Usage-4 真实组件优先

业务模块必须使用真实 TDesign 组件或当前栈等价封装，不用裸 `div`、截图、图标、静态块或无语义容器伪装组件。

结构化行列数据必须使用 `Table` 和列配置实现；面包屑、按钮、标签、步骤条、表单、分页、弹窗、抽屉、空状态等已存在组件必须使用对应组件，不用图标或静态块替代。

### Usage-5 图表必须是真图表

凡需要表达趋势、对比、分布、关系、转化或占比的模块，必须接入项目已有图表库、TVision Charts 或明确的图表组件。禁止用占位框、纯矢量、自绘装饰块、截图或无关图标冒充图表。

图表容器、筛选区、加载态、空状态、错误态和说明文字仍应使用 TDesign 组件与语义 Token 组织。

### Usage-6 后台导航结构

后台管理系统、工作台、运营配置类页面必须使用标准导航组合：

- 侧边菜单：Web 用官方 `Menu + Layout` 侧栏组合。
- 顶部菜单：Web 用官方顶部导航或 `Menu.HeadMenu` 等价组合。
- 并存约束：侧边导航与顶部导航一般不同页并存；如必须并存，全页仅保留一个 Logo + 系统名称品牌位。
- Header 高度：与标准导航组合时，`Header` / `t-layout__header` 默认使用 `var(--td-comp-size-xxxl)`，通常等价 `56px`；自定义时同时设置 `height`、`min-height` 和 `flex-shrink: 0`。
- 禁止用裸 `Frame`、`div` 或无语义容器拼装整块导航替代主件。

### Usage-7 图标来源强制

设计稿缺失时，所有非 TDesign 组件内嵌的常规 UI 图标必须来自 TDesign Icons。禁止 Emoji、自绘 SVG、外部 iconfont、临时网络图标、PNG 或截图占位。

图标 `name` 必须先查权威清单，清单未收录不得自造：`https://github.com/Tencent/tdesign-icons/blob/develop/packages/view/src/manifest.js`。

### Usage-8 Web 图标渲染强制组件化

Web 代码与 HTML 产物中任何需要图标的位置，包括导航、按钮前后缀、状态提示、列表、操作入口、空状态、表格操作列，都必须通过 TDesign 图标组件渲染：

- Vue：`<t-icon name="..." />`
- React：`<Icon name="..." />` 或当前 TDesign Icons React 官方写法

图标尺寸与颜色绑定语义 Token，例如 `--td-text-color-primary`、`--td-text-color-secondary`、`--td-brand-color`，不硬编码灰阶 hex。

## 5. Design Principles 执行摘要

| 维度 | 要求 |
| --- | --- |
| 色彩 | 默认品牌色使用 TDesign 品牌语义；错误、告警、成功和品牌语义不可对调。 |
| Token 层级 | 优先使用组件 props，其次使用全局语义 Token 和组件 Token，最后才补最小业务 CSS。 |
| 字体 | 使用 TDesign 默认字体栈；标题和强调可用中等字重，正文以常规字重为主。 |
| 行高 | 优先使用组件默认行高或 `--td-line-height-*`、`--td-font-*` shorthand。 |
| 布局 | 遵循 8px 栅格思维，间距优先 4 / 8 的倍数；Web 中后台内容区常用 12 列栅格和 24px 页面安全边距。 |
| 无障碍 | 状态不只依赖颜色；焦点态可见；文本与背景对比满足可读性。 |

## 6. 交接协议

```yaml
module_id: M01
context: no-design-file
inputs_used:
  - tdesign-composition root constraints
decisions:
  - 不依赖 Figma、DESIGN.md 或截图上下文
  - 以 TDesign 官方组件、Token、场景卡和当前技术栈 API 为默认依据
  - 遵守 Usage 1-8 全部红线
artifacts:
  - 无设计文件页面生成根约束
risks:
  - 像素级还原不可用；需用户补充设计稿或截图后另行处理
next_module: M02
```
