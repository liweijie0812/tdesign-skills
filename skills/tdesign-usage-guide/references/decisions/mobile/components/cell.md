# Mobile Cell 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Cell` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于移动端列表项、设置项、表单项或信息摘要。
- 适合单列页面中组织标题、说明、图标、右侧值和跳转提示。

## 选型要点

- Cell 是移动端单列信息组织的基础单元，适合标题、说明、图标、右侧值和跳转提示组合。
- 多个同类项应使用 `CellGroup` 或父级分组语义，避免散落的自定义行。
- 连续动态条目流可使用 `List`；表单字段应结合 `Form` / `FormItem`；纯文本段落优先 `Typography`。
- 可点击 Cell 应有明确目标，右侧值、箭头或操作提示要让用户理解点击结果。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`List`、`Form`、`Typography`。

## 反模式

- 不要用自定义 `view` / `div` 重做设置项、资料项和表单项行结构。
- 不要把复杂卡片、长正文或多列布局塞进单个 Cell。
- 不要让 Cell 看起来可点击但没有明确跳转或操作。
- 不要把 Web Table/List 的高密度行结构直接套到移动端 Cell。
