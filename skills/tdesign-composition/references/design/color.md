# TDesign Color 色彩

来源：TDesign 官网 `https://tdesign.tencent.com/design/color`，上游源码 `Tencent/tdesign/site/src/pages/design/color_zh-CN.vue`。

当用户询问 TDesign 色彩、品牌色、功能色、中性色、扩展色、Design Token 或 CSS Variables 时，先按本文判断颜色语义，再按当前技术栈 API 或项目主题文件确认具体变量名与覆盖方式。

## 核心规则

- TDesign 官方色板面向中后台业务默认配色，包含主题色、功能色、中性色、扩展色 4 部分。
- 腾讯蓝 `Tencent Blue` 是默认主题色和主要交互色：`#0052d9` / `rgba(0, 82, 217, 1)`。
- 功能色用于表达成功、失败、告警、链接等状态；不要为了“好看”把语义色混用。
- 中性色用于文字、背景、分割、层级和深色模式适配；常用文字对比度需满足 WCAG2.0。
- 更多颜色需求，例如图表、插画、标签分组，优先从扩展色取色，不要随机自造业务色。
- 主题定制优先覆盖 TDesign Design Token / CSS Variables；不要直接覆盖组件内部 class 或硬改组件样式。

## 官方色板

### 主题色

| 语义 | 色阶 | Hex | 用法 |
| --- | --- | --- | --- |
| 品牌色 / 主交互色 | Blue7 | `#0052d9` | 主按钮、主操作、选中态、链接倾向 |
| Hover | Blue6 | `#366ef4` | 品牌色 hover |
| Active | Blue8 | `#003cab` | 品牌色 active / pressed |

### 功能色

| 语义 | 色阶 | Hex | Token 倾向 |
| --- | --- | --- | --- |
| 品牌 / 链接 | Blue7 | `#0052d9` | `@brand-color` / `--td-brand-color` |
| 错误 / 失败 / 危险 | Red6 | `#d54941` | `@error-color` / `--td-error-color` |
| 告警 / 警示 | Orange5 | `#e37318` | `@warning-color` / `--td-warning-color` |
| 成功 / 完成 | Green5 | `#2ba471` | `@success-color` / `--td-success-color` |

### 常用功能色阶

| 色系 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blue | `#f2f3ff` | `#d9e1ff` | `#b5c7ff` | `#8eabff` | `#618dff` | `#366ef4` | `#0052d9` | `#003cab` | `#002a7c` | `#001a57` |
| Red | `#fff0ed` | `#ffd8d2` | `#ffb9b0` | `#ff9285` | `#f6685d` | `#d54941` | `#ad352f` | `#881f1c` | `#68070a` | `#490002` |
| Orange | `#fff1e9` | `#ffd9c2` | `#ffb98c` | `#fa9550` | `#e37318` | `#be5a00` | `#954500` | `#713300` | `#532300` | `#3b1700` |
| Green | `#e3f9e9` | `#c6f3d7` | `#92dab2` | `#56c08d` | `#2ba471` | `#008858` | `#006c45` | `#005334` | `#003b23` | `#002515` |

### 中性色

| 色阶 | Hex | 典型用法 |
| --- | --- | --- |
| White | `#ffffff` | 容器背景、反色文字背景 |
| Gray1 L96 | `#f3f3f3` | 页面背景、浅容器 hover |
| Gray2 L94 | `#eeeeee` | 浅分割、浅填充 |
| Gray3 L92 | `#e8e8e8` | 容器 active、边界层级 |
| Gray4 L88 | `#dddddd` | 边框、禁用描边 |
| Gray5 L80 | `#c6c6c6` | 弱边框、辅助图形 |
| Gray6 L68 | `#a6a6a6` | 弱文字、禁用图标 |
| Gray7 L58 | `#8b8b8b` | 次级辅助信息 |
| Gray8 L50 | `#777777` | 次级文字 |
| Gray9 L40 | `#5e5e5e` | 正文弱化 |
| Gray10 L32 | `#4b4b4b` | 深色层级 |
| Gray11 L24 | `#393939` | 深色层级 |
| Gray12 L18 | `#2c2c2c` | 深色容器 |
| Gray13 L14 | `#242424` | 深色页面 |
| Gray14 L8 | `#181818` | 最深背景 |

### 带品牌倾向的中性色

页面模板等场景需要突出品牌氛围时，可以使用带蓝色倾向的中性色。设计源使用 RGB 混色模型，将品牌色按约 `8%` 到 `12%` 混入普通中性色；运用规则同普通中性色。

| 色阶 | Hex |
| --- | --- |
| BlueGray1 L96 | `#f3f3f4` |
| BlueGray2 L94 | `#eeeef0` |
| BlueGray3 L92 | `#e7e8eb` |
| BlueGray4 L88 | `#dcdde1` |
| BlueGray5 L80 | `#c4c6cd` |
| BlueGray6 L68 | `#a2a6b1` |
| BlueGray7 L58 | `#858a99` |
| BlueGray8 L50 | `#6f7686` |
| BlueGray9 L40 | `#535d6d` |
| BlueGray10 L32 | `#424a57` |
| BlueGray11 L24 | `#323843` |
| BlueGray12 L18 | `#272b34` |
| BlueGray13 L14 | `#20232b` |
| BlueGray14 L8 | `#15181d` |

