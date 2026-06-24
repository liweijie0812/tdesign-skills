---
name: tdesign-changelog
description: 当用户询问 TDesign 某组件能力在哪个版本新增、修复、废弃、Breaking Changes、迁移提示，或需要按版本、组件、关键词查询 changelog 时使用。只负责版本历史线索；不负责当前 API 形状、默认值或代码写法。
---

# TDesign 变更日志查询

本 skill 用于确认 TDesign 组件的版本变化，不替代当前技术栈 API 文件。如果同目录存在 `../tdesign-skills/references/constraints.md`，可参考它获取更详细的跨 skill 约束。

## 适用问题

- 某个组件能力是哪个版本新增的。
- 某个属性、事件或行为在哪个版本修复了。
- 是否存在 Breaking Changes、废弃提示或迁移提醒。
- 指定版本区间内某组件经历了哪些变化。
- 只查询 Features、Bug Fixes、Breaking Changes 等类别。

## 查询命令

```bash
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack react --component Button
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack vue-next --component Alert --version 1.14.0 --json
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack mobile-vue --component Form --keyword readonly
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack miniprogram --component Upload --since 1.13.0 --until 1.15.0
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack uniapp --component Upload --since 0.5.0 --until 0.10.0
node skills/tdesign-changelog/scripts/query-changelog.mjs --stack mobile-react --component Dialog --category breaking
```

## 参数

- `--stack`：`react`、`vue-next`、`vue2`、`mobile-react`、`mobile-vue`、`miniprogram`、`uniapp`。
- `--component`：组件名，区分大小写，例如 `Button`、`Upload`。
- `--version`：精确版本。
- `--since` / `--until`：版本区间。
- `--category`：按变更类别过滤。
- `--keyword`：按关键词过滤 markdown 变更项。
- `--limit`：最大输出条数，默认 `5`；如需查看更多历史记录可增大此值。
- `--json`：输出原始匹配 JSON。

更多典型查询示例查 `references/changelog-queries.md`。

## 约束

- 查到版本线索后，仍要回到对应技术栈 skill 的 `references/api/<component>/index.md` 确认真实写法，因为 changelog 只记录变更摘要，不含完整 API 形状。
- 不用 changelog 反推 API 形状、默认值或事件名，因为 changelog 描述可能省略上下文。
- 只判断版本变化，不替代 `tdesign-docs` 的组件覆盖矩阵。
- 组件名查不到时，使用脚本返回的候选组件名重试。
- 完整 collection 模式下，详细职责表、跨栈隔离细则和强制约束可参考 `../tdesign-skills/references/constraints.md`；未安装时按本文件内联规则执行。
