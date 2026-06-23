# TDesign 高频 Design Token

本文用于页面生成和样式改造时快速选择常用 `--td-*` 变量。完整组件级变量仍以当前技术栈 API 文档和项目主题文件为准。

## 常用 Token 速查

| 场景 | Token |
| --- | --- |
| 页面标题字号 | `var(--td-font-size-title-large)` |
| 正文字号 | `var(--td-font-size-body-medium)` |
| 主文字颜色 | `var(--td-text-color-primary)` |
| 次要文字颜色 | `var(--td-text-color-secondary)` |
| 占位文字颜色 | `var(--td-text-color-placeholder)` |
| 页面背景 | `var(--td-bg-color-page)` |
| 容器背景 | `var(--td-bg-color-container)` |
| 内容区间距 | `var(--td-comp-paddingLR-xl)` |
| 区块间距 | `var(--td-comp-margin-l)` |
| 组件间距 | `var(--td-comp-margin-s)` |
| Header 高度 | `var(--td-comp-size-xxxl)` |
| 品牌色 | `var(--td-brand-color)` |
| 分割线 | `var(--td-component-border)` |
| 浅阴影 | `var(--td-shadow-1)` |
| 默认圆角 | `var(--td-radius-default)` |

## 使用原则

- 优先级：先用组件 props 和布局能力，再在业务样式里直接写 `var(--td-*)` 形式的 TDesign CSS Variables，最后才补少量业务 CSS。
- 业务 CSS 中的颜色、文字、间距、圆角、组件尺寸和状态样式优先使用 `--td-*` 语义 Token。
- 不直接把 hex、rgba、任意 px 和任意圆角值写成业务视觉规范；确需硬值时必须属于“允许例外”。
- 组件已有 `theme`、`status`、`variant`、`size`、`layout` 等 props 时，先用 props，不优先覆盖内部样式。
- 自定义 CSS 只补组件组合无法覆盖的布局和局部样式。
- Light / Dark 主题共用语义变量名，不在业务样式里分别写两套颜色值。
- 字体、行高、间距、组件尺寸和圆角在 Light / Dark 下共用同一套 Token，不随主题分叉。
- 不确定某组件是否暴露 CSS Variables 时，回到当前技术栈 `references/api/<component>/index.md` 查询。

## 允许例外

- 设计规范、说明文档和表格中可以写 `8px`、`16px`、`24px` 等基准值，用来解释 Token 含义；生成业务样式时仍优先写对应 Token。
- `1px` 边框、媒体查询断点、栅格断点、动画微位移、第三方图表配置和平台安全区适配可以保留必要硬值。
- 用于 CSS fallback 的硬值可以保留，例如 `var(--td-bg-color-page, #f3f3f3)`；主值必须仍是 Token。
- 组件 API 明确要求数字、像素字符串或图表色值时，按当前技术栈 API 和项目主题规范处理，并在交付说明中标注人工确认。
- 对 Token 不存在或项目主题未暴露的组件级变量，不要编造 `--td-*`，先查 API 或项目主题文件。

## 颜色 Token

### 背景与容器

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 页面底色 | `--td-bg-color-page` | 应用最底层背景 |
| 主容器背景 | `--td-bg-color-container` | `Card`、主内容面板、弹窗内容 |
| 主容器 hover | `--td-bg-color-container-hover` | 列表项、卡片、菜单项 hover |
| 主容器 active | `--td-bg-color-container-active` | 按下态、选中辅助背景 |
| 次级容器 | `--td-bg-color-secondarycontainer` | 筛选区、弱分组、浅色块 |
| 组件背景 | `--td-bg-color-component` | 输入框、选择器等组件表面 |
| 禁用背景 | `--td-bg-color-component-disabled` | 禁用输入、禁用控件背景 |

### 文本与图标

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 主文字 | `--td-text-color-primary` | 标题、正文、主要数据 |
| 次要文字 | `--td-text-color-secondary` | 描述、辅助信息、表格弱信息 |
| 占位文字 | `--td-text-color-placeholder` | 占位符、提示说明、空值提示 |
| 禁用文字 | `--td-text-color-disabled` | 禁用状态文案和图标 |
| 反色文字 | `--td-text-color-anti` | 彩色实心底、深色底文字和图标 |
| 品牌文字 | `--td-text-color-brand` | 品牌强调、选中标签、局部强调 |
| 链接文字 | `--td-text-color-link` | 文本链接 |

### 品牌与功能色

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 品牌色 | `--td-brand-color` | 主按钮、选中态、主强调 |
| 品牌 hover | `--td-brand-color-hover` | 主按钮 hover、可点击品牌态 |
| 品牌 focus | `--td-brand-color-focus` | 焦点态、弱聚焦背景 |
| 品牌 active | `--td-brand-color-active` | 主按钮按下态 |
| 品牌 disabled | `--td-brand-color-disabled` | 品牌禁用态 |
| 品牌浅底 | `--td-brand-color-light` | 弱选中背景、浅强调块 |
| 品牌浅底 hover | `--td-brand-color-light-hover` | 浅强调 hover |
| 成功色 | `--td-success-color` | 成功、通过、完成 |
| 告警色 | `--td-warning-color` | 风险、注意、待处理 |
| 错误色 | `--td-error-color` | 失败、危险、删除、阻断 |

功能色也有同构状态变量：`--td-success-color-hover`、`--td-success-color-focus`、`--td-success-color-active`、`--td-success-color-disabled`、`--td-success-color-light`、`--td-warning-color-*`、`--td-error-color-*`。生成 hover / focus / active / disabled / light 状态时使用同语义状态变量，不要跨语义借色。

