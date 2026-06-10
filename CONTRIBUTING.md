# Contributing

## Scope

- 组件选型、场景规则和反模式优先改 `decisions/` 与 `scenarios/`。
- 具体 props、事件、插槽和类型不要手写到 `SKILL.md`，应通过 `scripts/sync-api-docs.mjs` 同步到 `api/<stack>/`。
- 跨端语义和端差异入口放在 `api/_shared/`，不要把 Web、Mobile 和 Miniprogram API 混写。

## Sync Policy

- 建议每 2 到 4 周同步一次 TDesign API，或在 TDesign 上游发布重要组件/API 变更后同步。
- 同步命令：`node scripts/sync-api-docs.mjs`。
- 同步后检查 `meta/source-links.md` 的 Last sync 和 observed commit。
- 如果本地同级 TDesign 仓库无法 fast-forward，脚本会回退 GitHub raw URL；不要在同步脚本里自动 merge 或 rebase 上游仓库。

## Validation

```bash
node scripts/validate.mjs
node --check scripts/sync-api-docs.mjs
git diff --check
```

可选安装烟测：

```bash
npx skills add .
```

## Pull Requests

- PR 可以提交 `component-usage-map`、`decisions/`、`scenarios/` 和 `_shared` 的补丁。
- API 文档、`type.ts`、`props.ts`、`common.ts` 应由同步脚本生成，避免手工改动大批生成文件。
- 新增规则必须说明适用平台：Web、Mobile、Miniprogram 或全部。
- 如果规则来自真实项目验证，建议在 PR 描述中附 prompt、agent、项目栈和失败/修复行为。
