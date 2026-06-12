# TDesign Skills 技能索引

本目录包含 13 个 TDesign 专项技能（Skills），覆盖 React、Vue 2/3、移动端、小程序、UniApp 等全部技术栈。

## 技能分类

### 总入口 & 路由

| 技能 | 说明 |
|------|------|
| **[tdesign-skills](./tdesign-skills/SKILL.md)** | 总入口，识别技术栈和任务类型，路由到专项 skill。 |

### 跨栈通用（Meta）

| 技能 | 说明 |
|------|------|
| **[tdesign-docs](./tdesign-docs/SKILL.md)** | 文档入口、资料索引、组件覆盖矩阵。回答"资料在哪里、当前栈有什么组件、应该先读什么"。 |
| **[tdesign-usage-guide](./tdesign-usage-guide/SKILL.md)** | 使用指南与选型。回答"该选什么、为什么、什么不能做"。覆盖组件选型、相似组件比较、迁移、评审、反模式、降级策略。 |
| **[tdesign-composition](./tdesign-composition/SKILL.md)** | 组件搭配与页面场景。覆盖表单页、表格列表页、详情页、弹窗页、后台管理页、应用壳、导航布局。 |
| **[tdesign-changelog](./tdesign-changelog/SKILL.md)** | 变更日志查询。查询组件能力在哪个版本新增、修复、废弃、Breaking Changes、迁移提示。 |
| **[tdesign-icons](./tdesign-icons/SKILL.md)** | 图标检索。按关键词、分类、名称搜索 2000+ 个图标，支持 filled/outline 风格。 |

### Web 端 API

| 技能 | npm 包 | 技术栈 | 说明 |
|------|--------|--------|------|
| **[tdesign-react](./tdesign-react/SKILL.md)** | `tdesign-react` | React Web | React 组件 API、JSX 写法、props、事件、子组件、类型、导入方式。 |
| **[tdesign-vue-next](./tdesign-vue-next/SKILL.md)** | `tdesign-vue-next` | Vue 3 Web | Vue 3 Composition API、模板、插槽、v-model、事件。 |
| **[tdesign-vue2](./tdesign-vue2/SKILL.md)** | `tdesign-vue` | Vue 2 Web | Vue 2 Options API、模板、插槽、v-model 约定。 |

### 移动端 & 跨平台 API

| 技能 | npm 包 | 技术栈 | 说明 |
|------|--------|--------|------|
| **[tdesign-mobile-react](./tdesign-mobile-react/SKILL.md)** | `tdesign-mobile-react` | React Mobile | React 移动端组件 API、Hooks、移动端表单布局、Toast 反馈。 |
| **[tdesign-mobile-vue](./tdesign-mobile-vue/SKILL.md)** | `tdesign-mobile-vue` | Vue Mobile | Vue 移动端组件 API、Composition API、v-model、移动端交互。 |
| **[tdesign-miniprogram](./tdesign-miniprogram/SKILL.md)** | `tdesign-miniprogram` | 微信小程序 | WXML 写法、kebab-case 属性、`bind` 事件、external classes、`usingComponents`。 |
| **[tdesign-uniapp](./tdesign-uniapp/SKILL.md)** | `tdesign-uniapp` | UniApp | Vue SFC 模板、easycom 自动引入、`@event` 事件绑定、kebab-case 属性。 |

## 技术栈识别

根据项目 `package.json` 中的依赖快速定位对应技能：

| npm 包 | 技术栈 | 对应技能 |
|--------|--------|----------|
| `tdesign-react` | React Web | [tdesign-react](./tdesign-react/SKILL.md) |
| `tdesign-vue-next` | Vue 3 Web | [tdesign-vue-next](./tdesign-vue-next/SKILL.md) |
| `tdesign-vue` | Vue 2 Web | [tdesign-vue2](./tdesign-vue2/SKILL.md) |
| `tdesign-mobile-react` | React Mobile | [tdesign-mobile-react](./tdesign-mobile-react/SKILL.md) |
| `tdesign-mobile-vue` | Vue Mobile | [tdesign-mobile-vue](./tdesign-mobile-vue/SKILL.md) |
| `tdesign-miniprogram` | 微信小程序 | [tdesign-miniprogram](./tdesign-miniprogram/SKILL.md) |
| `tdesign-uniapp` | UniApp | [tdesign-uniapp](./tdesign-uniapp/SKILL.md) |

## 目录结构

```
skills/
├── SKILL.md                    ← 本文件（技能索引）
├── tdesign-skills/             ← 总入口（技术栈识别 + 路由）
├── tdesign-docs/               ← 文档入口与资料索引
├── tdesign-usage-guide/        ← 使用指南与选型
├── tdesign-composition/        ← 组件搭配与页面场景
├── tdesign-changelog/          ← 变更日志查询
├── tdesign-icons/              ← 图标检索
├── tdesign-react/              ← React Web API
├── tdesign-vue-next/           ← Vue 3 Web API
├── tdesign-vue2/               ← Vue 2 Web API
├── tdesign-mobile-react/       ← React Mobile API
├── tdesign-mobile-vue/         ← Vue Mobile API
├── tdesign-miniprogram/        ← 微信小程序 API
└── tdesign-uniapp/             ← UniApp API
```
