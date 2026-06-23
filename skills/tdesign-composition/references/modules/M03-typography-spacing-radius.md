# M03 - Typography / Spacing / Radius

本模块定义无设计文件场景下的 TDesign 排版、间距和圆角规则。它接收 `M01` 的 Token 优先与 8px 栅格原则，并与 `M02` 的颜色语义分工：本模块不定义颜色，只定义字体族、字号、行高、尺寸、组件间距和圆角。

## 1. 使用优先级

1. 优先使用组件默认排版、尺寸、间距和圆角；只有组件组合无法表达业务层级时，才在业务 CSS 中显式写 Token。
2. 自定义字号、行高、间距、组件尺寸和圆角时，优先写 `var(--td-*)`，不要把固定 px 当成设计规范。
3. Typography、Spacing、Radius 在 Light / Dark 下共用同一套变量名和默认数值，不随 `theme-mode` 分叉。
4. 默认数值参考 TDesign 官方主题源码 [`_font.less`](https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_font.less)、[`_size.less`](https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_size.less)、[`_radius.less`](https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_radius.less)；项目已覆盖主题时，以项目运行时 CSS Variables 为准。
5. 组件级 CSS Variables 必须查当前技术栈 API 或项目主题文件，不要编造不存在的 `--td-*` 变量。

## 2. Typography

### 字体族

| Token | 默认值 | 用途 |
| --- | --- | --- |
| `--td-font-family` | `PingFang SC, Microsoft YaHei, Arial Regular` | 页面整体字体 |
| `--td-font-family-medium` | `PingFang SC, Microsoft YaHei, Arial Medium` | 标题、强调信息、中等字重 |

中文界面默认跟随 TDesign 字体栈；标题和重点数据可使用 `--td-font-family-medium`，正文以常规字重为主，不靠随意加粗制造层级。

### 字号 Token

| Token | 默认字号 | 典型用途 |
| --- | --- | --- |
| `--td-font-size-body-small` | `12px` | 辅助说明、表格弱信息 |
| `--td-font-size-body-medium` | `14px` | 默认正文、表单、表格 |
| `--td-font-size-body-large` | `16px` | 重要正文、局部突出 |
| `--td-font-size-title-small` | `14px` | 卡片内小标题 |
| `--td-font-size-title-medium` | `16px` | 卡片标题、区块标题 |
| `--td-font-size-title-large` | `18px` | 页面标题、重点模块标题 |
| `--td-font-size-title-extraLarge` | `20px` | 大页面标题、强标题 |
| `--td-font-size-headline-small` | `24px` | 仪表盘头部、页面头区域 |
| `--td-font-size-headline-medium` | `28px` | 数据概览标题 |
| `--td-font-size-headline-large` | `36px` | 大屏局部重点 |
| `--td-font-size-display-medium` | `48px` | 大屏数字、展示型标题 |
| `--td-font-size-display-large` | `64px` | 展示型大标题 |
| `--td-font-size-link-small` | `12px` | 小链接 |
| `--td-font-size-link-medium` | `14px` | 默认链接 |
| `--td-font-size-link-large` | `16px` | 大链接 |
| `--td-font-size-mark-small` | `12px` | 小标记 |
| `--td-font-size-mark-medium` | `14px` | 默认标记 |

### 行高 Token

| Token | 默认行高 |
| --- | --- |
| `--td-line-height-body-small` | `20px` |
| `--td-line-height-body-medium` | `22px` |
| `--td-line-height-body-large` | `24px` |
| `--td-line-height-link-small` | `20px` |
| `--td-line-height-link-medium` | `22px` |
| `--td-line-height-link-large` | `24px` |
| `--td-line-height-mark-small` | `20px` |
| `--td-line-height-mark-medium` | `22px` |
| `--td-line-height-title-small` | `22px` |
| `--td-line-height-title-medium` | `24px` |
| `--td-line-height-title-large` | `26px` |
| `--td-line-height-title-extraLarge` | `28px` |
| `--td-line-height-headline-small` | `32px` |
| `--td-line-height-headline-medium` | `36px` |
| `--td-line-height-headline-large` | `44px` |
| `--td-line-height-display-medium` | `56px` |
| `--td-line-height-display-large` | `72px` |

