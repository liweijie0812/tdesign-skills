# TDesign Skills 职责边界

## 单一主责

每次处理 TDesign 任务时，只选择 1 个主责 skill，再按需读取其他 skill 的少量参考资料。不要把多个 skill 当作并列主入口同时展开。

## 职责速查

| 用户意图 | 主责 skill | 只回答什么 | 不回答什么 |
| --- | --- | --- | --- |
| 不确定项目使用哪个 TDesign 包，或任务横跨多个栈 | `tdesign-skills` | 识别依赖、判断技术栈、路由到专项 skill | 具体 API、完整实现 |
| 文档入口、资料在哪里、当前栈有没有某组件 | `tdesign-docs` | 资料位置、覆盖矩阵、上游来源 | 组件选型理由、页面组合、props 写法 |
| 该选哪个组件、为什么、有哪些反模式 | `tdesign-usage-guide` | 设计决策、相似组件取舍、迁移/评审口径 | 具体 props、事件、插槽和代码落地 |
| 组件搭配、某类页面怎么搭、组件怎么组合、starter 页面模式 | `tdesign-composition` | 组件搭配、页面骨架和场景校验点 | 视觉规则、Token、质量门禁、单个组件 API 细节 |
| 设计规范、Design Token、色彩、视觉一致性、布局框架、质量门禁、DS 自检 | `tdesign-design-spec` | 视觉规则、Token 取值和交付自检 | 页面场景组合、组件选型、具体 API |
| 某组件 props、事件、插槽、类型、用法说明和示例代码 | 对应技术栈 API skill | 当前技术栈的真实 API 和写法 | 跨栈推断、组件是否应该选用 |
| 图标名称、关键词、分类、是否存在、包名和导入方式 | `tdesign-icons` | 图标检索、候选图标名、官方图标包和按需导入方式 | 图标组件 API 细节、业务图标设计 |
| 能力在哪个版本新增、修复、废弃 | `tdesign-changelog` | 版本历史、breaking changes、迁移线索 | 当前 API 形状和默认值 |

## 交接规则

- 选型结论需要落地代码时，从 `tdesign-usage-guide` 交接到对应技术栈 API skill。
- 组件搭配或页面骨架确定后，从 `tdesign-composition` 交接到对应技术栈 API skill。
- 视觉规则、Token 和自检确认后，从 `tdesign-design-spec` 交接到对应技术栈 API skill；页面组合需求转回 `tdesign-composition`。
- 用户追问“怎么用”“怎么写”“给个示例”时，直接交接到对应技术栈 API skill，不继续停留在 docs、选型或场景层回答实现细节。
- 图标名、图标包和按需导入方式确定后，从 `tdesign-icons` 交接到对应技术栈的 `Icon` API。
- changelog 查到版本线索后，必须回到对应技术栈 API skill 确认当前写法。
- 组件缺失或能力不足时，先查 `tdesign-docs` 覆盖矩阵，再查 `tdesign-usage-guide` 降级策略。
