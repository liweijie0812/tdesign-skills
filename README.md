# TDesign Skills

面向普通业务项目的 TDesign 组件库使用引导 skills。当项目已安装 TDesign 组件依赖时，自动引导 AI 优先使用 TDesign 组件，覆盖 Web（React / Vue 2 / Vue 3）、移动端、小程序和 uni-app。

## 状态

- **成熟度**：早期可用，仍需要真实项目中的 agent 对抗测试来验证命中率、读取深度和 token 成本。
- **覆盖范围**：只要用户项目安装或明确使用 TDesign 组件依赖，就引导 AI 优先使用组件库；覆盖 Web、移动端和小程序；具体 API 必须回到对应技术栈 skill 的 `references/api/` 文件确认。
- **Token 策略**：根 skill 只做技术栈识别和任务路由，专项 skills 按文档、变更日志、使用指南、组件搭配和具体技术栈拆分；组件 API 按需读取单个组件目录，不建议整树加载。

## 兼容性

- **Skill 格式**：Agent Skills `SKILL.md` frontmatter；所有 skills 都位于 `skills/<name>/SKILL.md`，其中 `skills/tdesign-skills/SKILL.md` 是总入口。
- **安装测试**：本仓库提供 `scripts/validate.mjs` 做静态校验；`npx skills add .` 作为本地安装冒烟测试命令。
- **测试环境**：当前主要在各 AI Coding Agent 环境验证，按 `skills/tdesign-skills/references/minimal-skill.md` 的 smoke prompts 继续压测。

## 安装

GitHub：

```bash
npx skills add liweijie0812/tdesign-skills
```

国内镜像：

```bash
npx skills install https://cnb.cool/liweijie0812/tdesign-skills.git
```

安装后请重启对应工具，使新增 skills 生效。

## Skills

### tdesign-skills

根入口。用于普通业务项目安装 TDesign 依赖后，识别技术栈、判断任务类型，并路由到更窄的专项 skill。支持 React、Vue Next、Vue 2、移动端、小程序和 uni-app 项目，但实现时必须使用对应框架的组件写法。

