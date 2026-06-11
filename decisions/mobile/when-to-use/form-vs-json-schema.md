# Mobile / Miniprogram Form vs JSON Schema

TDesign Mobile / Miniprogram 的 `Form` 是移动端表单交互与校验能力，不是 JSON Schema 渲染器。先判断用户要的是可控移动端表单，还是 schema 驱动的动态表单系统。

## 选择 TDesign Form

- 字段结构明确，页面或业务组件可以直接维护字段、规则和提交逻辑。
- 需要移动端表单项、校验、禁用、只读和错误展示能力。
- 表单项需要与 `Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Upload` 等移动端组件组合。
- 小程序场景需要遵守 WXML/JS、短横线属性、`bind` 事件和平台上传能力。

## 选择 JSON Schema 方案

- 表单字段来自后端配置、低代码平台、租户配置或运行时动态 schema。
- 字段类型、校验、联动和展示规则需要统一由 schema 驱动。
- 需要跨移动端页面复用同一套 schema 渲染能力。

## TDesign 中的落地方式

- JSON Schema 渲染器可以内部映射到 TDesign `Form` 和移动端输入类组件。
- schema 渲染器不是 TDesign 内建能力时，应说明这是项目封装或第三方能力。
- 移动端 schema 渲染不应照搬 Web 多列布局、Web `Select` 或 Web `DatePicker`。

## 不要这样用

- 不要为了少量固定字段引入完整 schema 渲染器。
- 不要把 schema 字段直接当作 TDesign `Form` 的官方 API。
- 不要绕过 `FormItem` 自行拼装标签、错误文案和校验状态。
