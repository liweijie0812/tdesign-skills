# TDesign Skills 强制约束

## Skill 使用协议

1. **必须通过 `load_skill` 加载 skill**，不要绕过 skill 系统直接 grep、find 或 read `references/` 下的内部文件。直接读文件会丢失 SKILL.md 定义的查阅顺序、写法边界和约束上下文，导致跳步、跨栈误判或凭记忆编造 API。
2. **严格按各 SKILL.md 的「查阅顺序」执行**，不跳步、不凭经验猜路径。先确认依赖和组件覆盖，再查 API，最后才查示例。
3. **需要交接到其他 skill 时，对目标 skill 再次 `load_skill`**，不要直接读目标 skill 的 `references/` 文件，因为每个 skill 的 SKILL.md 包含其自身的查阅顺序和写法边界。
4. **`references/` 下的文件只在 SKILL.md 指引下按需读取**，它们是 skill 的内部资料，不是独立文档；脱离 SKILL.md 上下文读取会丢失约束。
5. **不凭记忆或经验编造文件路径**，skill 目录结构可能随版本变化，以 SKILL.md 中记载的相对路径为准。

## 核心原则

1. 优先使用 TDesign 组件、布局、子组件、props、插槽和设计变量，因为 TDesign 组件经过跨端适配和可访问性测试，混用其他方案会导致视觉不一致和维护成本上升。
2. 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件，并说明不是 TDesign 官方能力，因为未经验证的实现可能在边缘场景（暗色模式、响应式、国际化）下出问题。
3. 不引入其他组件库，因为混用会导致样式冲突、包体积膨胀和视觉不一致；如果 TDesign 确实无法覆盖需求，优先用原生 HTML + 最小 CSS 兜底。
4. 不用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力，因为重复实现会绕过 TDesign 的可访问性、键盘导航和主题适配。
5. props、事件、插槽、小程序 external classes 和真实子组件名必须查 `references/api/` 确认，因为 TDesign 各栈 API 差异大，凭记忆容易跨栈混淆（如 Vue 3 的 `modelValue` vs 小程序的 `value`、以及 `Table` 这类复杂组件通常通过 `columns` 配置而不是臆造 `t-table-column` 一类标签）。

## 职责边界

- 每次只选择 1 个主责 skill，职责划分见 `responsibility-map.md`。
- 不要把总入口、选型、页面组合和 API skill 同时当作主入口。
- 当用户问题已经明确落在某个专项 skill 时，跳过总入口，直接进入该 skill。
- 各专项 skill 必须在自身 `SKILL.md` 内联最小护栏，确保选择性安装且未安装 `tdesign-skills` 时仍可独立工作；本文件只作为完整 collection 模式下的详细补充。

## 跨栈隔离

- 不混用 React 点语法、Vue 标签写法、小程序短横线属性、uni-app `@event` 语法和不同端默认值，因为跨栈混用会导致运行时错误（如 Vue `@event` 在小程序中不生效）。
- 不把 Web、Mobile、Miniprogram 的组件结论直接互相套用，因为各端组件覆盖范围、props 和默认值存在差异。
- 不把 `tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react` 的 API 当作 React Web API。
- `tdesign-uniapp` 受控组件统一用 `value` 做双向绑定属性名；使用 `v-model` 时必须写 `v-model:value`，因为 `tdesign-uniapp` 基于小程序适配，Vue 3 默认的 `modelValue` 在 uni-app 中不生效。

## 样式约束

- 不在 TDesign 已提供组件的情况下手写等价实现，因为重复实现会脱离 TDesign 的主题适配和可访问性支持。
- 不通过覆盖 TDesign 样式来实现新 UI，应优先换组件或调整 props，因为覆盖内部样式会在版本升级后失效。
- 只有组件组合和 props 无法满足时，才补最小 CSS。

## 场景卡约束

- 涉及 `Dialog`、`Form`、`Table` 的页面搭建、组件组合或交互流程设计，必须先查 `../../tdesign-composition/references/scenarios/README.md` 并进入对应场景卡。
- 纯 API 查询或局部修复可直接查当前技术栈组件 API。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。

## API 目录约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- API 表不够精确时，再读取同目录 `type.ts`、`props.ts`、`common.ts`。
- 组件是否存在必须以 `references/meta/stack-matrix.json` 或对应端文件为准，不从目录存在推断。

## 组件用法题固定顺序

