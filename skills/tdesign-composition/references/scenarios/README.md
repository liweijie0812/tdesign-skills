# TDesign 场景卡总入口

`tdesign-composition/references/scenarios/` 用来回答“某类页面通常怎么组织、默认怎么搭”，不负责替代具体组件 API。

## 查阅顺序

1. 先按 `skills/tdesign-usage-guide/references/decisions/README.md` 和 `skills/tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径。
2. 需要表单录入、编辑、配置、审批页时，查 `form-page.md`。
3. 需要后台列表、资源列表、结构化数据浏览页时，查 `table-list-page.md`。
4. 需要后台框架、控制台骨架、导航壳时，查 `layout-shell.md`。
5. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认 props、事件、插槽和写法。

## 与其他目录的边界

- `tdesign-composition/references/scenarios/`：回答“某类页面通常怎么组织”。
- `tdesign-usage-guide/references/decisions/`：回答“该选什么组件、为什么”。
- 各技术栈 skill 的 `references/api/`：回答“当前栈有没有、怎么写”。

## 使用原则

- 场景卡只提供默认组合和常见校验点，不替代当前项目的业务约束。
- Web 与 Mobile / Miniprogram 页面结构不直接互相复用，必须按平台降密或调整导航方式。
- 如果场景卡里的默认组件当前栈不存在，先回到 `skills/tdesign-docs/references/meta/stack-matrix.json` 与 `skills/tdesign-usage-guide/references/decisions/fallback-policy.md` 处理降级。
