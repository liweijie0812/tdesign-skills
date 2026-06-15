# TDesign 高频 Design Token

本文用于页面生成和样式改造时快速选择常用 `--td-*` 变量。完整组件级变量仍以当前技术栈 API 文档和项目主题文件为准。

## 使用原则

- 优先使用语义 Token，不直接写 hex、rgba、px 和任意圆角值。
- 组件已有 `theme`、`status`、`variant`、`size`、`layout` 等 props 时，先用 props，不优先覆盖内部样式。
- 自定义 CSS 只补组件组合无法覆盖的布局和局部样式。
- Light / Dark 主题共用语义变量名，不在业务样式里分别写两套颜色值。
- 不确定某组件是否暴露 CSS Variables 时，回到当前技术栈 `references/api/<component>/index.md` 查询。

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
| 品牌 active | `--td-brand-color-active` | 主按钮按下态 |
| 品牌浅底 | `--td-brand-color-light` | 弱选中背景、浅强调块 |
| 成功色 | `--td-success-color` | 成功、通过、完成 |
| 告警色 | `--td-warning-color` | 风险、注意、待处理 |
| 错误色 | `--td-error-color` | 失败、危险、删除、阻断 |

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

## 禁止组合

- 禁止 `background: var(--td-warning-color)` 搭配 `color: var(--td-text-color-brand)`。
- 禁止彩色实心底上使用 `--td-text-color-primary`、`--td-text-color-secondary` 作为主要前景。
- 禁止把 `--td-success-color`、`--td-warning-color`、`--td-error-color` 当普通装饰色随意互换。
- 禁止在支持主题 props 的组件上优先写大段自定义颜色覆盖。
- 禁止编造 `--td-*` 变量；不确定时查当前技术栈 API 或项目主题文件。
