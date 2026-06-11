---
name: tdesign-skills
description: 当用户项目安装 tdesign-react、tdesign-vue-next、tdesign-vue、tdesign-mobile-react、tdesign-mobile-vue、tdesign-miniprogram，或需要在普通业务项目中优先使用 TDesign 组件库实现 UI、查询可用组件/API、判断组件何时使用和怎么搭配时使用。优先读取 meta、decisions、scenarios 和 api。
---

# TDesign 组件库使用引导

本 skill 用于指导 AI 在普通业务项目中，只要检测到 TDesign 组件依赖，就优先使用 TDesign 组件库生成、迁移或评审 UI 代码。

核心目标：识别当前 TDesign 技术栈，知道有哪些组件可用，判断组件何时使用，按场景搭配组件，并按当前栈 API 使用真实 props、事件、插槽和类型。

## 适用范围

- 适用：普通业务项目已安装或明确使用 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`。
- 适用：用户要求组件选型、组件“何时使用”、相似组件比较、页面搭建、表单页、列表页、详情页、弹窗页、后台管理页或 UI 迁移。
- 适用：用户询问 TDesign 当前栈有什么组件可用、某个组件有哪些 API、多个组件如何组合完成页面或交互。
- 不适用：未使用 TDesign 的项目，或纯 Node、构建工具、数据处理等非 UI 实现任务。
- Maturity：当前仍处于早期验证阶段；必须用当前项目代码和对应 `api/<stack>/` 文件确认具体写法。

## 核心原则

1. 优先使用 TDesign 组件。
2. 其次使用 TDesign 布局、子组件、props、插槽和设计变量。
3. 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件，并说明不是 TDesign 官方能力。
4. 禁止无理由引入 AntD、Element Plus 或其他组件库。
5. 禁止用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力。
6. 禁止凭经验猜 props、事件、插槽、函数式调用或小程序 external classes。

## 技术栈识别规则

| 包名 | 技术栈 | 写法边界 |
| --- | --- | --- |
| `tdesign-react` | React Web | JSX、React 事件和 React 组件导入 |
| `tdesign-vue-next` | Vue 3 Web | Vue 3 模板、Composition API、Vue 事件/插槽 |
| `tdesign-vue` | Vue 2 Web | Vue 2 模板、Options API、Vue 2 插槽约定 |
| `tdesign-mobile-react` | React Mobile | 移动端 React API，不照搬 Web React |
| `tdesign-mobile-vue` | Vue Mobile | 移动端 Vue API，不照搬 Web Vue |
| `tdesign-miniprogram` | 小程序 | WXML/JS、短横线属性、bind 事件、external classes |

先检查 `package.json` 和项目已有代码，再决定技术栈。禁止混用 React 点语法、Vue 标签写法、小程序短横线属性和不同端默认值。

## 工作流程

1. 识别任务类型：选型、比较、迁移、实现、页面搭建或评审。
2. 识别平台和技术栈：Web、Mobile、Miniprogram；React、Vue Next、Vue 2、Mobile React、Mobile Vue、小程序。
3. 需要知道当前栈有什么组件可用时，先查 `meta/stack-matrix.json` 的 `coverage.byStack`、`allWebStacks`、`allMobileStacks`、`webOnly` 和 `mobileOnly`。
4. 先查选型规则：Web 查 `decisions/web/component-usage-map.md`，移动端和小程序查 `decisions/mobile/component-usage-map.md`，相似组件查 `decisions/similar-components.md`。
5. 需要组件组合方案时，先查 `decisions/component-composition-map.md`，再查具体 `scenarios/` 场景卡。
6. 色彩、品牌色、功能色、中性色、扩展色、Design Token 或 CSS Variables 问题先查 `design/color.md`。
7. Web 中后台布局、导航布局、应用壳、栅格、断点、间距或页面框架问题先查 `design/layout.md`；Mobile / Miniprogram 只参考其中栅格和间距原则。
8. Web 中后台框架、后台页面模板、整站/区域导航或上下/左右/混合布局问题先查 `design/offices.md`。
9. Web 中后台筛选查询、批量操作、数据导入、状态流转、任务引导、效果预览或新手指引先查 `design/offices-task.md`。
10. 页面搭建再查 `scenarios/`，例如表单页、表格列表页、应用壳。
11. 跨端语义先查 `api/_shared/index.md`，例如 Dialog 和子组件端差异。
12. 需要具体 props、事件、插槽、子组件、函数式调用或类型时，只读取当前栈的单个组件目录：`api/<stack>/<component>/index.md` 和同目录 `type.ts` / `props.ts` / `common.ts`。
13. 如果 TDesign 不能满足需求，按 `decisions/fallback-policy.md` 降级，并明确说明不是 TDesign 官方能力。

Token 约束：不要一次性读取整个 `api/` 树。上下文紧张时，只读 1 个场景卡、1 个决策文档和 1 个组件 API 文件。

## 常见组件速查

下表只表达组件语义，不代表所有端的真实 props 或标签名；具体写法必须查当前栈 API。

| 场景 | 优先组件 | 错误做法 |
| --- | --- | --- |
| 主操作 | `Button`，使用当前栈主按钮配置 | 手写 `.btn-primary` |
| 文本录入 | `Input` + `FormItem` | 裸 `<input>` + 自研校验 |
| 表单提交 | `Form` + `FormItem` + 内置 rules | 手写 label、错误信息和校验状态 |
| 强确认/告警/短表单 | `Dialog` | `window.confirm()` 或自研 Modal |
| 侧边编辑/详情 | `Drawer` | 把大表单塞进 `Dialog` |
| 结构化数据 | `Table` | 手写表格和分页控制 |
| 简单列表 | `List` | 手写 `ul > li` 复刻样式 |
| 页面壳 | Web `Layout`；Mobile/Miniprogram `Row` / `Col` | 手写大量 flex 布局 |
| 轻量反馈 | 当前栈支持的 `Message` / `Notification` / `Toast` | `alert()` 或第三方 toast |
| 二次确认 | 当前栈支持的 `Popconfirm` 或 `Dialog` | 所有确认都用大弹窗 |

## 能力查询规则

- 有什么组件可用：查 `meta/stack-matrix.json`，按当前栈读取 `coverage.byStack.<stack>`；不要把 Web only 组件默认用于 Mobile / Miniprogram。
- 组件何时使用：Web 查 `decisions/web/component-usage-map.md`，Mobile / Miniprogram 查 `decisions/mobile/component-usage-map.md`。
- 相似组件怎么选：查 `decisions/similar-components.md` 和 `decisions/when-to-use/`。
- 组件怎么搭配：查 `decisions/component-composition-map.md` 和 `scenarios/`。
- 有哪些 API 可用：查 `api/<stack>/<component>/index.md`；API 表不够时查同目录 `type.ts`、`props.ts`、`common.ts`。

## 五组件快速闭环

- `Button`：用于明确操作；危险操作按钮文案表达结果，例如“删除项目”。
- `Input`：用于短文本录入；表单场景必须放进 `FormItem`，校验和错误提示优先用 `Form` 能力。
- `Form`：用于用户提交数据；字段容器、校验规则、提交事件和实例能力必须按当前栈确认。
- `Dialog`：用于强中断确认、告警和短表单；通用语义查 `api/_shared/dialog/contract.md`，端差异查 `api/_shared/dialog/`。
- `Layout`：Web 应用壳用 `Layout` / `Header` / `Aside` / `Content` / `Footer`；移动端和小程序的 `layout` 是 `Row` / `Col` 栅格，不等同 Web 应用壳。

## 布局与样式规范

- 推荐使用 `Layout` / `Grid` / `Space` / `Card` / `Row` / `Col` 搭建结构。
- 推荐使用组件的 `size`、`theme`、`variant`、布局 props、插槽和设计变量控制样式。
- 色彩语义和 Design Token 规则查 `design/color.md`，优先覆盖 CSS Variables，不直接覆盖组件内部 class。
- Web 中后台布局、栅格、断点和间距规则查 `design/layout.md`，优先遵循 8px 基数、12 栅格和 TDesign 响应式断点；Mobile / Miniprogram 不套 Web 应用壳。
- Web 中后台框架先查 `design/offices.md` 选择导航和页面布局，高频任务流程查 `design/offices-task.md`。
- 只有组件组合和 props 无法满足时，才补充最小 CSS。
- 禁止手写大量 `margin`、`padding`、`flex` 复刻 TDesign 默认布局。
- 禁止覆盖 TDesign 默认样式，除非是明确的主题定制或项目已有设计系统要求。

## 表单规范

- 必须使用 `Form` + `FormItem` 组织可提交字段。
- 表单校验优先使用 TDesign 内置 rules、事件和错误展示能力。
- 禁止自研一套 label、必填星号、错误信息和校验状态，除非当前栈 API 不支持。
- 动态字段、复杂校验和实例方法必须查当前栈 `api/<stack>/form/index.md` 与 `type.ts` / `props.ts`。
- 移动端和小程序表单不要照搬 Web Form 实例、事件或插槽写法。

## 相似组件决策规则

| 对比 | 决策 |
| --- | --- |
| `Button` vs `Link` | 跳转用 `Link`，触发操作用 `Button` |
| `Dialog` vs `Drawer` | 强打断确认用 `Dialog`，保留上下文编辑/详情用 `Drawer` |
| `Table` vs `List` | 结构化多列数据用 `Table`，简单条目用 `List` |
| `Select` vs `Cascader` | 一级选择用 `Select`，层级路径选择用 `Cascader` |
| `Message` vs `Notification` | 短反馈用 `Message`，较完整通知用 `Notification` |
| `Popconfirm` vs `Dialog` | 轻量二次确认用 `Popconfirm`，高风险或复杂确认用 `Dialog` |

完整规则见 `decisions/similar-components.md` 和 `decisions/when-to-use/`。
如果当前端没有某个相似组件，按 `meta/stack-matrix.json` 和对应 `api/<stack>/` 确认后选择替代方案。

## 子组件与插槽规则

- 优先使用 TDesign 官方子组件、配置项、slots 和函数式插件。
- 禁止自行模拟 TDesign 已有子组件和插槽结构。
- React / Vue / 小程序子组件命名和 slot 写法不同，端差异见 `api/_shared/sub-components/`。
- 子组件如果有独立类型源，按真实目录读取，例如 `api/miniprogram/tab-panel/type.ts`。

## API 使用规则

- Web React：查 `api/react/<component>/index.md`。
- Web Vue Next：查 `api/vue-next/<component>/index.md`。
- Web Vue 2：查 `api/vue2/<component>/index.md`。
- Mobile React：查 `api/mobile-react/<component>/index.md`。
- Mobile Vue：查 `api/mobile-vue/<component>/index.md`。
- Miniprogram：查 `api/miniprogram/<component>/index.md`。
- API 表不够精确时，读取同目录 `type.ts` / `props.ts` 和公共 `common.ts`。
- 禁止依赖用户项目 `node_modules` 推断 TDesign 官方 API。

## 迁移场景

当用户说“把这个页面改成 TDesign”或类似需求时：

1. 识别原 UI 模式和交互意图。
2. 映射到 TDesign 组件或组件组合。
3. 保留业务逻辑，只替换 UI 实现和必要事件绑定。
4. 删除不再需要的自定义样式，保留项目级布局和业务样式。
5. 验证 props、事件、插槽、移动端/小程序写法和可访问交互差异。

## 禁止行为清单

- 不使用 TDesign 却假装用了。
- 用 `div`、原生表单、`window.confirm()` 或手写 CSS 模拟 TDesign 组件。
- 混用 AntD、Element Plus 或其他组件库，除非用户明确要求。
- 无视 `package.json` 中已安装的 TDesign 技术栈。
- 把 Web API 套到 Mobile 或 Miniprogram。
- 把 React 点语法套到 Vue 或小程序。
- 编造 TDesign 组件、props、事件、插槽、CSS Variables 或 external classes。
- 一次性加载整个 `api/` 树消耗上下文。

## 回答格式

组件选型问题建议包含：推荐组件、何时使用、为什么不用相似组件、实现注意。

迁移问题建议包含：来源 UI 模式、TDesign 目标组件、API 差异、需要验证的行为差异。

评审问题优先指出混用 API、过度自定义、重复造轮子、缺少表单/反馈/布局组件的问题。

## 关键参考

- `decisions/when-to-use/`：高频相似组件取舍。
- `decisions/platform-design-policy.md`：Web、Mobile 系和小程序设计口径。
- `decisions/web/component-usage-map.md`：Web 组件“何时使用”。
- `decisions/mobile/component-usage-map.md`：移动端和小程序通用“何时使用”。
- `decisions/component-composition-map.md`：常见页面和交互的组件搭配。
- `decisions/similar-components.md`：常见相似组件选型规则。
- `decisions/anti-patterns.md`：全局禁止项。
- `decisions/fallback-policy.md`：不用 TDesign 时的统一降级口径。
- `design/color.md`：TDesign Color 色彩、官方色板、语义 Token 和主题定制规则。
- `design/layout.md`：TDesign Web 中后台 Layout 布局、导航布局、栅格、断点和间距规则。
- `design/offices.md`：TDesign Web 中后台整体框架、导航分类、页面布局和模板映射。
- `design/offices-task.md`：TDesign Web 中后台高频任务流程和组件选型方向。
- `scenarios/`：页面级组件组合方案。
- `api/index.md`：Web、移动端和小程序分技术栈 API 文档索引；组件 API 位于 `api/<stack>/<component>/index.md`，类型源文件同步在同技术栈目录。
- `api/_shared/index.md`：跨端通用契约和端差异入口。
- `meta/stack-matrix.json`：跨 Web、移动端和小程序组件覆盖矩阵。
- `meta/source-links.md`：上游文档来源链接。

## 强制约束（不得绕过）

- 禁止在 TDesign 已提供组件的情况下手写等价实现
- 禁止通过覆盖 TDesign 样式来实现新 UI，应优先换组件或调整 props
- 涉及 Dialog / Form / Table 的用法，必须先查阅 `scenarios/` 中的场景卡