### 扩展色

扩展色用于数据可视化、插画和更多业务分类色。TDesign 在蓝、红、黄、绿之外扩展了青色、紫色、黄色、粉色等色系；每个扩展色均为 10 级色阶。

| 色系 | 推荐主色 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cyan | Cyan5 `#029cd4` | `#e8f5ff` | `#c4e8ff` | `#85d3ff` | `#41b8f2` | `#029cd4` | `#0080b0` | `#00668e` | `#004e6d` | `#003850` | `#002536` |
| Purple | Purple6 `#8e56dd` | `#fbf0ff` | `#eedcff` | `#dcbfff` | `#c69cff` | `#ad75fe` | `#8e56dd` | `#7137bf` | `#5610a4` | `#3b007b` | `#280057` |
| Yellow | Yellow4 `#f5ba18` | `#fff5e4` | `#ffe7b5` | `#ffd36d` | `#f5ba18` | `#d8a100` | `#b38500` | `#8b6600` | `#654900` | `#443000` | `#2b1d00` |
| Pink | Pink5 `#e851b3` | `#fff0f6` | `#ffd8eb` | `#ffaedc` | `#ff79cd` | `#e851b3` | `#c43695` | `#a12279` | `#800a5f` | `#610046` | `#43002f` |

## Design Token 使用

TDesign 使用“色板 -> 全局语义 Token -> 组件 Token”的关系管理颜色。生成 UI 或改样式时，优先使用语义 Token，而不是直接把色板 hex 写进组件样式。

| 层级 | 示例 | 说明 |
| --- | --- | --- |
| 色板 | `blue-6`、`blue-7`、`blue-8`、`gray-1`、`fontgray-1` | 原始颜色，不直接承担组件语义 |
| 全局语义 Token | `@brand-color-hover`、`@brand-color`、`@brand-color-active`、`@bg-color-container`、`@text-color-primary` | 表达交互、容器、文字等全局语义 |
| 组件 Token | `@button-bg-hover`、`@button-bg`、`@button-bg-active`、`@table-bg`、`@table-bg-hover` | 组件内部消费全局语义 Token |

常见映射：

| 语义 Token | 建议来源 |
| --- | --- |
| `@brand-color-hover` | `@blue-color-6` |
| `@brand-color` | `@blue-color-7` |
| `@brand-color-active` | `@blue-color-8` |
| `@bg-color-container` | `@white-color` |
| `@bg-color-container-hover` | `@gray-color-1` |
| `@bg-color-container-active` | `@gray-color-3` |
| `@text-color-primary` | `@font-gray-1` |
| `@text-color-secondary` | `@font-gray-2` |

## 主题定制规则

- Web 和 Mobile 均推荐通过 CSS Variables 覆盖通用 Design Token，例如 `--td-brand-color`、`--td-warning-color`、`--td-error-color`、`--td-success-color`。
- Mobile 还常见组件级 CSS Variables，例如 `--td-button-primary-color`、`--td-button-light-color`、`--td-button-danger-color`。
- Less 技术栈且需要精细定制时，可以使用当前组件库 ESM 产物并通过 `modifyVars` 覆盖 Less 变量，例如 `@brand-color`。
- 只改单个业务页面的颜色时，先考虑组件 `theme`、`variant`、`status`、`color` 等已公开 API；API 不满足时再覆盖文档列出的 CSS Variables。
- 不要编造不存在的 CSS Variables；组件级变量必须查当前技术栈 skill 的 `references/api/<component>/index.md` 的 `CSS Variables` 表。

## 选择建议

| 场景 | 推荐 |
| --- | --- |
| 主按钮、主链接、选中态 | 使用组件 `theme="primary"` 或品牌色 token，不直接写 `#0052d9` |
| 删除、失败、危险操作 | 使用 `danger` / `error` 语义，不用品牌蓝或橙色代替 |
| 成功反馈 | 使用 `success` 语义，避免自造绿色 |
| 告警、需注意但非失败 | 使用 `warning` 语义，避免与错误红混用 |
| 普通正文和辅助文字 | 使用 `text-color-primary` / `text-color-secondary` 等文字 token |
| 背景和分割层级 | 使用 `bg-color-*`、`border-*` 或灰阶 token |
| 图表和多分类 | 使用扩展色或项目图表规范，不从功能色中随意抽取 |

## 禁止行为

- 禁止将错误、警告、成功、品牌色作为纯装饰色随意互换。
- 禁止在 TDesign 组件已有 `theme` / `status` / CSS Variables 时，用大量自定义 CSS 覆盖内部结构。
- 禁止只按 hex 判断语义；同一色值在不同主题、深色模式或组件状态下可能由不同 token 管理。
- 禁止忽略无障碍对比度，尤其是文字、按钮、标签、提示和图表标注。
