# 弹窗/抽屉任务流场景卡

用于创建、编辑、详情预览、二次确认、批量设置、导入配置和临时任务处理。

## 默认组件组合

### Web

- 短确认：`Popconfirm`，用于删除、禁用、下线等单步危险操作。
- 阻断式任务：`Dialog`，用于必须完成或明确取消的表单、确认和关键提示。
- 保留上下文任务：`Drawer`，用于详情预览、侧边编辑、辅助配置和不打断主列表的操作。
- 表单主体：`Form`、`FormItem` 和字段组件，提交按钮有 loading 或防重复策略。
- 反馈：`Message`、`Notification`、`Alert`、`Empty`、`Loading`。

### Mobile / Miniprogram

- 短确认：`Dialog`、`Toast` 或当前端等价确认能力。
- 选择和筛选：`Popup`、`Drawer`、`Picker`、`Cascader`。
- 长表单：优先拆页面或分步，不默认塞进小屏弹层。

## 组合规则

- 危险操作必须二次确认，并说明后果、影响范围和不可逆风险。
- 长期信息架构不放进弹窗或抽屉；弹层只承载临时任务。
- `Dialog` 用于强打断确认，`Drawer` 用于保留主页面上下文的编辑或详情。
- 弹层内表单需要明确校验、提交 loading、取消策略和关闭后数据处理。
- 批量操作弹层需要展示已选数量、适用范围、禁用原因和执行结果。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/dialog/index.md`、`drawer/index.md`、`popconfirm/index.md`、`form/index.md`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/dialog/index.md`、`drawer/index.md`、`popconfirm/index.md`、`form/index.md`。
- Vue 2 查 `skills/tdesign-vue2/references/api/dialog/index.md`、`drawer/index.md`、`popconfirm/index.md`、`form/index.md`。
- Mobile / Miniprogram 查对应端 `dialog`、`popup`、`drawer`、`picker` 和 `form` API，不照搬 Web 弹层尺寸和交互密度。

## 验证清单

- 打开入口、关闭入口、取消结果和提交结果明确。
- 危险操作有二次确认，且文案说明后果。
- 表单错误能定位到字段，提交中状态可感知。
- 弹层内容溢出、滚动、底部操作区和焦点返回行为明确。
- Mobile / Miniprogram 下键盘、安全区和底部按钮不遮挡内容。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-006`、`DS-007`、`DS-011`、`DS-012`。
- 涉及图标时追加 `DS-008`；弹层内包含结构化数据表格时追加 `DS-010`。
- Web 弹窗/抽屉任务流交付前按 ``tdesign-design-spec` 的 `references/design/checklist.json`` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 ``tdesign-design-spec` 的 `references/quality-gate.md`` 检查目标文件。