行高优先使用对应 `--td-line-height-*`，或使用已包含字号、字重和行高的 shorthand。经验关系是 `line-height ≈ font-size + 8`，但代码中已有固定 Token 时以 Token 为准。

### 合成字体 shorthand

| Token 族 | 用途 |
| --- | --- |
| `--td-font-body-small` / `medium` / `large` | 正文层级 |
| `--td-font-title-small` / `medium` / `large` / `extraLarge` | 标题层级 |
| `--td-font-headline-small` / `medium` / `large` | 页面头、数据概览、大标题 |
| `--td-font-display-medium` / `large` | 展示型标题和大屏数字 |
| `--td-font-link-small` / `medium` / `large` | 链接文字 |
| `--td-font-mark-small` / `medium` | 标记文字 |

生成 CSS 时，能用 shorthand 就优先写 `font: var(--td-font-body-medium)`；只需调整单项时再分别写 `font-size`、`line-height` 和 `font-family` Token。

### 排版层级默认组合

| 层级 | 推荐 Token |
| --- | --- |
| 页面标题 | `--td-font-title-large` 或 `--td-font-size-title-large` |
| 区块标题 | `--td-font-title-medium` 或 `--td-font-size-title-medium` |
| 卡片内小标题 | `--td-font-title-small` 或 `--td-font-size-title-small` |
| 正文 | `--td-font-body-medium` 或 `--td-font-size-body-medium` |
| 辅助说明 | `--td-font-body-small` 或 `--td-font-size-body-small` |
| 页面头标题 | `--td-font-headline-small` 或 `--td-font-size-headline-small` |

同一页面至少保持页面标题、区块标题、正文和辅助信息的层级区分；不要让所有文案同字号、同颜色、同字重。

## 3. Spacing

### 基础尺寸阶梯

| Token | 默认值 | 常见用途 |
| --- | --- | --- |
| `--td-size-1` | `2px` | 极小偏移、细节微调 |
| `--td-size-2` | `4px` | 图标和文字紧邻、微型间距 |
| `--td-size-3` | `6px` | 小组件内部间距 |
| `--td-size-4` | `8px` | 小组件间距、标签间距 |
| `--td-size-5` | `12px` | 表单项内部、小区块间距 |
| `--td-size-6` | `16px` | 常规组件间距、卡片内边距下限 |
| `--td-size-7` | `20px` | 中等间距 |
| `--td-size-8` | `24px` | 页面安全边距、卡片内边距、区块间距 |
| `--td-size-9` | `28px` | 大控件间距 |
| `--td-size-10` | `32px` | 页面头与主体、大区块间距 |
| `--td-size-11` | `36px` | 大段落间距 |
| `--td-size-12` | `40px` | 大容器间距 |
| `--td-size-13` | `48px` | 强分隔区块、仪表盘大模块间距 |
| `--td-size-14` | `56px` | 标准后台 Header 高度来源 |
| `--td-size-15` | `64px` | 大页面留白 |
| `--td-size-16` | `72px` | 展示型大留白 |

页面布局遵循 8px 栅格思维，常用 `8px`、`16px`、`24px`、`32px`、`40px`、`48px`，允许 `4px`、`12px` 作为小间距例外。区块级留白优先 `16px`、`24px`、`32px`、`48px`。

### 组件尺寸阶梯

| Token | 默认来源 | 典型用途 |
| --- | --- | --- |
| `--td-comp-size-xxxs` | `--td-size-6` | 极小组件高度 |
| `--td-comp-size-xxs` | `--td-size-7` | 超小组件高度 |
| `--td-comp-size-xs` | `--td-size-8` | 小型组件高度 |
| `--td-comp-size-s` | `--td-size-9` | 小按钮、小输入 |
| `--td-comp-size-m` | `--td-size-10` | 默认按钮、输入、选择器 |
| `--td-comp-size-l` | `--td-size-11` | 大按钮、大输入 |
| `--td-comp-size-xl` | `--td-size-12` | 较大控件 |
| `--td-comp-size-xxl` | `--td-size-13` | 大控件 / 区块控件 |
| `--td-comp-size-xxxl` | `--td-size-14` | Web 应用壳 Header，通常等价 `56px` |
| `--td-comp-size-xxxxl` | `--td-size-15` | 大型展示控件 |
| `--td-comp-size-xxxxxl` | `--td-size-16` | 超大型展示控件 |

