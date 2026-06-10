# TDesign 全局反模式

这些规则不按技术栈区分，React、Vue Next、Vue 2 都适用。

## 禁止编造

- 不编造 TDesign 组件名、props、事件、插槽、函数式 API 或组合能力。
- 不把 Ant Design、Element Plus、Naive UI、原生 HTML 的 API 当成 TDesign API。
- 不把项目私有封装说成 TDesign 官方组件。

## 禁止混栈

- React 项目不要使用 `t-form-item`、`v-model:visible`、`@confirm` 这类 Vue 写法。
- Vue 项目不要使用 `Layout.Aside`、`Form.FormItem`、`onConfirm` 这类 React 写法。
- Vue 2 项目不要默认使用 Vue 3 `<script setup>`、`v-model:visible` 或 Composition API，除非项目已经这样封装。

## 禁止过度自定义

- 不优先用大量自定义 CSS 复刻 TDesign 已有组件能力。
- 不绕过 `Form`、`FormItem`、`Table`、`Pagination` 等内建能力重复造基础结构。
- 不为了视觉相似选择错误组件，必须按任务、数据结构和交互成本判断。

## 禁止过重交互

- 简单提示不要用 `Dialog`，操作后轻反馈优先 `Message`。
- 轻量二次确认不要默认用 `Dialog`，可优先 `Popconfirm`。
- 扁平值选择不要用 `Cascader` 或 `TreeSelect`。
- 只读详情不要用 `Form` 假装展示，优先 `Descriptions`。

## 禁止破坏可用性

- 高风险操作不要只用图标表达，应有明确文案或 `Tooltip` 辅助。
- 关键业务信息不要只放在 `Tooltip` 中。
- 下拉、弹窗、抽屉等浮层不要忽略可视区域、关闭路径和键盘/遮罩行为。
