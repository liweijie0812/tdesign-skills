# Form vs JSON Schema

TDesign 的 `Form` 是交互与校验组件，不是 JSON Schema 渲染器。先判断用户要的是可控业务表单，还是 schema 驱动的动态表单系统。

## 选择 TDesign Form

- 字段结构明确，页面或业务组件可以直接维护字段、规则和提交逻辑。
- 需要 TDesign 的标签、校验、布局、禁用、只读、滚动到错误等表单能力。
- 表单项需要与 `Input`、`Select`、`DatePicker`、`Upload` 等 TDesign 输入类组件组合。
- 团队已有 TDesign 表单封装或项目约定，应该沿用已有写法。

## 选择 JSON Schema 方案

- 表单字段来自后端配置、低代码平台、租户配置或运行时动态 schema。
- 字段类型、校验、联动和展示规则需要统一由 schema 驱动。
- 需要非开发人员配置或跨页面复用同一套 schema 渲染能力。

## TDesign 中的落地方式

- JSON Schema 渲染器可以内部使用 TDesign `Form` 和输入类组件。
- schema 渲染器不是 TDesign 内建能力时，应说明这是项目封装或第三方能力。
- 不要编造 `JsonSchemaForm`、`SchemaForm` 之类 TDesign 官方组件名。

## 不要这样用

- 不要为了少量固定字段引入完整 schema 渲染器。
- 不要把 schema 字段直接当作 TDesign `Form` 的官方 API。
- 不要绕过 `FormItem` 自行拼装标签、错误文案和校验状态。