- 用户一旦在问"怎么用""怎么写""给个示例"，主责必须切到当前技术栈 API skill，不继续停留在总入口、docs、选型或场景层回答实现细节。
- 执行顺序固定为：识别技术栈 → 确认组件覆盖 → 查当前栈 `references/api/<component>/index.md` → 不够再查 `type.ts` / `props.ts` / `common.ts` → 最后再查同栈 `references/examples/`。
- 不要先读示例再反推 API，因为示例是辅助证据，不是 props、事件、插槽和子组件存在性的权威来源。
- 回答顺序固定为：先说明技术栈或假设前提，再给 API 依据和关键写法，最后给最小示例；不确定点要明确标注需回 API 或类型源确认。

## 技术栈 skill 统一模板

各技术栈 skill（react / vue-next / vue2 / mobile-react / mobile-vue / miniprogram / uniapp）的 `SKILL.md` 统一维护以下结构：

- 简介（标题下首段）：声明只服务当前 TDesign 包，并说明本文件仅在完整 collection 模式下作为详细参考。

以下为 `##` 章节固定顺序：

1. `使用协议`：必须通过 `load_skill` 加载，不绕过直接读 `references/`；严格按查阅顺序执行。
2. `查阅顺序`：依赖确认 → 覆盖矩阵 → 单组件 API → 类型源 → 示例 → 跨端共享契约 → 页面组合 / 版本回流。
3. `<技术栈> 写法边界`：只写当前栈语法、导入、事件、插槽或平台差异。
4. `约束`：只保留当前栈执行红线、降级策略和路由交接。

- 平台差异应放在 `写法边界` 内，不新增并列大章节，避免各栈结构漂移。
- Web 完整页面、Mobile 页面骨架、小程序 / uni-app 差异可以在对应步骤或边界中说明，但仍需回到统一路由链路。
- 技术栈 skill 必须内联"目标 skill 未安装时跳过查询并建议补装"的兜底；support skill 只做自身职责，不扩展为通用兜底入口。

## 路由交接（技术栈 skill 共用）

> **定位**：本文件是**完整 collection 模式下的详细单一源**，聚合所有跨 skill 的强制约束与路由职责表。各技术栈 `SKILL.md` 已内联最小护栏与路由摘要，可在单 skill 隔离或跨 skill 文件缺失时独立生效；本文件在此基础上提供去重的完整版。
>
> **路径**：本文件位于 `skills/tdesign-skills/references/`，比技术栈 `SKILL.md` 深一层；因此下表跨 skill 路径用 `../../`（从本文件出发）。技术栈 `SKILL.md` 引用其他 skill 仍用 `../`。

各技术栈 skill（react / vue-next / vue2 / mobile-react / mobile-vue / miniprogram / uniapp）只负责当前栈单组件 API 与代码落地，其余职责按下表交接，不要在正文重复展开：

| 任务类型 | 主责 skill | 关键资料 |
| --- | --- | --- |
| 组件选型、相似组件、何时使用、反模式、降级 | `tdesign-usage-guide` | `../../tdesign-usage-guide/references/decisions/README.md` |
| 组件搭配设计指南、页面级组合、应用壳、场景卡、设计规范、质量门禁 | `tdesign-composition` | `../../tdesign-composition/references/scenarios/README.md` |
| 移动端 / 小程序 / uni-app 页面骨架 | `tdesign-composition` | `../../tdesign-composition/references/scenarios/mobile-pages.md` |
| 组件是否存在、覆盖矩阵、资料入口 | `tdesign-docs` | `../../tdesign-docs/references/meta/stack-matrix.json` |
| 图标名称、关键词、分类、包名、导入方式 | `tdesign-icons` | `../../tdesign-icons/SKILL.md` |
| 版本能力、新增、修复、废弃、Breaking Changes | `tdesign-changelog` | `../../tdesign-changelog/SKILL.md` |

- 查到选型、组合、图标或版本线索后，仍要回到当前技术栈 `references/api/<component>/index.md` 确认真实写法。
- 当前栈组件不存在或能力不足，统一查 `../../tdesign-usage-guide/references/decisions/fallback-policy.md`。

### 单 skill 选择性安装的兜底

通过 `npx skills add --skill <name>` 选择性安装时，上表跨 skill 资料可能不在磁盘。各技术栈 `SKILL.md` 已为每类跨 skill 引用内联兜底（未安装时跳过查询、按兜底执行、并在回复中建议补装），单 skill 模式下仍可独立工作。本表作为完整 collection 模式下的精确路由表，单 skill 模式下不强制可读。