后台应用壳与标准导航组合时，`Header` / `t-layout__header` 默认使用 `--td-comp-size-xxxl`，不要优先硬写 `56px`。

### 组件内外边距

| Token 族 | 用途 |
| --- | --- |
| `--td-comp-paddingLR-xxs` ... `--td-comp-paddingLR-xxl` | 组件左右内边距 |
| `--td-comp-paddingTB-xxs` ... `--td-comp-paddingTB-xxl` | 组件上下内边距 |
| `--td-comp-margin-xxs` ... `--td-comp-margin-xxxxl` | 组件外边距和组合间距 |
| `--td-pop-padding-s` ... `--td-pop-padding-xxl` | 弹出层、浮层、气泡类内边距 |

优先用 `Space`、`Row`、`Col`、`Layout` 和组件自带 spacing props 表达布局间距；只有组件能力不足时，才补业务 CSS。

### 页面场景默认间距

| 场景 | 推荐 Token |
| --- | --- |
| 图标与文字紧邻 | `--td-size-2` |
| 按钮组 / 标签组 | `--td-size-4` |
| 表单项内部短说明 | `--td-size-5` |
| 字段组 / 工具栏项 | `--td-size-6` |
| 页面安全边距 / 卡片内边距 | `--td-size-8` |
| 页面头与主体分隔 | `--td-size-10` |
| 仪表盘大模块分隔 | `--td-size-13` |

同一页面主间距档位控制在 1 到 2 个，常见组合是 `16px + 24px` 或 `24px + 32px`。禁止无规律间距，例如 `13px`、`17px`、`21px`。

## 4. Radius

圆角保持小圆角和全页统一，避免同一界面混用过大圆角与直角。

| Token | 默认值 | 典型用途 |
| --- | --- | --- |
| `--td-radius-small` | `2px` | 小标签、小控件、极小元素 |
| `--td-radius-default` | `3px` | 按钮、输入框、表格单元格默认 |
| `--td-radius-medium` | `6px` | 卡片、弹窗、较大容器 |
| `--td-radius-large` | `9px` | 少量强调模块、大卡片 |
| `--td-radius-extraLarge` | `12px` | 强调大容器 |
| `--td-radius-round` | `999px` | Pill 标签、胶囊按钮 |
| `--td-radius-circle` | `50%` | 圆形头像、圆形图标按钮 |

控件默认使用 `--td-radius-default`，卡片和弹窗默认使用 `--td-radius-medium`。只有需要明显强调的大容器才使用 `--td-radius-large` 或 `--td-radius-extraLarge`。

## 5. 生成与审计检查

- 自定义字号、行高、字体族是否使用 `--td-font-*` 或 `--td-line-height-*`。
- 间距是否优先使用 `--td-size-*`、`--td-comp-*`、组件 spacing props 或布局组件。
- Header 高度是否使用 `--td-comp-size-xxxl`，并按 M01 / Layout 规则补齐 `height`、`min-height`、`flex-shrink: 0`。
- 圆角是否使用 `--td-radius-*`，且页面内圆角层级统一。
- 是否存在无规律硬编码，如 `margin: 13px`、`gap: 17px`、`border-radius: 11px`。
- 是否误把 Light / Dark 写成两套字号、行高、间距或圆角。

## 6. 交接协议

```yaml
module_id: M03
context: no-design-file
inputs_used:
  - M01 Usage-2
  - M01 Design principles
  - M02 colors boundary
decisions:
  - 字体、行高、间距和圆角在 Light / Dark 下不分叉
  - 字号与行高优先使用 --td-font-* shorthand 或对应 Token
  - 间距统一引用 --td-size-* / --td-comp-*，不把自定义 px 当规范
  - 圆角仅在 small/default/medium/large/extraLarge/round/circle 中取
artifacts:
  - 字体 / 行高 Token 表
  - 间距与组件尺寸 Token 表
  - 圆角 Token 表
risks:
  - 如与工程现有主题冲突，以工程内 TDesign 主题变量为运行真理源
next_module: M04
```
