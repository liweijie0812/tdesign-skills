# M06 - QC / Handoff

本模块定义无设计文件场景下的 TDesign 终审、交接、参考来源和冲突仲裁规则。它聚合 `M01` 到 `M05` 的产物，并输出给用户或下游消费者作为最终交付包。

## 1. 权威来源

### TDesign 官方资料

- TDesign 设计价值观：`https://tdesign.tencent.com/design/values`
- TDesign Starter Design Token：`https://tdesign.tencent.com/starter/docs/vue/design-token`
- TDesign Vue Next：`https://tdesign.tencent.com/vue-next/overview`
- TDesign React：`https://tdesign.tencent.com/react/overview`

### Web 主题源码

- Light 主题：`https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_light.less`
- Dark 主题：`https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_dark.less`
- 字体：`https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_font.less`
- 尺寸：`https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_size.less`
- 圆角：`https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_radius.less`

### 图标清单

- TDesign Icons manifest：`https://github.com/Tencent/tdesign-icons/blob/develop/packages/view/src/manifest.js`

### 本 skill 规则源

- 根约束：`M01-overview-usage-rules.md`
- 色彩：`M02-colors.md`
- 排版 / 间距 / 圆角：`M03-typography-spacing-radius.md`
- 布局 / 导航：`M04-layout-navigation.md`
- 组件 / 图标 / 图表：`M05-components-icons-charts.md`
- 自动化质量门禁：`../quality-gate.md`
- 结构化检查项：`../design/checklist.json`

## 2. 跨模块验收 Checklist

执行页面生成、页面改造或视觉走查后，按适用项检查。任何失败项回到对应模块修正后再交付。

### M01 根约束

- [ ] 已确认平台和技术栈；未说明且是中后台时按 Web 处理。
- [ ] 已优先使用 TDesign 组件、主题 API 和 CSS Variables，没有并行引入第二套设计语言。
- [ ] 独立 HTML / CDN 示例已引入 Vue / TDesign UI / TDesign CSS / TDesign Icons 对应包。
- [ ] 图标包不可用时，没有用 Emoji、自绘 SVG、外部 iconfont 或临时图片兜底。
- [ ] 交付前按适用 `DS-*` 检查项输出结果。

### M02 色彩

- [ ] 颜色优先使用 `var(--td-*)` 语义变量，没有把孤立 hex / rgba 当作业务规范。
- [ ] 品牌、成功、告警、错误语义未对调。
- [ ] `hover` / `focus` / `active` / `disabled` / `light` 使用同语义状态变量。
- [ ] 彩色实心底上的文字、图标和头像缩写使用 `--td-text-color-anti`。
- [ ] 自定义彩色 `Avatar` 设置背景时，同步设置 `color: var(--td-text-color-anti)` 或存在统一兜底。
- [ ] Light / Dark 复用同一语义变量名，没有手写两套业务颜色。

### M03 排版 / 间距 / 圆角

- [ ] 字号、行高、字体族使用 `--td-font-*`、`--td-font-size-*` 或 `--td-line-height-*`。
- [ ] 间距使用 `--td-size-*`、`--td-comp-*`、组件 spacing props 或布局组件。
- [ ] 页面主间距档位稳定，没有 `13px`、`17px`、`21px` 等无规律间距。
- [ ] 圆角使用 `--td-radius-*`，同页圆角层级统一。
- [ ] Typography / Spacing / Radius 在 Light / Dark 下未分叉。

### M04 布局 / 导航

- [ ] Web 内容区默认 12 栅格，页面安全边距优先 `var(--td-size-8)`。
- [ ] 应用壳使用 `Layout`、`Header`、`Aside`、`Content`、`Footer` 和 `Menu` 官方组合或项目已有等价封装。
- [ ] 侧边导航使用官方 `Menu + Layout`；顶部导航使用官方顶部导航或 `Menu.HeadMenu` 等价组合。
- [ ] 侧栏与顶栏并存时，全页只有一个 Logo + 系统名称品牌位。
- [ ] `Header` / `t-layout__header` 使用 `var(--td-comp-size-xxxl)`，并同时设置 `height`、`min-height`、`flex-shrink: 0`。
- [ ] Mobile / Miniprogram 未照搬 Web 应用壳，已使用当前端导航组件和安全区策略。

### M05 组件 / 图标 / 图表

- [ ] 页面骨架、表单、表格、分页、弹层、反馈和导航使用真实 TDesign 组件。
- [ ] 结构化行列数据使用真实 `Table` 与列配置，没有用图标、截图或静态块伪装。
- [ ] 危险操作使用 `Popconfirm`、`Dialog` 或当前栈等价确认组件。
- [ ] Web 图标使用 `<t-icon>`、`Icon` 或当前技术栈官方图标组件。
- [ ] 图标 `name` 已按 TDesign Icons manifest 校验；manifest 无对应项时选择语义等价官方图标。
- [ ] 没有 Emoji、自绘 SVG、PNG / JPG、外部 iconfont 或临时网络图片作为 UI 图标。
- [ ] 趋势、对比、分布、关系、转化或占比模块使用真实图表库 / 图表组件，未使用占位框、静态块或无关图标冒充。
- [ ] 图表覆盖标题、单位、图例、加载、空态、失败态和必要说明。

### 可访问性与交付

