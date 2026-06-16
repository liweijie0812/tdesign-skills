# 表单页场景卡

用于新增、编辑、配置、审批、搜索条件等需要收集和提交信息的页面。

## 默认组件组合

### Web

- 页面容器：`Layout`、`Card`、`Space`、`Divider`。
- 表单主体：`Form`、`FormItem`，字段组件按值类型选择 `Input`、`Select`、`DatePicker`、`Checkbox`、`Radio`、`Switch`、`Upload`。
- 操作区：`Button`，主操作使用当前栈的主按钮配置，取消、重置、返回使用次级按钮。
- 反馈：提交成功用 `Message`，失败原因优先在表单项或页面 `Alert` 中展示。

### Mobile / Miniprogram

- 页面容器：使用当前项目页面容器，必要时用 `Cell`、`CellGroup`、`Divider`、`Row`、`Col` 组织分组，不照搬 Web `Layout` / `Card` / `Space`。
- 表单主体：`Form`、`FormItem`，字段组件按值类型选择 `Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Checkbox`、`Radio`、`Switch`、`Upload`、`Stepper`。
- 操作区：`Button`，长页面可使用吸底或固定操作区；具体实现按项目已有布局和当前栈 API。
- 反馈：提交成功用当前栈支持的 `Toast` / `Message`，失败原因优先在 `FormItem` 或页面提示组件中展示。

## 选型规则

- 一组字段需要提交或校验时使用 `Form`，只读信息使用 `Descriptions`。
- 简单筛选表单可以使用行内布局，复杂编辑表单优先纵向布局。
- 多个动态重复字段使用表单列表能力或项目已有封装，不自行拼装数组状态。
- 长表单需要分区时使用 `Card`、`Divider`、`Tabs` 或锚点，不默认塞进 `Dialog`。
- Web 表单页的颜色、间距、圆角和状态样式优先使用 `../design/tokens.md` 的语义 Token；Mobile / Miniprogram 按当前端 Design Token 和组件变量确认。
- 表单提交、上传、校验、错误反馈和成功反馈必须使用真实 TDesign 组件，不用静态块或自定义提示冒充。
- Mobile / Miniprogram 长表单优先分组、分步或拆页面；不要照搬 Web 多列布局。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/form/index.md`，常见字段容器为 `FormItem` 或 `Form.FormItem`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/form/index.md`，常见字段容器为 `<t-form-item>`。
- Vue 2 查 `skills/tdesign-vue2/references/api/form/index.md`，按 Vue 2 模板、事件和插槽语法实现。
- Mobile React 查 `skills/tdesign-mobile-react/references/api/form/index.md`，字段、校验和反馈按移动端 API 实现。
- Mobile Vue 查 `skills/tdesign-mobile-vue/references/api/form/index.md`，字段、校验、事件和插槽按移动端 Vue API 实现。
- Miniprogram 查 `skills/tdesign-miniprogram/references/api/form/index.md`，使用小程序属性、事件和插槽写法。

## 验证清单

- 必填、格式、异步校验和错误文案能定位到字段。
- 提交按钮有 loading 或防重复提交策略。
- 重置逻辑与初始值策略明确。
- 只读、禁用、编辑态切换不会丢失用户输入。
- 失败、成功、禁用、加载和无权限状态不只依赖颜色表达。
- 图标名如有使用，Web 需通过 `tdesign-icons` manifest 确认；Mobile / Miniprogram 按当前端图标 API 和项目图标方案确认。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-007`、`DS-011`、`DS-012`。
- 涉及删除、禁用、清空、撤销等危险提交时追加 `DS-006`，必须使用二次确认组件。
- Web 自定义样式查 `../design/tokens.md` 的常用 Token 速查；交付前按 `../design/checklist.json` 的 `outputTemplate` 输出适用项结果。
