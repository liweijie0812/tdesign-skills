# TDesign 场景卡总入口

`tdesign-composition/references/scenarios/` 用来回答“某类页面通常怎么组织、默认怎么搭”，不负责替代具体组件 API。

## 查阅顺序

1. Web 中后台页面先查 `../design/design-spec.md`、`../design/tokens.md` 和 `../design/checklist.json`，确认设计红线、Token 规则和自检项。
2. 先按 `skills/tdesign-usage-guide/references/decisions/README.md` 和 `skills/tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径。
3. 需要表单录入、编辑、配置、审批页时，查 `form-page.md`。
4. 需要后台列表、资源列表、结构化数据浏览页时，查 `table-list-page.md`。
5. 需要后台框架、控制台骨架、导航壳时，查 `layout-shell.md`。
6. 需要详情页、对象档案或审批详情时，查 `detail-page.md`。
7. 需要登录、注册或身份入口时，查 `login-page.md`。
8. 需要错误页、无权限页或结果页时，查 `error-page.md`。
9. 需要移动端表单、移动端列表或轻量页面时，查 `mobile-pages.md`。
10. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认 props、事件、插槽和写法。

## 与其他目录的边界

- `tdesign-composition/references/scenarios/`：回答“某类页面通常怎么组织”。
- `tdesign-usage-guide/references/decisions/`：回答“该选什么组件、为什么”。
- 各技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写”。

## 使用原则

- 场景卡只提供默认组合和常见校验点，不替代当前项目的业务约束。
- Web 中后台场景必须遵守 `../design/design-spec.md` 的真实组件、图标、表格、图表、导航和状态反馈红线。
- Web 自定义样式优先使用 `../design/tokens.md` 中的语义 Token，不写零散硬编码颜色、间距、圆角或高度。
- Web 代码生成后必须按 `../design/checklist.json` 输出适用检查项结果；能运行脚本时按 `../quality-gate.md` 执行质量门禁。
- Web 与 Mobile / Miniprogram 页面结构不直接互相复用，必须按平台降密或调整导航方式。
- 如果场景卡里的默认组件当前栈不存在，先回到 `skills/tdesign-docs/references/meta/stack-matrix.json` 与 `skills/tdesign-usage-guide/references/decisions/fallback-policy.md` 处理降级。
