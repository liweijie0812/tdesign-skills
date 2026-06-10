---
name: tdesign-component-usage
description: 当需要选择 TDesign 组件、回答组件“何时使用”、比较相似组件、生成页面、搭建页面结构、实现 Vue/Vue3/Vue2/React 表单页、列表页、详情页、弹窗页、后台管理页，或 package.json 已安装 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram 等 TDesign 组件包时使用。
---

# TDesign 组件使用规范

当用户询问 TDesign 组件选型、组件“何时使用”、相似组件差异、UI 组合方式，或从既有 UI 方案迁移到 TDesign 时，使用本 skill。若当前项目的 `package.json` 中已安装 TDesign 组件包，也应优先按本规范进行组件选型和实现判断。
当用户要求生成页面、搭建页面结构、实现表单页、列表页、详情页、弹窗页或后台管理页时，如果项目已安装或明确使用 TDesign，应优先使用 TDesign 组件完成页面实现。

## 目标

- 根据用户场景推荐最合适的 TDesign 组件。
- 优先依据 TDesign 设计指南解释组件适用原因。
- 当多个组件都可能适用时，明确比较取舍。
- 不把非 TDesign 的 API、属性或交互行为直接套用到 TDesign，除非确认 TDesign 支持。

## 信息来源优先级

1. `references/component-usage-map.md` 中整理的 TDesign 组件“何时使用”，以及上游 `tdesign-common/docs/web/design`。
2. 本地 Web API 文档，按当前项目技术栈选择 `references/api/react`、`references/api/vue-next` 或 `references/api/vue`。
3. TDesign 框架上游 API 文档，按当前项目技术栈选择 React、Vue Next、Vue 2、移动端或小程序对应文档。
4. 通用企业级 UI 选型经验，仅作为补充设计判断，不能作为 TDesign API 依据。
5. 当前项目代码和团队既有约定。

## 工作流程

1. 判断用户任务类型：组件选型、组件比较、迁移、实现或评审。
2. 提取交互意图：导航、数据录入、数据展示、反馈、布局或操作。
3. 如果当前项目存在 `package.json`，检查是否已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue` 等 TDesign 组件包。
4. 识别当前框架是 React、Vue Next、Vue 2、移动端还是小程序，按对应框架的组件标签、导入方式、插槽和事件命名实现，不混用 React 点语法、Vue 标签写法和小程序组件写法。
5. 优先查阅 `references/component-usage-map.md`，寻找直接对应的 TDesign 组件说明。
6. 如果需要确认 props、事件、插槽、类型或子组件 API，按技术栈查阅 `references/api/react`、`references/api/vue-next` 或 `references/api/vue`，不要跨技术栈混用 API。
7. 如果涉及子组件、插槽、表格列、表单项、函数式调用或组合配置，查阅 `references/sub-components.md`。
8. 如果多个组件都匹配，查阅 `references/similar-components.md`，说明取舍原因。
9. 如果用户要求实现代码，先确认项目技术栈和现有 TDesign 引入方式，再修改代码。
10. 只有在 TDesign 文档或项目已有用法确认后，才推荐具体 props、事件或组件组合。

## 选型原则

- 在已安装或明确使用 TDesign 的项目中，组件实现应优先使用 TDesign 组件。
- 生成页面时，优先使用 TDesign 的布局、表单、数据展示、反馈和导航组件组织页面结构。
- 生成页面时，尽量少写自定义 CSS，优先通过 TDesign 组件搭配、组件 props、布局组件和已有设计变量完成效果。
- 优先选择与用户核心任务一致的组件，而不是视觉上勉强相似的组件。
- 轻量交互优先使用轻量组件，不使用过重的弹层或复杂组件。
- 持久内容优先放在页面内，临时中断任务才使用弹层类组件。
- 只读信息优先使用数据展示组件，需要用户提交的信息使用表单或输入类组件。
- 破坏性或高后果操作需要明确确认和结果导向的操作文案。

## 回答格式

组件选型问题建议包含：

- 推荐组件：TDesign 组件名。
- 何时使用：一句话说明适用场景。
- 为什么不用其他组件：只列出确实容易混淆的替代项。
- 实现注意：关键 props、布局、可访问性或交互约束。

迁移问题建议包含：

- 来源组件或既有 UI 模式。
- TDesign 目标组件或组件组合。
- 需要调整的 API 差异。
- 需要验证的行为差异。

## 约束

- 不编造 TDesign 组件名、props、事件或能力。
- 不把非 TDesign 组件推荐为 TDesign 组件。
- 不在已有 TDesign 组件能满足需求时，优先推荐原生 HTML、其他组件库组件或自定义组件。
- 不在生成页面时绕开 TDesign 组件体系，除非 TDesign 没有对应能力或项目已有明确约束。
- 不优先通过大量自定义 CSS 复刻 TDesign 已有组件能力；只有组件组合和 props 无法满足时才补充最小 CSS。
- 当 TDesign 有自己的组件命名时，使用 TDesign 命名，例如模态对话框使用 `Dialog`。
- Vue 项目中不要直接使用 `Layout.Aside`、`Form.FormItem` 这类 React 点语法；应使用项目已有的 Vue 标签、组件注册名或 TDesign Vue 文档写法。
- 能用轻量组件解决时，不推荐更复杂的组件。
- 不以视觉相似作为等价依据，必须按用户任务和交互成本判断。

## 关键参考

- `references/component-usage-map.md`：TDesign 组件“何时使用”整理。
- `references/api/index.md`：Web 端分技术栈 API 文档索引。
- `references/sub-components.md`：TDesign 子组件、插槽和组合配置“何时使用”整理。
- `references/similar-components.md`：常见相似组件选型规则。
- `references/source-links.md`：上游文档来源链接。
