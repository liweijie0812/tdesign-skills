# TDesign Skills

面向 TDesign 组件使用规范的 skills 集合。

## 安装

```bash
npx skills add liweijie0812/tdesign-skills
```

安装后请重启 opencode，使新增 skills 生效。

## Skills

### tdesign-component-usage

用于 TDesign 组件选型、组件“何时使用”、相似组件比较，以及既有 UI 方案迁移到 TDesign 的场景。支持 React、Vue Next、Vue 2、移动端和小程序项目，但实现时必须使用对应框架的组件写法。

当项目 `package.json` 已安装 `tdesign-react`、`tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 等 TDesign 组件包时，也应优先使用该 skill。

在已安装或明确使用 TDesign 的项目中，推荐优先使用 TDesign 组件；只有 TDesign 组件无法满足需求时，再考虑原生 HTML、其他组件库组件或自定义组件。

生成页面、搭建页面结构、实现表单页、列表页、详情页或后台管理页时，也应优先使用 TDesign 的布局、表单、数据展示、反馈和导航组件。

页面实现目标是少写自定义 CSS，优先通过 TDesign 组件搭配、组件 props、布局组件和已有设计变量完成效果。

主要内容：

- `SKILL.md`：TDesign 组件使用主规范。
- `references/component-usage-map.md`：按 TDesign 组件整理的“何时使用”。
- `references/api/`：按 Web 技术栈拆分的 TDesign API Markdown，包含 `react/`、`vue-next/`、`vue/`。
- `references/sub-components.md`：TDesign 子组件、插槽和组合配置“何时使用”，包含 React 与 Vue 写法差异提醒。
- `references/similar-components.md`：常见相似组件选型规则。
- `references/source-links.md`：TDesign 上游文档来源。

## 同步 Web API 文档

```bash
node tdesign-component-usage/scripts/sync-web-api-docs.mjs
```

该脚本只同步 Web 端 API 文档：`tdesign-react`、`tdesign-vue-next`、`tdesign-vue`。移动端和小程序 API 文档后续单独规划。
