# TDesign Skills

面向普通业务项目的 TDesign 组件库使用引导 skill。

## 状态

- Maturity：早期可用，仍需要真实项目中的 agent 对抗测试来验证命中率、读取深度和 token 成本。
- Scope：只要用户项目安装或明确使用 TDesign 组件依赖，就引导 AI 优先使用组件库；覆盖 Web、移动端和小程序；具体 API 必须回到对应 `api/<stack>/` 文件确认。
- Token policy：主 skill 只放决策流程和常用闭环，组件 API 按需读取单个组件目录，不建议整树加载。

## Compatibility

- Skill format：Agent Skills / opencode `SKILL.md` frontmatter，`name` 为 `tdesign-skills`。
- Tested install：本仓库提供 `scripts/validate.mjs` 做静态校验；`npx skills add .` 作为本地安装烟测命令。
- Tested agents：当前主要在 opencode 环境验证；Claude Code、Cursor 等 agent 需要按 `examples/minimal-skill.md` 的 smoke prompts 继续压测。

## 安装

```bash
npx skills add liweijie0812/tdesign-skills
```

安装后请重启 opencode，使新增 skills 生效。

## Skill

### tdesign-skills

用于普通业务项目安装 TDesign 依赖后，引导 AI 优先使用 TDesign 组件库完成 UI 实现、组件选型、组件“何时使用”、可用组件查询、API 查询、组件搭配，以及既有 UI 方案迁移到 TDesign 的场景。支持 React、Vue Next、Vue 2、移动端和小程序项目，但实现时必须使用对应框架的组件写法。

当普通业务项目 `package.json` 已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 等 TDesign 组件包时，应优先使用该 skill。

在已安装或明确使用 TDesign 的项目中，推荐优先使用 TDesign 组件；只有 TDesign 组件无法满足需求时，再考虑原生 HTML、其他组件库组件或自定义组件。

生成页面、搭建页面结构、实现表单页、列表页、详情页或后台管理页时，也应优先使用 TDesign 的布局、表单、数据展示、反馈和导航组件。

页面实现目标是少写自定义 CSS，优先通过 TDesign 组件搭配、组件 props、布局组件和已有设计变量完成效果。

## 何时使用

- 选择 TDesign 组件、比较相似组件，或回答组件“何时使用”。
- 查询当前 TDesign 技术栈有什么组件可用。
- 查询某个 TDesign 组件有哪些 props、事件、插槽、类型或函数式 API。
- 询问页面、表单、列表、弹窗、抽屉、上传、导航等场景中组件怎么搭配。
- 生成页面、搭建页面结构，或实现表单页、列表页、详情页、弹窗页、后台管理页。
- 项目已安装或明确使用 TDesign Web、移动端或小程序组件包。
- 将原生 HTML、其他组件库或自定义 UI 迁移到 TDesign。

## 如何使用

1. 先确认平台口径和项目技术栈，避免混用 Web、移动端、小程序、React、Vue Next 和 Vue 2 写法。
2. 查询组件可用性先查 `meta/stack-matrix.json`，按当前栈读取组件覆盖范围。
3. 组件选型先查 `decisions/platform-design-policy.md`；Web 查 `decisions/web/component-usage-map.md` 和 `decisions/web/similar-components.md`，移动端和小程序查 `decisions/mobile/component-usage-map.md` 和 `decisions/mobile/similar-components.md`。
4. 组件搭配按端查 `decisions/web/component-composition-map.md` 或 `decisions/mobile/component-composition-map.md`，页面搭建再查 `scenarios/`。
5. API、事件、插槽和写法差异按当前栈查 `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/` 或 `api/miniprogram/`。
6. 色彩、品牌色、功能色、中性色、扩展色、Design Token 或 CSS Variables 查 `design/color.md`。
7. Web 中后台布局、导航布局、应用壳、栅格、断点、间距或页面框架查 `design/layout.md`；Mobile / Miniprogram 只参考其中栅格和间距原则。
8. Web 中后台框架、后台页面模板、整站/区域导航查 `design/offices.md`。
9. Web 中后台筛选查询、批量操作、数据导入、状态流转、任务引导、效果预览或新手指引查 `design/offices-task.md`。

## 最小示例

- `examples/minimal-skill.md`：一个不自动加载的精简 SKILL 示例，只覆盖 Button、Input、Form、Dialog、Layout 五个高频组件，用于验证 agent 是否能按短规则回到 TDesign。

## 目录结构

- `SKILL.md`：入口，定义触发规则、范围、目标和查阅顺序。
- `meta/stack-matrix.json`：跨 Web、移动端和小程序的组件覆盖和已知写法差异。
- `decisions/`：平台设计口径、跨端选型规则、反模式和降级策略。
- `decisions/component-composition-map.md`：组件搭配入口索引，端细节在 `decisions/web/` 和 `decisions/mobile/`。
- `decisions/similar-components.md`：相似组件选型入口索引，端细节在 `decisions/web/` 和 `decisions/mobile/`。
- `decisions/anti-patterns.md`：反模式入口索引，端细节在 `decisions/web/` 和 `decisions/mobile/`。
- `decisions/web/`：Web 设计选型、组件搭配、相似组件和反模式决策。
- `decisions/mobile/`：移动端与小程序通用设计选型、组件搭配、相似组件和反模式决策。
- `design/color.md`：TDesign Color 色彩、官方色板、语义 Token 和主题定制规则。
- `design/layout.md`：TDesign Web 中后台 Layout 布局、导航布局、栅格、断点和间距规则。
- `design/offices.md`：TDesign Web 中后台整体框架、导航分类、页面布局和模板映射。
- `design/offices-task.md`：TDesign Web 中后台高频任务流程和组件选型方向。
- `scenarios/`：页面场景卡，包括表单页、表格列表页和应用壳。
- `api/_shared/`：跨端通用契约、子组件和组合语义，按 `dialog/`、`sub-components/` 和 Web / Mobile / Miniprogram 拆分。
- `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/`、`api/miniprogram/`：按技术栈拆分的 TDesign API；组件 API 位于 `api/<stack>/<component>/index.md`，并同步上游 `type.ts` / `props.ts` / `common.ts`。
- `scripts/sync-api-docs.mjs`：同步 Web、移动端和小程序 API 文档。

## 同步 API 文档

```bash
node scripts/sync-api-docs.mjs
```

该脚本同步 Web、移动端和小程序 API 文档。组件范围来自 `tdesign-common/js/components.ts`，输出目录为 `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/`、`api/miniprogram/`。组件 API 写入 `api/<stack>/<component>/index.md`；若上游存在 `type.ts`、`props.ts` 或公共 `common.ts`，会同步到对应技术栈目录，用于补充 API 表中不够精确的类型、默认值和 prop validator 信息。

若仓库同级目录存在 `tdesign-common`、`tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram`，脚本会优先切换到对应仓库的 `develop` 分支并执行 `git pull --ff-only` 后读取本地文件；本地仓库不存在或无法安全快进更新时回退到 GitHub raw URL。

## 验证

```bash
node scripts/validate.mjs
node --check scripts/sync-api-docs.mjs
git diff --check
```

可选安装烟测：

```bash
npx skills add .
```
