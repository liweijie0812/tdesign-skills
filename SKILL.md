---
name: tdesign-skills
description: 当需要选择 TDesign 组件、回答组件“何时使用”、比较相似组件、生成页面、搭建页面结构、实现 Vue/Vue3/Vue2/React 表单页、列表页、详情页、弹窗页、后台管理页，或 package.json 已安装 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram 等 TDesign 组件包时使用。优先读取 decisions、scenarios、api 和 meta。
---

# TDesign 组件使用规范

当用户询问 TDesign 组件选型、组件“何时使用”、相似组件差异、UI 组合方式，或从既有 UI 方案迁移到 TDesign 时，使用本 skill。若当前项目的 `package.json` 中已安装 TDesign 组件包，也应优先按本规范进行组件选型和实现判断。

当用户要求生成页面、搭建页面结构、实现表单页、列表页、详情页、弹窗页或后台管理页时，如果项目已安装或明确使用 TDesign，应优先使用 TDesign 组件完成页面实现。

## 何时使用

- 用户需要选择 TDesign 组件、比较相似组件，或询问某个组件“何时使用”。
- 用户要生成页面、搭建页面结构，或实现表单页、列表页、详情页、弹窗页、后台管理页。
- 当前项目已安装或明确使用 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 等组件包。
- 用户要把既有 UI、原生 HTML、其他组件库组件或自定义组件迁移到 TDesign。
- 用户要求评审 TDesign 组件使用是否合理、是否混用 API、是否过度自定义。

## 如何使用

1. 先识别任务类型和当前技术栈，不混用 React、Vue Next、Vue 2、移动端和小程序写法。
2. 组件选型先查 `decisions/`，尤其是 `decisions/when-to-use/`、`decisions/component-usage-map.md` 和 `decisions/similar-components.md`。
3. 页面搭建先查 `scenarios/`，按表单页、列表页、应用壳等场景选择组件组合。
4. 需要确认 props、事件、插槽、子组件或函数式调用时，再查当前栈的 `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/` 或 `api/miniprogram/`。
5. 需要判断跨栈、移动端和小程序覆盖差异时，查 `meta/stack-matrix.json` 和 `api/_shared/`。
6. TDesign 不能满足需求时，按 `decisions/fallback-policy.md` 降级，并明确说明不是 TDesign 官方能力。

## 目标

- 根据用户场景推荐最合适的 TDesign 组件。
- 优先依据 TDesign 设计指南解释组件适用原因。
- 当多个组件都可能适用时，明确比较取舍。
- 把栈无关决策和场景知识放在前面，把 React、Vue Next、Vue 2、移动端和小程序写法差异下沉到 `api/`。
- 不把非 TDesign 的 API、属性或交互行为直接套用到 TDesign，除非当前栈 API 明确支持。

## 信息来源优先级

1. `decisions/`：栈无关的组件选型、反模式和降级策略。
2. `scenarios/`：表单页、列表页、应用壳等页面级组合方案。
3. `api/_shared/`：跨栈通用契约，如 props 语义、事件语义、插槽语义。
4. `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/`、`api/miniprogram/`：当前技术栈的真实 API、导入、模板、JSX 或小程序写法。
5. `meta/stack-matrix.json`：跨 Web、移动端和小程序覆盖情况及已知写法差异。
6. TDesign 上游 API 文档和当前项目代码约定。

## 工作流程细则

1. 判断用户任务类型：组件选型、组件比较、迁移、实现或评审。
2. 提取交互意图：导航、数据录入、数据展示、反馈、布局或操作。
3. 如果当前项目存在 `package.json`，检查是否已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue` 等 TDesign 组件包。
4. 识别当前框架是 React、Vue Next、Vue 2、移动端还是小程序，按对应框架的组件标签、导入方式、插槽和事件命名实现，不混用 React 点语法、Vue 标签写法和小程序组件写法。
5. 优先查阅 `decisions/when-to-use/` 和 `decisions/anti-patterns.md`，先做栈无关选型。
6. 若是页面搭建，查阅 `scenarios/` 中对应场景卡，确定 TDesign 组件组合。
7. 如果需要确认 props、事件、插槽、类型或子组件 API，按技术栈查阅 `api/react`、`api/vue-next`、`api/vue2`、`api/mobile-react`、`api/mobile-vue` 或 `api/miniprogram`，不要跨技术栈混用 API。
8. 如果需要判断某组件是否存在于当前栈，查阅 `meta/stack-matrix.json`。
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
- 如果 TDesign 没有对应能力，按 `decisions/fallback-policy.md` 选择降级方案，并说明原因。

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

- `decisions/when-to-use/`：高频相似组件取舍。
- `decisions/component-usage-map.md`：按 TDesign 组件整理的“何时使用”。
- `decisions/similar-components.md`：常见相似组件选型规则。
- `decisions/anti-patterns.md`：全局禁止项。
- `decisions/fallback-policy.md`：不用 TDesign 时的统一降级口径。
- `scenarios/`：页面级组件组合方案。
- `api/index.md`：Web、移动端和小程序分技术栈 API 文档索引。
- `api/_shared/`：跨栈通用契约。
- `meta/stack-matrix.json`：跨 Web、移动端和小程序组件覆盖矩阵。
- `meta/source-links.md`：上游文档来源链接。
