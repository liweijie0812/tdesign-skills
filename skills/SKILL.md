---
name: skills
description: 当用户询问 TDesign skills 集合本身、skills 目录索引或可用 skill 列表时使用。普通 TDesign 组件任务走 tdesign-skills 或更窄的专项 skill。
---

# TDesign Skills 索引

本文件是 TDesign skill collection 的目录索引，同时也是合法的根索引 skill。完整安装 collection 时，普通业务项目的 TDesign 任务优先从 `tdesign-skills/SKILL.md` 进入，再按任务路由到更窄的专项 skill；选择性安装时，已安装的专项 skill 必须依靠自身内联护栏独立工作。完整 collection 下的路由规则与职责边界维护在 `tdesign-skills/references/responsibility-map.md` 与 `tdesign-skills/references/constraints.md`，本文件不重复。

## 入口

- 总入口：`tdesign-skills/SKILL.md`
- 仓库总说明：`../README.md`
- 职责边界：`tdesign-skills/references/responsibility-map.md`
- 强制约束：`tdesign-skills/references/constraints.md`

## 技能列表

| Skill | 职责 | 入口 |
| --- | --- | --- |
| `tdesign-skills` | 总入口、依赖识别、技术栈识别、任务路由 | `tdesign-skills/SKILL.md` |
| `tdesign-docs` | 文档入口、组件覆盖矩阵、跨端共享契约 | `tdesign-docs/SKILL.md` |
| `tdesign-usage-guide` | 组件选型、相似组件、反模式和降级策略 | `tdesign-usage-guide/SKILL.md` |
| `tdesign-composition` | 页面级组合、设计规范、Design Token、场景卡和质量门禁 | `tdesign-composition/SKILL.md` |
| `tdesign-icons` | 图标名、关键词、分类、包名和导入方式 | `tdesign-icons/SKILL.md` |
| `tdesign-changelog` | 版本能力、新增、修复、废弃和 Breaking Changes 查询 | `tdesign-changelog/SKILL.md` |
| `tdesign-react` | `tdesign-react` API、JSX 写法和示例 | `tdesign-react/SKILL.md` |
| `tdesign-vue-next` | `tdesign-vue-next` API、Vue 3 写法和示例 | `tdesign-vue-next/SKILL.md` |
| `tdesign-vue2` | `tdesign-vue` API、Vue 2 写法和示例 | `tdesign-vue2/SKILL.md` |
| `tdesign-mobile-react` | `tdesign-mobile-react` API 和示例 | `tdesign-mobile-react/SKILL.md` |
| `tdesign-mobile-vue` | `tdesign-mobile-vue` API 和示例 | `tdesign-mobile-vue/SKILL.md` |
| `tdesign-miniprogram` | `tdesign-miniprogram` API、WXML 写法和示例 | `tdesign-miniprogram/SKILL.md` |
| `tdesign-uniapp` | `tdesign-uniapp` API、easycom 写法和示例 | `tdesign-uniapp/SKILL.md` |

## 加载方式

- 所有可加载 skill 都位于 `skills/<name>/SKILL.md`。
- `skills/SKILL.md` 是集合索引，只在用户询问 collection 本身时使用。
- 仓库不维护 `skills/` 外层的同名 skill 副本；若安装工具在目标目录生成副本，应以本目录内容为源并通过本文件说明同步关系。

## 约束

- 本索引文件保留为 `SKILL.md`，因此必须带合法 frontmatter，且 `name` 必须等于目录名 `skills`。
- 每个 skill 的 `name` 必须与目录名一致。
- 选择规则与交接流程见 `tdesign-skills/SKILL.md` 和 `tdesign-skills/references/constraints.md`，不在本文件重复。