- [ ] 状态不只依赖颜色，配合文案、组件状态、图标或反馈。
- [ ] 焦点态可见，键盘操作路径不被隐藏。
- [ ] 文本与背景对比可读；深色或饱和功能色底上的前景优先 `--td-text-color-anti`。
- [ ] 能运行质量门禁时，已执行 `node <tdesign-composition-skill-dir>/scripts/check-quality.mjs --platform <platform> <file-or-directory>`。
- [ ] 无法运行质量门禁时，已说明原因并按 `DS-编号：通过 / 不适用 / 需人工确认 - 简要原因` 输出人工自检。

## 3. 冲突仲裁规则

当多个规则、模块或 agent 产物冲突时，按以下优先级仲裁。

### 总优先级

1. 用户明确业务要求。
2. 当前项目运行时依赖、主题变量、已有封装和代码约定。
3. 当前技术栈 TDesign API 文档与组件真实能力。
4. TDesign 官方文档、主题源码和 icons manifest。
5. 本 skill 的 `M01` 到 `M06` 模块规则。

### 分类仲裁

| 冲突类型 | 仲裁模块 | 原则 |
| --- | --- | --- |
| 根约束 / 红线 | `M01` | 组件、Token、导航、图标和自检红线优先 |
| 颜色 / 语义 / 对比 | `M02` | 语义 Token 优先于 hex；运行时主题优先于默认值 |
| 字体 / 间距 / 圆角 | `M03` | Token 与组件默认值优先于任意 px |
| 栅格 / 应用壳 / 导航结构 | `M04` | 官方 Layout / Menu 组合优先；品牌位唯一 |
| 组件 / 图标 / 图表 | `M05` | 真实组件和 manifest 校验优先 |
| 跨模块 / 终审 | `M06` | 用户目标与项目运行真理源优先 |

### 常见仲裁原则

- 项目运行时主题变量与默认主题表冲突时，以项目运行时变量为准。
- 当前技术栈 API 与通用示例冲突时，以当前技术栈 API 为准。
- 组件公开 props 能解决时，不覆盖内部 class。
- 语义 Token 优先于色板 hex；hex 仅作默认主题参考或 fallback。
- 真实 TDesign 组件优先于裸 DOM、图标、截图和静态块。
- 图标 manifest 中没有目标名称时，选择语义等价官方图标，不自造名称。
- 图表库主题与 TDesign 功能色冲突时，功能色只保留业务语义，图表多分类走项目图表规范。

## 4. 跨 agent 回收格式

每个子 agent 完成任务后提交以下 YAML；M06 聚合为交付包。

```yaml
module_id:        # M01 | M02 | M03 | M04 | M05 | M06
context: no-design-file
inputs_used:      # 引用的上游模块 / 源文件 / 链接
  - ...
decisions:        # 关键决策与取舍
  - ...
artifacts:        # 产出物：文件 / 代码 / 命令输出 / 检查报告
  - ...
risks:            # 遗留风险 / 需后续仲裁项
  - ...
next_module:      # 下一个应接手的模块 ID，终审填 无
```

## 5. 最终交付包建议目录

```text
delivery/
├── M01-overview.md              # 根约束与执行摘要
├── M02-colors.md                # 色彩 Token 与对比规则
├── M03-typography-spacing.md    # 字体 / 间距 / 圆角规则
├── M04-layout-navigation.md     # 页面骨架与导航结构
├── M05-components-icons.md      # 组件、图标、图表清单
├── M06-qc-report.md             # 检查结论与仲裁记录
└── handoff-recap.yaml           # 合并后的 YAML 回收
```

按实际任务裁剪交付包。纯代码改造通常只需要变更文件、质量门禁结果和 `M06-qc-report.md`；无需强制创建目录。

## 6. M06 交付报告模板

```markdown
# TDesign QC Report

## Scope
- Platform:
- Files / Pages:
- Modules Applied: M01 / M02 / M03 / M04 / M05 / M06

## Automated Checks
- Command:
- Result:
- Notes:

## Manual Checklist
- DS-001: 通过 / 不适用 / 需人工确认 - 原因
- DS-002: 通过 / 不适用 / 需人工确认 - 原因
- DS-003: 通过 / 不适用 / 需人工确认 - 原因
- DS-004: 通过 / 不适用 / 需人工确认 - 原因
- DS-005: 通过 / 不适用 / 需人工确认 - 原因
- DS-006: 通过 / 不适用 / 需人工确认 - 原因
- DS-007: 通过 / 不适用 / 需人工确认 - 原因
- DS-008: 通过 / 不适用 / 需人工确认 - 原因
- DS-009: 通过 / 不适用 / 需人工确认 - 原因
- DS-010: 通过 / 不适用 / 需人工确认 - 原因
- DS-011: 通过 / 不适用 / 需人工确认 - 原因
- DS-012: 通过 / 不适用 / 需人工确认 - 原因

## Arbitration
- 冲突项:
- 决议:
- 依据:

## Residual Risks
- ...
```

## 7. 交接协议

```yaml
module_id: M06
context: no-design-file
inputs_used:
  - M01
  - M02
  - M03
  - M04
  - M05
decisions:
  - 以项目运行时主题、当前技术栈 API 和 TDesign 官方资料为优先权威来源
  - 以 M06 checklist 聚合终审
  - 以 DS 检查项输出交付自检
artifacts:
  - QC 报告
  - 合并 handoff YAML
  - 质量门禁结果
risks:
  - 业务数据字段、后端联调和权限策略不属于本规范本体，需按项目需求另行确认
next_module: 无
```
