# Changelog 查询示例

用于快速演示 `scripts/query-changelog.mjs` 的典型调用方式，方便在 skill 或人工排查时直接复用。

## 常见命令

```bash
node scripts/query-changelog.mjs --stack react --component Button
node scripts/query-changelog.mjs --stack vue-next --component Alert --version 1.14.0 --json
node scripts/query-changelog.mjs --stack mobile-vue --component Form --keyword readonly
node scripts/query-changelog.mjs --stack miniprogram --component Upload --since 1.13.0 --until 1.15.0
node scripts/query-changelog.mjs --stack mobile-react --component Dialog --category breaking
```

## 适用问题

- 某个组件能力是哪个版本新增的
- 某个属性或行为在哪个版本修复了
- 是否出现 `Breaking Changes`、废弃提示或迁移提醒
- 指定版本区间内该组件经历了哪些变化
- 只看 `Features`、`Bug Fixes` 或 `Breaking Changes` 某一类变更

## 使用建议

- 先用 `--component` 查组件整体变更，再按需要补 `--version`、`--since`、`--until`、`--category` 或 `--keyword`。
- 查到版本线索后，仍要回到 `api/<stack>/<component>/index.md` 确认当前真实写法。
- 组件名查不到时，脚本会给出候选组件名，可直接改用建议名称重试。
