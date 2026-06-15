---
name: tdesign-composition
description: 当用户询问 TDesign 组件搭配、页面场景、表单页、表格列表页、详情页、弹窗页、后台管理页、应用壳、导航布局或页面骨架怎么组织时使用。只负责页面级组合和场景校验；不负责组件选型理由、单组件 API 或版本来源。
---

# TDesign 组件搭配与页面场景

本 skill 用于回答“某类页面通常怎么组织、默认怎么搭”。它不替代具体组件 API。

## 查阅顺序

1. 先按 `../tdesign-usage-guide/references/decisions/README.md` 和 `../tdesign-usage-guide/references/decisions/platform-design-policy.md` 确认平台与组件选型口径。
2. 组件搭配入口：查 `../tdesign-usage-guide/references/decisions/component-composition-map.md`。
3. Web 搭配细节：查 `../tdesign-usage-guide/references/decisions/web/component-composition-map.md`。
4. Mobile / Miniprogram 搭配细节：查 `../tdesign-usage-guide/references/decisions/mobile/component-composition-map.md`。
5. 表单录入、编辑、配置、审批页：查 `references/scenarios/form-page.md`。
6. 后台列表、资源列表、结构化数据浏览页：查 `references/scenarios/table-list-page.md`。
7. 后台框架、控制台骨架、导航壳：查 `references/scenarios/layout-shell.md`。
8. 场景卡确定组件组合后，再回到当前技术栈 skill 的 `references/api/<component>/index.md` 确认写法。

## Web 中后台资料

- 色彩、品牌色、功能色、中性色、扩展色、Design Token：查 `references/design/color.md`。
- Layout 布局、导航布局、栅格、断点和间距：查 `references/design/layout.md`。
- 中后台整体框架、导航分类、页面布局和模板映射：查 `references/design/offices.md`。
- 筛选查询、批量操作、数据导入、状态流转、任务引导：查 `references/design/offices-task.md`。

## 常见组合

- 表单页：`Form` + `FormItem` + 字段组件 + `Button` + 反馈组件。
- 表格列表页：筛选 `Form` + `Table` + `Pagination` + `Button` / `Dropdown` + `Popconfirm` / `Dialog`。
- 详情页：`Descriptions` + `Card` + `Tag` + `Timeline` + `Button` / `Link`。
- Web 应用壳：`Layout` / `Header` / `Aside` / `Content` / `Footer` + 导航组件。
- Mobile 页面：导航 + `Cell` / `Form` / `List` + `Toast` / `Dialog`，不要照搬 Web 应用壳。

## 约束

- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。
- 组件选型争议先转到 `tdesign-usage-guide`，不要在场景卡里重新做选型规则。
- 如果场景卡里的默认组件当前栈不存在，先查 `../tdesign-docs/references/meta/stack-matrix.json` 和 `../tdesign-usage-guide/references/decisions/fallback-policy.md`。
- 场景组合确定后，单组件 props、事件、插槽必须回到对应技术栈 API skill。
- 只有组件组合和 props 无法满足时，才补最小 CSS。
