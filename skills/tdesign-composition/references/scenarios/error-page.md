# 错误/结果页场景卡

用于 403、404、500、无权限、空结果、维护中、提交成功或失败等结果反馈页面。

## 默认组件组合

### Web

- 页面容器：`Layout`、`Card`、`Space` 或页面级居中容器。
- 结果主体：`Empty`、`Result` 或当前栈等价组件；如当前栈无 `Result`，优先用 `Empty` 的类型、标题和描述表达。
- 操作区：`Button`、`Link`，提供返回首页、返回上一页、重试或联系管理员。
- 反馈：可用 `Alert` 补充权限原因、请求 ID 或恢复建议。

### Mobile / Miniprogram

- 页面容器：`Navbar`、当前页面容器和居中结果区。
- 结果主体：`Empty`、`Result` 或当前端等价组件，标题和说明文案必须明确。
- 操作区：`Button`，优先提供一个主操作和一个次操作，不堆叠过多链接。

## 选型规则

- 错误页不是装饰插画页，必须说明发生了什么、用户能做什么。
- 403 强调权限原因和申请入口，404 强调路径错误和返回入口，500 强调重试和问题反馈。
- 状态图形、色彩和文案应共同表达，不只靠颜色。
- 如果需要展示错误码、请求 ID 或时间戳，放在说明区或 `Alert` 中。
- 不使用 Emoji、自绘 SVG 或外部临时图片冒充结果图标。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/empty/index.md`、`skills/tdesign-react/references/api/button/index.md`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/empty/index.md`、`skills/tdesign-vue-next/references/api/button/index.md`，完整模板见 `skills/tdesign-vue-next/references/examples/pages/error-page.vue`。
- Vue 2 查 `skills/tdesign-vue2/references/api/empty/index.md`、`skills/tdesign-vue2/references/api/button/index.md`。
- Mobile React / Mobile Vue / Miniprogram 查对应端 `empty`、`result`、`button` API。

## 验证清单

- 错误码、标题、说明和主操作语义一致。
- 无权限、失败、维护中等状态有文字说明和可执行下一步。
- 重试操作有 loading 或防重复策略，失败后有反馈。
- 小屏幕下结果主体和按钮不会被安全区或底部导航遮挡。
- 图标来源符合当前端 TDesign 图标或结果组件能力。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-008`、`DS-011`、`DS-012`。
- 如果错误页包含数据表格、错误列表或操作日志，追加 `DS-007` 和 `DS-010`。
- 错误/结果页交付前按 ``tdesign-design-spec` 的 `references/design/checklist.json`` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 ``tdesign-design-spec` 的 `references/quality-gate.md`` 检查目标文件。
