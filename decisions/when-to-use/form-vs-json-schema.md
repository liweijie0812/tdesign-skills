# Form vs JSON Schema

TDesign 的 `Form` 是交互与校验组件，不是 JSON Schema 渲染器。先按平台读取端规则。

## 查阅入口

- Web：查 `decisions/web/when-to-use/form-vs-json-schema.md`。
- Mobile / Miniprogram：查 `decisions/mobile/when-to-use/form-vs-json-schema.md`。

## 通用原则

- 字段结构明确、页面自己维护字段和提交逻辑时，优先使用 TDesign `Form`。
- 字段来自后端配置、低代码平台或租户配置时，才考虑 JSON Schema 方案。
- JSON Schema 渲染器可以内部使用 TDesign 组件，但不是 TDesign 官方组件能力。
- 不要编造 `JsonSchemaForm`、`SchemaForm` 之类 TDesign 官方组件名。
