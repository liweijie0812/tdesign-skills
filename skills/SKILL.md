---
name: skills
description: Use ONLY when the user asks about the TDesign skills collection itself, the skills directory index, available TDesign skills, or how these skills are organized. Do not use for normal TDesign component implementation; route those tasks through tdesign-skills or a narrower TDesign skill.
---

# TDesign Skills 索引

本文件是 TDesign skill collection 的目录索引，同时也是合法的根索引 skill。普通 TDesign 组件实现任务应优先进入 `tdesign-skills/SKILL.md` 或更窄的专项 skill。

## 入口

- 总入口：`tdesign-skills/SKILL.md`
- 目录维护说明：`README.md`
- 仓库总说明：`../README.md`
- 职责边界：`tdesign-skills/references/responsibility-map.md`

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

## 选择规则

- 普通 TDesign 任务先用 `tdesign-skills` 识别技术栈和任务类型。
- 资料位置、覆盖矩阵和来源链接用 `tdesign-docs`。
- 组件选型、相似组件、迁移和代码评审用 `tdesign-usage-guide`。
- 页面搭建、后台页面骨架、设计规范和生成后自检用 `tdesign-composition`。
- 图标名检索用 `tdesign-icons`；版本历史和 changelog 用 `tdesign-changelog`。
- 具体 props、事件、插槽和代码写法回到当前技术栈 skill。

## 约束

- 本索引文件保留为 `SKILL.md`，因此必须带合法 frontmatter，且 `name` 必须等于目录名 `skills`。
- 每次只选择 1 个主责 skill，再按需读取其他 skill 的少量参考资料。
