# TDesign 生成质量门禁

用于页面生成、页面改造或视觉走查后的自动化检查。此门禁不能替代当前项目的 lint / test，但可拦截最常见的 TDesign 规范偏离。

## 使用方式

```bash
node <tdesign-composition-skill-dir>/scripts/check-quality.mjs <file-or-directory> [...more]
```

示例：

```bash
node skills/tdesign-composition/scripts/check-quality.mjs src/views/admin
node skills/tdesign-composition/scripts/check-quality.mjs src/pages/dashboard.vue src/pages/users.vue
```

## 检查项

| 编号 | 级别 | 检查 | 处理建议 |
| --- | --- | --- | --- |
| `DS-002` | error | CSS 中出现硬编码 hex / rgba 颜色 | 改用 `--td-*` 语义 Token |
| `DS-003` | warn | CSS 中出现硬编码 px 间距、字号、圆角 | 改用 `--td-size-*`、`--td-comp-*`、`--td-font-*`、`--td-radius-*` |
| `DS-004` | error | Header 类样式缺少 `height`、`min-height`、`flex-shrink: 0` 任一项 | 使用 `var(--td-comp-size-xxxl)` 并补齐三项 |
| `DS-006` | error | 出现删除 / 禁用 / 下线 / 清空等危险操作但没有确认组件 | 使用 `Popconfirm`、`Dialog` 或当前栈等价确认组件 |
| `DS-007` | warn | 出现 `Table` / 列表数据区域但没有空状态或加载态线索 | 补 `Empty`、`loading`、`Skeleton` 或失败态 |
| `DS-008` | error | 出现 Emoji、自绘 SVG、外部 iconfont 或临时图标图片 | 使用 TDesign Icons，并先查 manifest |

## 与 checklist 的关系

- 结构化规则源：`references/design/checklist.json`。
- 质量门禁脚本：`scripts/check-quality.mjs`，路径相对当前 `tdesign-composition` skill 目录。
- 人工自检补充：`references/design/design-spec.md` 的“交付前自检”。

## 局限

- 脚本按静态文本扫描，不理解业务语义和运行时分支。
- 误报时优先修正文档或代码表达，不建议直接绕过。
- Mobile / Miniprogram 不套用 Web Header、Table 和 Menu 规则；跨端页面按当前端组件 API 和项目规范确认。
