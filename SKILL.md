---
name: tdesign-skills
description: 当需要选择 TDesign 组件、回答组件“何时使用”、比较相似组件、生成页面、搭建页面结构、实现 Vue/Vue3/Vue2/React 表单页、列表页、详情页、弹窗页、后台管理页，或 package.json 已安装 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram 等 TDesign 组件包时使用。优先读取 decisions、scenarios、api 和 meta。
---

# TDesign 组件使用规范

当用户询问 TDesign 组件选型、组件“何时使用”、相似组件差异、UI 组合方式，或从既有 UI 方案迁移到 TDesign 时，使用本 skill。若当前项目的 `package.json` 中已安装 TDesign 组件包，也应优先按本规范进行组件选型和实现判断。

当用户要求生成页面、搭建页面结构、实现表单页、列表页、详情页、弹窗页或后台管理页时，如果项目已安装或明确使用 TDesign，应优先使用 TDesign 组件完成页面实现。

## 范围与成熟度

- Scope：覆盖 Web、移动端和小程序；Web 包含 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`，移动端包含 `tdesign-mobile-react`、`tdesign-mobile-vue`，小程序包含 `tdesign-miniprogram`。
- Maturity：当前仍处于早期验证阶段。必须用当前项目代码和对应 `api/<stack>/` 文件确认具体写法，不把本 skill 的通用规则当作最终 API。
- Token 约束：不要一次性读取整个 `api/` 树。先读 `decisions/`、`scenarios/` 和 `api/_shared/index.md`，只有需要具体 props、事件、插槽或类型时才读取单个组件目录。

## 快速闭环

- `Button`：用于明确操作；确认按钮文案表达结果，危险操作查当前栈 `button` 和 `dialog` API。
- `Input`：用于短文本录入；表单场景必须放进 `FormItem`，校验和错误提示优先用 `Form` 能力。
- `Form`：用于用户提交数据；字段容器、校验规则、提交事件和实例能力必须按当前栈确认。
- `Dialog`：用于强中断确认、告警和短表单；通用语义查 `api/_shared/dialog/contract.md`，端差异查 `api/_shared/dialog/`。
- `Layout`：Web 应用壳用 `Layout` / `Header` / `Aside` / `Content` / `Footer`；移动端和小程序的 `layout` 是 `Row` / `Col` 栅格，不等同 Web 应用壳。

## 何时使用

- 用户需要选择 TDesign 组件、比较相似组件，或询问某个组件“何时使用”。
- 用户要生成页面、搭建页面结构，或实现表单页、列表页、详情页、弹窗页、后台管理页。
- 当前项目已安装或明确使用 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 等组件包。
- 用户要把既有 UI、原生 HTML、其他组件库组件或自定义组件迁移到 TDesign。
- 用户要求评审 TDesign 组件使用是否合理、是否混用 API、是否过度自定义。

## 如何使用

1. 先识别任务类型、平台口径和当前技术栈，不混用 Web、移动端、小程序、React、Vue Next 和 Vue 2 写法。
2. 组件选型先查 `decisions/platform-design-policy.md`；Web 查 `decisions/web/component-usage-map.md`、`decisions/similar-components.md` 和 `decisions/when-to-use/`，移动端和小程序查 `decisions/mobile/component-usage-map.md`。
3. 页面搭建先查 `scenarios/`，按表单页、列表页、应用壳等场景选择组件组合。
4. 需要确认 props、事件、插槽、子组件或函数式调用时，再查当前栈的 `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/` 或 `api/miniprogram/`。
5. 需要判断跨栈、移动端和小程序覆盖差异时，查 `meta/stack-matrix.json` 和 `api/_shared/index.md`。
6. TDesign 不能满足需求时，按 `decisions/fallback-policy.md` 降级，并明确说明不是 TDesign 官方能力。

## 目标

- 根据用户场景推荐最合适的 TDesign 组件。
- 优先依据 TDesign 设计指南解释组件适用原因。
- 当多个组件都可能适用时，明确比较取舍。
- 把平台设计决策和场景知识放在前面，把 React、Vue Next、Vue 2、移动端和小程序写法差异下沉到 `api/`。
- 不把非 TDesign 的 API、属性或交互行为直接套用到 TDesign，除非当前栈 API 明确支持。

## 信息来源优先级

1. `decisions/platform-design-policy.md`：Web 与 Mobile 系设计指南的适用口径，小程序设计口径复用 Mobile。
2. `decisions/web/`、`decisions/mobile/` 和通用 `decisions/`：组件选型、反模式和降级策略；Web 与 Mobile 系同名组件按平台分别判断。
3. `scenarios/`：表单页、列表页、应用壳等页面级组合方案。
4. `api/_shared/`：跨端通用契约、端差异入口和组合语义，按 `dialog/`、`sub-components/` 以及 Web / Mobile / Miniprogram 拆分。
5. `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/`、`api/miniprogram/`：当前技术栈的真实 API、导入、模板、JSX 或小程序写法；组件 API 位于 `api/<stack>/<component>/index.md`，同技术栈目录下的 `type.ts` / `props.ts` / `common.ts` 是精确类型源。
6. `meta/stack-matrix.json`：跨 Web、移动端和小程序覆盖情况及已知写法差异。
7. TDesign 上游 API 文档和当前项目代码约定。

## 工作流程细则

1. 判断用户任务类型：组件选型、组件比较、迁移、实现或评审。
2. 提取交互意图：导航、数据录入、数据展示、反馈、布局或操作。
3. 如果当前项目存在 `package.json`，检查是否已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue` 或 `tdesign-miniprogram` 等 TDesign 组件包。
4. 识别当前平台是 Web 还是 Mobile 系；`tdesign-miniprogram` 的设计口径复用 Mobile，具体 API 和平台能力按小程序文档确认。
5. 识别当前框架是 React、Vue Next、Vue 2、移动端 React、移动端 Vue 还是小程序，按对应框架的组件标签、导入方式、插槽和事件命名实现，不混用 React 点语法、Vue 标签写法和小程序组件写法。
6. 优先查阅 `decisions/platform-design-policy.md`、对应平台的组件选型文档和 `decisions/anti-patterns.md`，先做平台正确的选型。
7. 若是页面搭建，查阅 `scenarios/` 中对应场景卡，确定 TDesign 组件组合。
8. 如果需要确认 props、事件、插槽、类型或子组件 API，按技术栈查阅 `api/react`、`api/vue-next`、`api/vue2`、`api/mobile-react`、`api/mobile-vue` 或 `api/miniprogram`；API 表不够精确时读取同技术栈目录下对应组件或子组件的 `type.ts`、`props.ts` 和公共 `common.ts`，不要跨技术栈混用 API。
9. 如果需要判断某组件是否存在于当前栈，查阅 `meta/stack-matrix.json`。
10. 如果用户要求实现代码，先确认项目技术栈和现有 TDesign 引入方式，再修改代码。
11. 只有在 TDesign 文档或项目已有用法确认后，才推荐具体 props、事件或组件组合。
12. 如果上下文预算紧张，只读取当前任务相关的 1 个场景卡、1 个决策文档和 1 个组件 API 文件。

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
- 不把 Web 设计指南直接套到移动端或小程序；小程序设计口径复用 Mobile，但 API 必须查 `api/miniprogram/`。
- 不依赖用户项目 `node_modules` 推断 TDesign 官方 API；本 skill 已同步上游 `type.ts`、`props.ts` 和 `common.ts` 时，以 `api/<stack>/` 下的源文件为准。
- Vue 项目中不要直接使用 `Layout.Aside`、`Form.FormItem` 这类 React 点语法；应使用项目已有的 Vue 标签、组件注册名或 TDesign Vue 文档写法。
- 能用轻量组件解决时，不推荐更复杂的组件。
- 不以视觉相似作为等价依据，必须按用户任务和交互成本判断。

## 关键参考

- `decisions/when-to-use/`：高频相似组件取舍。
- `decisions/platform-design-policy.md`：Web、Mobile 系和小程序设计口径。
- `decisions/web/component-usage-map.md`：Web 组件“何时使用”。
- `decisions/mobile/component-usage-map.md`：移动端和小程序通用“何时使用”。
- `decisions/similar-components.md`：常见相似组件选型规则。
- `decisions/anti-patterns.md`：全局禁止项。
- `decisions/fallback-policy.md`：不用 TDesign 时的统一降级口径。
- `scenarios/`：页面级组件组合方案。
- `api/index.md`：Web、移动端和小程序分技术栈 API 文档索引；组件 API 位于 `api/<stack>/<component>/index.md`，类型源文件同步在同技术栈目录。
- `api/_shared/index.md`：跨端通用契约和端差异入口。
- `meta/stack-matrix.json`：跨 Web、移动端和小程序组件覆盖矩阵。
- `meta/source-links.md`：上游文档来源链接。
