# TDesign 生成质量门禁

用于页面生成、页面改造或视觉走查后的自动化检查。此门禁不能替代当前项目的 lint / test，但可拦截最常见的 TDesign 规范偏离。

## 使用方式

```bash
node <tdesign-composition-skill-dir>/scripts/check-quality.mjs [--platform web|mobile|miniprogram] <file-or-directory> [...more]
```

`<file-or-directory>` 按**当前命令工作目录**解析。运行前先确认已经在目标项目根目录，或传入绝对路径；不要在 skill 仓库里直接扫描另一个项目的相对路径。

示例：

```bash
node skills/tdesign-composition/scripts/check-quality.mjs src/views/admin
node skills/tdesign-composition/scripts/check-quality.mjs --platform mobile src/pages/mobile
node skills/tdesign-composition/scripts/check-quality.mjs src/pages/dashboard.vue src/pages/users.vue
```

## 路径问题排查

- 提示 `path does not exist`：当前目录下不存在传入路径。先确认 `pwd`，再改用项目内真实相对路径或绝对路径。
- 在 monorepo 中运行：从包含目标应用的 package 根目录运行，或传入 `apps/admin/src/...` 这类完整相对路径。
- 扫描 Mobile / Miniprogram：显式加 `--platform mobile` 或 `--platform miniprogram`，避免 Web-only 规则误报。

## 检查项

| 编号 | 级别 | 检查 | 处理建议 |
| --- | --- | --- | --- |
| `DS-001` | error | UI 文件未发现关键 TDesign 组件标签 | 优先使用 `Layout`、`Form`、`Table`、`Card`、`Menu` 等真实组件 |
| `DS-002` | error | 业务 CSS 中出现硬编码 hex / rgba 颜色 | 优先改用 TDesign CSS Variables / Design Token；`var()` fallback 和主题配置需人工确认 |
| `DS-003` | warn | 业务 CSS 中出现硬编码 px 尺寸 | 优先改用 `--td-size-*`、`--td-comp-*`、`--td-font-*`、`--td-radius-*`；1px 边框、断点和 API 要求硬值可人工确认 |
| `DS-004` | error | Header 类样式缺少 `height`、`min-height`、`flex-shrink: 0` 任一项 | 使用 `var(--td-comp-size-xxxl)` 并补齐三项 |
| `DS-005` | warn | `<t-aside>` 和 `<t-header>` 中同时出现 `logo` / `brand` | 确认全页只保留一个 Logo + 系统名称品牌位 |
| `DS-006` | error | 出现删除 / 禁用 / 下线 / 清空等危险操作但没有确认组件 | 使用 `Popconfirm`、`Dialog` 或当前栈等价确认组件 |
| `DS-007` | warn | 出现 `Table` / 列表数据区域但没有空状态或加载态线索 | 补 `Empty`、`loading`、`Skeleton` 或失败态 |
| `DS-008` | warn | 出现 Emoji、自绘 SVG、外部 iconfont 或临时图标图片 | 使用 TDesign Icons，并先查 manifest |
| `DS-009` | warn | 彩色实心底缺少 `--td-text-color-anti` 或搭配错误前景色 | 为品牌色、成功色、告警色、错误色实心背景补反色文字 |
| `DS-010` | warn | 页面出现表格、列表或数据关键词但未发现真实 Table | 结构化行列数据使用 `Table` 与列配置 |
| `DS-011` | warn | 出现 `success` / `warning` / `error` 但缺少组件状态表达 | 使用 `Tag`、`Alert`、`theme=`、`status=`、文字或图标辅助表达 |

## 与 checklist 的关系

- 结构化规则源：`references/design/checklist.json`。
- 质量门禁脚本：`scripts/check-quality.mjs`，路径相对当前 `tdesign-composition` skill 目录。
- 人工自检补充：`references/design/design-spec.md` 的“交付前自检”。
- `checklist.json` 中的 `platforms` 表示检查项适用平台，`autoCheck` 表示脚本是否可自动覆盖；`DS-012` 只能按交付输出人工确认。
- 交付输出使用 `outputTemplate.itemFormat`：`DS-编号：通过 / 不适用 / 需人工确认 - 简要原因`。

## 局限

- 脚本按静态文本扫描，不理解业务语义和运行时分支。
- 误报时优先修正文档或代码表达，不建议直接绕过。
- 当前脚本可自动扫描 `DS-001` 到 `DS-011`；`DS-012` 是生成后逐项自检的流程要求，只能人工确认。
- Mobile / Miniprogram 不套用 Web Header、Table 和 Menu 规则；运行脚本时传 `--platform mobile` 或 `--platform miniprogram`，未传时脚本会按路径和组件特征做保守判断。
- `DS-001` 只能判断是否出现关键 TDesign 标签，不能证明所有模块都未用裸 DOM 伪装组件。
- `DS-005` 只检测同一文件内 `<t-aside>` 与 `<t-header>` 文本块中的 `logo` / `brand`，无法跨组件追踪品牌位。
- `DS-002` / `DS-003` / `DS-009` 只检查静态 CSS 声明块；`var()` fallback、图表配置、断点、安全区和组件 API 要求的硬值需要人工确认。
- `DS-009` 无法解析运行时 class、内联对象样式或主题覆盖后的最终颜色。
- `DS-010` 以「表格 / 列表 / 数据 / Table / table」关键词触发，默认只作为 Web-only 规则；条目流、卡片流或移动端列表需要人工判断是否适用 Table。
- `DS-011` 只检查英文状态关键词和常见辅助组件 / props，中文状态文案与业务态需要人工复核。
- `DS-012` 是交付流程元检查，无法由脚本自动证明，必须在最终交付中逐项说明通过、无需适用或需人工确认。
