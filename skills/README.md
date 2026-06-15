# TDesign Skills Collection

本目录是 TDesign skill collection 的唯一源目录。普通业务项目的 TDesign 任务应从 `tdesign-skills/` 进入，再按任务路由到更窄的专项 skill。

## 目录职责

| 目录 | 职责 |
| --- | --- |
| `tdesign-skills/` | 总入口、依赖识别、技术栈识别、任务路由 |
| `tdesign-docs/` | 文档入口、组件覆盖矩阵、跨端共享契约 |
| `tdesign-usage-guide/` | 组件选型、相似组件、反模式和降级策略 |
| `tdesign-composition/` | 页面级组合、设计规范、Design Token、场景卡和质量门禁 |
| `tdesign-icons/` | 图标名、关键词、分类和 manifest 检索 |
| `tdesign-changelog/` | 版本能力、新增、修复、废弃和 Breaking Changes 查询 |
| `tdesign-react/` | `tdesign-react` API、JSX 写法和示例 |
| `tdesign-vue-next/` | `tdesign-vue-next` API、Vue 3 写法和示例 |
| `tdesign-vue2/` | `tdesign-vue` API、Vue 2 写法和示例 |
| `tdesign-mobile-react/` | `tdesign-mobile-react` API 和示例 |
| `tdesign-mobile-vue/` | `tdesign-mobile-vue` API 和示例 |
| `tdesign-miniprogram/` | `tdesign-miniprogram` API、WXML 写法和示例 |
| `tdesign-uniapp/` | `tdesign-uniapp` API、easycom 写法和示例 |

## 加载方式

- 所有可加载 skill 都位于 `skills/<name>/SKILL.md`。
- `skills/SKILL.md` 是集合索引，只在用户询问 collection 本身时使用。
- 仓库不维护 `skills/` 外层的同名 skill 副本；若安装工具在目标目录生成副本，应以本目录内容为源并通过 README 说明同步关系。

## 维护规范

- 每个 skill 的 `name` 必须与目录名一致。
- 每次只选择 1 个主责 skill，再按需读取其他 skill 的少量参考资料。
- 页面生成先走 `tdesign-composition` 的场景卡和设计规范，再回到当前技术栈 API skill 落地代码。
- Web 中后台页面生成必须读取 `tdesign-composition/references/design/checklist.json`，生成后按 `tdesign-composition/references/quality-gate.md` 执行自检。
