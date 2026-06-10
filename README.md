# TDesign Skills

面向 TDesign 组件使用规范的 skill。

## 安装

```bash
npx skills add liweijie0812/tdesign-skills
```

安装后请重启 opencode，使新增 skills 生效。

## Skill

### tdesign-skills

用于 TDesign 组件选型、组件“何时使用”、相似组件比较，以及既有 UI 方案迁移到 TDesign 的场景。支持 React、Vue Next、Vue 2、移动端和小程序项目，但实现时必须使用对应框架的组件写法。

当项目 `package.json` 已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 等 TDesign 组件包时，也应优先使用该 skill。

在已安装或明确使用 TDesign 的项目中，推荐优先使用 TDesign 组件；只有 TDesign 组件无法满足需求时，再考虑原生 HTML、其他组件库组件或自定义组件。

生成页面、搭建页面结构、实现表单页、列表页、详情页或后台管理页时，也应优先使用 TDesign 的布局、表单、数据展示、反馈和导航组件。

页面实现目标是少写自定义 CSS，优先通过 TDesign 组件搭配、组件 props、布局组件和已有设计变量完成效果。

## 何时使用

- 选择 TDesign 组件、比较相似组件，或回答组件“何时使用”。
- 生成页面、搭建页面结构，或实现表单页、列表页、详情页、弹窗页、后台管理页。
- 项目已安装或明确使用 TDesign Web、移动端或小程序组件包。
- 将原生 HTML、其他组件库或自定义 UI 迁移到 TDesign。

## 如何使用

1. 先确认平台口径和项目技术栈，避免混用 Web、移动端、小程序、React、Vue Next 和 Vue 2 写法。
2. 组件选型先查 `decisions/platform-design-policy.md`；Web 查 `decisions/web/component-usage-map.md`，移动端和小程序查 `decisions/mobile/component-usage-map.md`。
3. 页面搭建先查 `scenarios/`。
4. API、事件、插槽和写法差异按当前栈查 `api/react/`、`api/vue-next/`、`api/vue2/`、`api/mobile-react/`、`api/mobile-vue/` 或 `api/miniprogram/`。
5. 跨栈覆盖和差异查 `meta/stack-matrix.json`。

## 目录结构

- `SKILL.md`：入口，定义触发规则、范围、目标和查阅顺序。
- `meta/stack-matrix.json`：跨 Web、移动端和小程序的组件覆盖和已知写法差异。
- `decisions/`：平台设计口径、跨端选型规则、反模式和降级策略。
- `decisions/web/`：Web 设计选型决策。
- `decisions/mobile/`：移动端与小程序通用设计选型决策。
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