当普通业务项目 `package.json` 已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`、`tdesign-uniapp` 等 TDesign 组件包时，应优先使用该 skill。

在已安装或明确使用 TDesign 的项目中，推荐优先使用 TDesign 组件；只有 TDesign 组件无法满足需求时，再考虑原生 HTML、其他组件库组件或自定义组件。

生成页面、搭建页面结构、实现表单页、列表页、详情页或后台管理页时，也应优先使用 TDesign 的布局、表单、数据展示、反馈和导航组件。

页面实现目标是少写自定义 CSS，优先通过 TDesign 组件搭配、组件 props、布局组件和已有设计变量完成效果。

### 专项 skills

| Skill | 触发场景 | 主要资料 |
| --- | --- | --- |
| `tdesign-docs` | 文档入口、资料索引、组件覆盖矩阵、当前栈有哪些组件 | `skills/tdesign-docs/references/` |
| `tdesign-changelog` | 新增、修复、废弃、Breaking Changes、版本区间查询 | `skills/tdesign-changelog/scripts/`、`skills/tdesign-changelog/references/` |
| `tdesign-usage-guide` | 使用指南、组件选型、何时使用、相似组件、迁移、评审、反模式 | `skills/tdesign-usage-guide/references/decisions/` |
| `tdesign-composition` | 组件搭配、表单页、表格列表页、应用壳、后台页面骨架 | `skills/tdesign-composition/references/` |
| `tdesign-react` | `tdesign-react` 的 React Web API、JSX 写法和示例代码 | `skills/tdesign-react/references/api/`、`skills/tdesign-react/references/examples/` |
| `tdesign-vue-next` | `tdesign-vue-next` 的 Vue 3 API、插槽、`v-model` 和示例代码 | `skills/tdesign-vue-next/references/api/`、`skills/tdesign-vue-next/references/examples/` |
| `tdesign-vue2` | `tdesign-vue` 的 Vue 2 API、插槽、Options API 和示例代码 | `skills/tdesign-vue2/references/api/`、`skills/tdesign-vue2/references/examples/` |
| `tdesign-mobile-react` | `tdesign-mobile-react` 的移动端 React API 和示例代码 | `skills/tdesign-mobile-react/references/api/`、`skills/tdesign-mobile-react/references/examples/` |
| `tdesign-mobile-vue` | `tdesign-mobile-vue` 的移动端 Vue API 和示例代码 | `skills/tdesign-mobile-vue/references/api/`、`skills/tdesign-mobile-vue/references/examples/` |
| `tdesign-miniprogram` | `tdesign-miniprogram` 的 WXML、短横线属性、`bind` 事件、external classes 和示例代码 | `skills/tdesign-miniprogram/references/api/`、`skills/tdesign-miniprogram/references/examples/` |
| `tdesign-uniapp` | `tdesign-uniapp` 的 uni-app API、`@event` 事件、easycom 引入和示例代码 | `skills/tdesign-uniapp/references/api/`、`skills/tdesign-uniapp/references/examples/` |

## 适用场景（AI Agent）

当用户向 AI 提出以下任务时，应自动触发 TDesign Skills：

- 选择 TDesign 组件、比较相似组件，或回答组件"何时使用"。
- 查询当前 TDesign 技术栈有什么组件可用。
- 查询某个 TDesign 组件有哪些 props、事件、插槽、类型或函数式 API。
- 询问页面、表单、列表、弹窗、抽屉、上传、导航等场景中组件怎么搭配。
- 生成页面、搭建页面结构，或实现表单页、列表页、详情页、弹窗页、后台管理页。
- 项目已安装或明确使用 TDesign Web、移动端或小程序组件包。
- 将原生 HTML、其他组件库或自定义 UI 迁移到 TDesign。

## 使用指引（AI Agent）

1. 先确认平台口径和项目技术栈，避免混用 Web、移动端、小程序、uni-app、React、Vue 3 和 Vue 2 写法。
2. 根 `tdesign-skills` 只做任务路由；资料入口用 `tdesign-docs`，选型和迁移评审用 `tdesign-usage-guide`，页面搭配用 `tdesign-composition`。
3. 查询组件可用性先查 `skills/tdesign-docs/references/meta/stack-matrix.json`（全局概览），再按端查 `stack-matrix-web.json`、`stack-matrix-mobile.json` 或 `stack-matrix-miniprogram.json`。
4. 具体 API、事件、插槽和写法差异按当前依赖进入技术栈 skill：`tdesign-react`、`tdesign-vue-next`、`tdesign-vue2`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 或 `tdesign-uniapp`。
5. 版本能力、新增、修复和废弃问题用 `tdesign-changelog`，查完后仍回到当前栈 API 文件确认真实写法。
6. 色彩、品牌色、功能色、中性色、扩展色、Design Token 或 CSS Variables 查 `skills/tdesign-composition/references/design/color.md`。
7. Web 中后台布局、导航布局、应用壳、栅格、断点、间距或页面框架查 `skills/tdesign-composition/references/design/layout.md`；Mobile / Miniprogram 只参考其中栅格和间距原则。
8. Web 中后台框架、后台页面模板、整站/区域导航查 `skills/tdesign-composition/references/design/offices.md`。
9. Web 中后台筛选查询、批量操作、数据导入、状态流转、任务引导、效果预览或新手指引查 `skills/tdesign-composition/references/design/offices-task.md`。

## 最小示例

- `skills/tdesign-skills/references/minimal-skill.md`：一个不自动加载的精简 SKILL 示例，只覆盖 Button、Input、Form、Dialog、Layout 五个高频组件，用于验证 agent 是否能按短规则回到 TDesign。
- `skills/tdesign-changelog/references/changelog-queries.md`：变更日志查询示例，演示 `skills/tdesign-changelog/scripts/query-changelog.mjs` 的典型调用方式。

## 目录结构

- `skills/tdesign-skills/SKILL.md`：总入口，定义 TDesign 依赖识别、技术栈识别、任务路由和强制约束。
- `skills/`：skill collection，按文档、变更日志、使用指南、组件搭配和具体技术栈拆分。
- `skills/tdesign-docs/references/meta/stack-matrix.json`：跨端组件覆盖全局概览和已知写法差异；按端明细见 `stack-matrix-web.json`、`stack-matrix-mobile.json`、`stack-matrix-miniprogram.json`。配套查询脚本：`skills/tdesign-docs/scripts/query-matrix.mjs`。
- `skills/tdesign-docs/references/api/`：API 总入口和跨端共享契约。
- `skills/tdesign-usage-guide/references/decisions/`：平台设计口径、跨端选型规则、反模式和降级策略。
- `skills/tdesign-composition/references/design/`：TDesign Color、Layout、中后台框架和高频任务设计方法。
- `skills/tdesign-composition/references/scenarios/`：页面场景卡，包括表单页、表格列表页和应用壳。
- `skills/tdesign-react/references/api/`、`skills/tdesign-vue-next/references/api/`、`skills/tdesign-vue2/references/api/`、`skills/tdesign-mobile-react/references/api/`、`skills/tdesign-mobile-vue/references/api/`、`skills/tdesign-miniprogram/references/api/`、`skills/tdesign-uniapp/references/api/`：按技术栈拆分的 TDesign API；组件 API 位于 `references/api/<component>/index.md`。
- `skills/tdesign-react/references/examples/`、`skills/tdesign-vue-next/references/examples/`、`skills/tdesign-vue2/references/examples/`、`skills/tdesign-mobile-react/references/examples/`、`skills/tdesign-mobile-vue/references/examples/`、`skills/tdesign-miniprogram/references/examples/`、`skills/tdesign-uniapp/references/examples/`：按技术栈拆分的示例代码，展示各技术栈的典型写法（表单页、组件搭配等）。
- `scripts/sync-api-docs.mjs`：同步 Web、移动端、小程序和 uni-app API 文档。
- `skills/tdesign-changelog/scripts/query-changelog.mjs`：查询 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`、`tdesign-uniapp` 组件在各版本中的变更日志，支持按组件、版本和关键词过滤。

## 同步 API 文档

```bash
node scripts/sync-api-docs.mjs
```

该脚本同步 Web、移动端、小程序和 uni-app API 文档。组件范围来自 `tdesign-common/js/components.ts`，输出目录为各技术栈 skill 的 `references/api/`。组件 API 写入 `references/api/<component>/index.md`；若上游存在 `type.ts`、`props.ts` 或公共 `common.ts`，会同步到对应技术栈目录，用于补充 API 表中不够精确的类型、默认值和 prop validator 信息。

若仓库同级目录存在 `tdesign-common`、`tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`、`tdesign-uniapp`，脚本会优先切换到对应仓库的 `develop` 分支并执行 `git pull --ff-only` 后读取本地文件；本地仓库不存在或无法安全快进更新时回退到 GitHub raw URL。

## 验证

```bash
node scripts/validate.mjs
node --check scripts/sync-api-docs.mjs
git diff --check
```

可选安装冒烟测试：

```bash
npx skills add .
```