### 边框、分割与阴影

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 弱分割线 | `--td-component-stroke` | 卡片分割、表格分割、Header 下边线 |
| 可见边框 | `--td-component-border` | 输入框、卡片描边、容器边界 |
| 一级边框 | `--td-border-level-1-color` | 弱边界和轻量分割 |
| 二级边框 | `--td-border-level-2-color` | 更明确的边界 |
| 浅浮层阴影 | `--td-shadow-1` | 轻浮起卡片、弱悬浮 |
| 中浮层阴影 | `--td-shadow-2` | 下拉、气泡、选择面板 |
| 高浮层阴影 | `--td-shadow-3` | 通知、全局浮层 |

## 字体 Token

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 默认字体 | `--td-font-family` | 页面整体字体 |
| 中等字重字体 | `--td-font-family-medium` | 标题、强调信息 |
| 小正文 | `--td-font-size-body-small` | 辅助说明、表格弱信息 |
| 默认正文 | `--td-font-size-body-medium` | 表单、表格、正文 |
| 大正文 | `--td-font-size-body-large` | 重要正文、局部突出 |
| 小标题 | `--td-font-size-title-small` | 卡片内小标题 |
| 中标题 | `--td-font-size-title-medium` | 卡片标题、区块标题 |
| 大标题 | `--td-font-size-title-large` | 页面标题、重点模块标题 |
| 页面头标题 | `--td-font-size-headline-small` | 仪表盘标题、页面头区域 |

优先使用组件默认字号。只有页面标题、统计数字、说明信息等需要自定义层级时，再显式使用字体 Token。
行高优先使用对应 `--td-line-height-*`，或直接使用已包含字号、字重与行高的 shorthand：`--td-font-body-*`、`--td-font-title-*`、`--td-font-headline-*`、`--td-font-display-*`。

## 间距 Token

| Token | 值 | 典型场景 |
| --- | --- | --- |
| `--td-size-2` | 4px | 极小间距、图标和文字紧邻 |
| `--td-size-4` | 8px | 小组件间距、标签间距 |
| `--td-size-5` | 12px | 表单项内部、小区块间距 |
| `--td-size-6` | 16px | 常规组件间距、卡片内边距下限 |
| `--td-size-8` | 24px | 页面安全边距、卡片内边距、区块间距 |
| `--td-size-10` | 32px | 大区块间距、页面头与主体间距 |
| `--td-size-13` | 48px | 强分隔区块、仪表盘大模块间距 |

## 组件尺寸 Token

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 小控件高度 | `--td-comp-size-s` | 小按钮、小输入、紧凑操作 |
| 默认控件高度 | `--td-comp-size-m` | 常规按钮、输入、选择器 |
| 大控件高度 | `--td-comp-size-l` | 大按钮、大输入、重点操作 |
| 导航顶栏高度 | `--td-comp-size-xxxl` | Web 应用壳 Header，通常等价 56px |
| 横向小内边距 | `--td-comp-paddingLR-s` | 小按钮、标签 |
| 横向默认内边距 | `--td-comp-paddingLR-m` | 常规按钮、输入、容器 |
| 横向大内边距 | `--td-comp-paddingLR-l` | 大按钮、卡片标题区 |

Web 后台应用壳与标准导航组合时，`Header` / `t-layout__header` 默认使用 `--td-comp-size-xxxl`；侧栏品牌区使用同一高度 Token 保持基线一致。不要把顶部区域改成 `52px`、`60px` 等非组件尺寸阶梯值。

## 圆角 Token

| 用途 | Token | 典型场景 |
| --- | --- | --- |
| 小圆角 | `--td-radius-small` | 小标签、小控件 |
| 默认圆角 | `--td-radius-default` | 按钮、输入框、表格单元格 |
| 中圆角 | `--td-radius-medium` | 卡片、弹窗、较大容器 |
| 大圆角 | `--td-radius-large` | 强调模块、大卡片 |
| 超大圆角 | `--td-radius-extraLarge` | 少量视觉强调容器 |
| 胶囊圆角 | `--td-radius-round` | Pill 标签、胶囊按钮 |
| 圆形 | `--td-radius-circle` | 头像、圆形图标按钮 |

## 高频组合

### 页面容器

```css
.page {
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
  padding: var(--td-size-8);
}
```

### 内容卡片

```css
.section-card {
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-component-stroke);
  border-radius: var(--td-radius-medium);
  padding: var(--td-size-8);
}
```

### 彩色 Avatar

```css
.colored-avatar {
  background: var(--td-brand-color);
  color: var(--td-text-color-anti);
}
```

### 应用壳 Header

```css
.t-layout__header.app-header {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
  padding: 0 var(--td-size-8);
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}
```

## 禁止组合

- 禁止 `background: var(--td-warning-color)` 搭配 `color: var(--td-text-color-brand)`。
- 禁止彩色实心底上使用 `--td-text-color-primary`、`--td-text-color-secondary` 作为主要前景。
- 禁止把 `--td-success-color`、`--td-warning-color`、`--td-error-color` 当普通装饰色随意互换。
- 禁止 hover / focus / active / disabled 状态跨语义借色，例如错误按钮 hover 使用品牌 hover。
- 禁止在支持主题 props 的组件上优先写大段自定义颜色覆盖。
- 禁止用硬编码 `56px` 优先于 `--td-comp-size-xxxl` 表达标准后台 Header 高度。
- 禁止编造 `--td-*` 变量；不确定时查当前技术栈 API 或项目主题文件。
