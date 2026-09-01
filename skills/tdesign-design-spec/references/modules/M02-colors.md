# M02 - Colors

本模块定义无设计文件场景下的 TDesign 色彩规则。它接收 `M01` 的 Token 优先、图标语义色和禁止硬编码要求，输出给排版间距、布局导航和组件组合模块使用。

## 1. 使用优先级

1. 生成业务样式时优先写语义变量，例如 `var(--td-bg-color-page)`、`var(--td-text-color-primary)`、`var(--td-brand-color)`，不要直接写色板 hex。
2. 组件已有 `theme`、`status`、`variant`、`color` 或主题 API 时，先用组件公开能力，不优先覆盖内部 class。
3. Light / Dark 共用同一语义变量名，不在业务代码里手写两套颜色。
4. 具体运行值以项目已安装的 TDesign 版本、主题覆盖和运行时 CSS Variables 为准；本文中的 hex 是默认主题参考。
5. 图标颜色必须绑定文本或品牌等语义 Token，不硬编码灰阶 hex。

## 2. 高频颜色 Token

| 用途 | Token | Light 默认值 | Dark 默认值 |
| --- | --- | --- | --- |
| 页面背景 | `--td-bg-color-page` | `#eee` | `#181818` |
| 卡片 / 主容器背景 | `--td-bg-color-container` | `#fff` | `#242424` |
| 输入 / 组件背景 | `--td-bg-color-component` | `#e8e8e8` | `#393939` |
| 主文字 | `--td-text-color-primary` | `rgba(0, 0, 0, 90%)` | `rgba(255, 255, 255, 90%)` |
| 次要文字 | `--td-text-color-secondary` | `rgba(0, 0, 0, 60%)` | `rgba(255, 255, 255, 55%)` |
| 占位 / 说明 | `--td-text-color-placeholder` | `rgba(0, 0, 0, 40%)` | `rgba(255, 255, 255, 35%)` |
| 禁用文字 | `--td-text-color-disabled` | `rgba(0, 0, 0, 26%)` | `rgba(255, 255, 255, 22%)` |
| 反色文字 | `--td-text-color-anti` | `#fff` | `#fff` |
| 链接色 | `--td-text-color-link` | `var(--td-brand-color-8)` | `var(--td-brand-color-8)` |
| 品牌色 | `--td-brand-color` | `#0052d9` | `#4582e6` |
| 告警色 | `--td-warning-color` | `#e37318` | `#cf6e2d` |
| 错误色 | `--td-error-color` | `#d54941` | `#c64751` |
| 成功色 | `--td-success-color` | `#2ba471` | `#059465` |
| 可见边框 | `--td-component-border` | `#ddd` | `#5e5e5e` |
| 弱分割线 | `--td-component-stroke` | `#e8e8e8` | `#393939` |

## 3. 硬性规则

- 界面结构使用灰阶、背景和边框语义 Token；强调与状态使用品牌、成功、告警、错误语义色。
- 禁止用成功色表达错误、用告警色表达删除、用错误色表达普通强调等语义颠倒。
- 禁止把色板 hex、`rgba()` 或随机业务色当成组件颜色规范；确需 fallback、图表色或项目主题值时必须说明原因。
- `hover`、`focus`、`active`、`disabled`、`light` 状态只能使用同语义状态变量，例如 `--td-error-color-hover`，不能跨语义借用品牌 hover。
- 有色实心底上的文字、图标、头像缩写必须使用 `--td-text-color-anti`。

## 4. 语义层

### 背景与容器

| Token | 用途 |
| --- | --- |
| `--td-bg-color-page` | 页面底层背景 |
| `--td-bg-color-container` | 主容器、卡片、弹窗内容 |
| `--td-bg-color-container-hover` | 容器 hover |
| `--td-bg-color-container-active` | 容器按下 / active |
| `--td-bg-color-container-select` | 容器选中背景 |
| `--td-bg-color-secondarycontainer` | 次级容器、弱分组、浅强调块 |
| `--td-bg-color-secondarycontainer-hover` | 次级容器 hover |
| `--td-bg-color-secondarycontainer-active` | 次级容器 active |
| `--td-bg-color-component` | 输入框、选择器等组件表面 |
| `--td-bg-color-component-hover` | 组件 hover |
| `--td-bg-color-component-active` | 组件 active |
| `--td-bg-color-component-disabled` | 禁用组件背景 |
| `--td-bg-color-secondarycomponent` | 次级组件表面 |
| `--td-bg-color-specialcomponent` | 特殊组件背景 |

### 文本与图标

| Token | 用途 |
| --- | --- |
| `--td-text-color-primary` | 标题、正文、主要数据 |
| `--td-text-color-secondary` | 描述、辅助信息、表格弱信息 |
| `--td-text-color-placeholder` | 占位符、空值提示、弱说明 |
| `--td-text-color-disabled` | 禁用态文案和图标 |
| `--td-text-color-anti` | 彩色实心底、深色底文字和图标 |
| `--td-text-color-brand` | 品牌强调、选中标签、局部强调 |
| `--td-text-color-link` | 文本链接 |
| `--td-text-color-watermark` | 水印文字 |

### 边框、分割与浮层

| Token | 用途 |
| --- | --- |
| `--td-border-level-1-color` | 弱边界和轻量分割 |
| `--td-component-stroke` | 卡片分割、表格分割、Header 下边线 |
| `--td-border-level-2-color` | 更明确的边界 |
| `--td-component-border` | 输入框、卡片描边、容器边界 |
| `--td-shadow-1` | 浅浮起、弱悬浮、表格 / 树行 hover |
| `--td-shadow-2` | 下拉、气泡、选择器面板 |
| `--td-shadow-3` | 通知、全局提示等高层级浮层 |

## 5. 有色背景上的文字

当元素整块填充面使用 `--td-brand-color`、`--td-warning-color`、`--td-error-color`、`--td-success-color` 或这些语义的 hover / active 实心色时，置于其上的文字、图标和头像缩写必须使用 `color: var(--td-text-color-anti)`。

禁止组合：

- `background: var(--td-warning-color)` 搭配 `color: var(--td-text-color-brand)`。
- `background: var(--td-brand-color)` 搭配 `color: var(--td-text-color-primary)`。
- `background: var(--td-error-color)` 搭配 `color: var(--td-text-color-secondary)`。

推荐组合：

```css
.status-chip {
  background: var(--td-warning-color);
  color: var(--td-text-color-anti);
}
```

### Avatar 强制规则

凡给 `Avatar` / `<t-avatar>` / 头像缩写设置自定义 `background`、`backgroundColor` 或 `bgColor`，必须同步设置 `color: var(--td-text-color-anti)`，或提供统一兜底样式。

```css
.t-avatar,
.t-avatar .t-avatar__inner,
.t-avatar .t-icon {
  color: var(--td-text-color-anti);
}
```

如果使用随机或哈希函数分配头像背景色，函数返回背景色的同时必须返回反色前景，或由容器统一兜底。禁止任何彩色头像搭配 `--td-text-color-brand`、`--td-text-color-primary` 或 `--td-text-color-secondary` 作为主要前景。

### Dark 模式

Dark 下仍然使用同一条规则：自定义品牌色、告警色、错误色、成功色等实心底上的前景默认绑定 `--td-text-color-anti`。不要因为 `--td-text-color-primary` 在 Dark 下是白系，就默认它适合所有饱和色底。

## 6. 品牌色与功能色

### Light 默认色阶

| Token | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `--td-brand-color-*` | `#f2f3ff` | `#d9e1ff` | `#b5c7ff` | `#8eabff` | `#618dff` | `#366ef4` | `#0052d9` | `#003cab` | `#002a7c` | `#001a57` |
| `--td-warning-color-*` | `#fff1e9` | `#ffd9c2` | `#ffb98c` | `#fa9550` | `#e37318` | `#be5a00` | `#954500` | `#713300` | `#532300` | `#3b1700` |
| `--td-error-color-*` | `#fff0ed` | `#ffd8d2` | `#ffb9b0` | `#ff9285` | `#f6685d` | `#d54941` | `#ad352f` | `#881f1c` | `#68070a` | `#490002` |
| `--td-success-color-*` | `#e3f9e9` | `#c6f3d7` | `#92dab2` | `#56c08d` | `#2ba471` | `#008858` | `#006c45` | `#005334` | `#003b23` | `#002515` |

### Dark 默认色阶

| Token | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `--td-brand-color-*` | `#1b2f51` | `#173463` | `#143975` | `#103d88` | `#0d429a` | `#054bbe` | `#2667d4` | `#4582e6` | `#699ef5` | `#96bbf8` |
| `--td-warning-color-*` | `#4f2a1d` | `#582f21` | `#733c23` | `#a75d2b` | `#cf6e2d` | `#dc7633` | `#e8935c` | `#ecbf91` | `#eed7bf` | `#f3e9dc` |
| `--td-error-color-*` | `#472324` | `#5e2a2d` | `#703439` | `#83383e` | `#a03f46` | `#c64751` | `#de6670` | `#ec888e` | `#edb1b6` | `#eeced0` |
| `--td-success-color-*` | `#193a2a` | `#1a4230` | `#17533d` | `#0d7a55` | `#059465` | `#43af8a` | `#46bf96` | `#80d2b6` | `#b4e1d3` | `#deede8` |

### 状态变量

| 语义 | Light 默认 | Dark 默认 |
| --- | --- | --- |
| `--td-brand-color` | `--td-brand-color-7` | `--td-brand-color-8` |
| `--td-brand-color-hover` | `--td-brand-color-6` | `--td-brand-color-7` |
| `--td-brand-color-focus` | `--td-brand-color-2` | `--td-brand-color-2` |
| `--td-brand-color-active` | `--td-brand-color-8` | `--td-brand-color-9` |
| `--td-brand-color-disabled` | `--td-brand-color-3` | `--td-brand-color-3` |
| `--td-brand-color-light` | `--td-brand-color-1` | `--td-brand-color-1` |
| `--td-warning-color` | `--td-warning-color-5` | `--td-warning-color-5` |
| `--td-error-color` | `--td-error-color-6` | `--td-error-color-6` |
| `--td-success-color` | `--td-success-color-5` | `--td-success-color-5` |

生成 hover / focus / active / disabled / light 状态时，使用同语义 `--td-*-color-*` 状态变量；不直接引用色阶，也不跨语义借色。

## 7. Light / Dark 语义链

### 背景色

| Token | Light 定义 | Dark 定义 |
| --- | --- | --- |
| `--td-bg-color-page` | `var(--td-gray-color-2)` | `var(--td-gray-color-14)` |
| `--td-bg-color-container` | `#fff` | `var(--td-gray-color-13)` |
| `--td-bg-color-container-hover` | `var(--td-gray-color-1)` | `var(--td-gray-color-12)` |
| `--td-bg-color-container-active` | `var(--td-gray-color-3)` | `var(--td-gray-color-10)` |
| `--td-bg-color-container-select` | `#fff` | `var(--td-gray-color-9)` |
| `--td-bg-color-secondarycontainer` | `var(--td-gray-color-1)` | `var(--td-gray-color-12)` |
| `--td-bg-color-secondarycontainer-hover` | `var(--td-gray-color-2)` | `var(--td-gray-color-11)` |
| `--td-bg-color-secondarycontainer-active` | `var(--td-gray-color-4)` | `var(--td-gray-color-9)` |
| `--td-bg-color-component` | `var(--td-gray-color-3)` | `var(--td-gray-color-11)` |
| `--td-bg-color-component-hover` | `var(--td-gray-color-4)` | `var(--td-gray-color-10)` |
| `--td-bg-color-component-active` | `var(--td-gray-color-6)` | `var(--td-gray-color-9)` |
| `--td-bg-color-component-disabled` | `var(--td-gray-color-2)` | `var(--td-gray-color-12)` |
| `--td-bg-color-specialcomponent` | `#fff` | `transparent` |

### 文本色

| Token | Light 定义 | Dark 定义 |
| --- | --- | --- |
| `--td-text-color-primary` | `var(--td-font-gray-1)` | `var(--td-font-white-1)` |
| `--td-text-color-secondary` | `var(--td-font-gray-2)` | `var(--td-font-white-2)` |
| `--td-text-color-placeholder` | `var(--td-font-gray-3)` | `var(--td-font-white-3)` |
| `--td-text-color-disabled` | `var(--td-font-gray-4)` | `var(--td-font-white-4)` |
| `--td-text-color-anti` | `#fff` | `#fff` |
| `--td-text-color-brand` | `var(--td-brand-color-7)` | `var(--td-brand-color-8)` |
| `--td-text-color-link` | `var(--td-brand-color-8)` | `var(--td-brand-color-8)` |
| `--td-text-color-watermark` | `rgba(0, 0, 0, 10%)` | `rgba(255, 255, 255, 10%)` |

### 边框与分割

| Token | Light 定义 | Dark 定义 |
| --- | --- | --- |
| `--td-border-level-1-color` | `var(--td-gray-color-3)` | `var(--td-gray-color-11)` |
| `--td-component-stroke` | `var(--td-gray-color-3)` | `var(--td-gray-color-11)` |
| `--td-border-level-2-color` | `var(--td-gray-color-4)` | `var(--td-gray-color-9)` |
| `--td-component-border` | `var(--td-gray-color-4)` | `var(--td-gray-color-9)` |

## 8. 灰阶、字体底层色与辅助层

### 中性灰

`--td-gray-color-1...14` 在 Light / Dark 下默认 hex 相同，语义背景通过不同 var 引用层级区分深浅 UI。

| Token | 值 | Token | 值 |
| --- | --- | --- | --- |
| `--td-gray-color-1` | `#f3f3f3` | `--td-gray-color-8` | `#777` |
| `--td-gray-color-2` | `#eee` | `--td-gray-color-9` | `#5e5e5e` |
| `--td-gray-color-3` | `#e8e8e8` | `--td-gray-color-10` | `#4b4b4b` |
| `--td-gray-color-4` | `#ddd` | `--td-gray-color-11` | `#393939` |
| `--td-gray-color-5` | `#c6c6c6` | `--td-gray-color-12` | `#2c2c2c` |
| `--td-gray-color-6` | `#a6a6a6` | `--td-gray-color-13` | `#242424` |
| `--td-gray-color-7` | `#8b8b8b` | `--td-gray-color-14` | `#181818` |

### 字体底层色

| Token | Light 值 | Dark 值 |
| --- | --- | --- |
| `--td-font-white-1` | `rgba(255, 255, 255, 100%)` | `rgba(255, 255, 255, 90%)` |
| `--td-font-white-2` | `rgba(255, 255, 255, 55%)` | `rgba(255, 255, 255, 55%)` |
| `--td-font-white-3` | `rgba(255, 255, 255, 35%)` | `rgba(255, 255, 255, 35%)` |
| `--td-font-white-4` | `rgba(255, 255, 255, 22%)` | `rgba(255, 255, 255, 22%)` |
| `--td-font-gray-1` | `rgba(0, 0, 0, 90%)` | `rgba(0, 0, 0, 90%)` |
| `--td-font-gray-2` | `rgba(0, 0, 0, 60%)` | `rgba(0, 0, 0, 60%)` |
| `--td-font-gray-3` | `rgba(0, 0, 0, 40%)` | `rgba(0, 0, 0, 40%)` |
| `--td-font-gray-4` | `rgba(0, 0, 0, 26%)` | `rgba(0, 0, 0, 26%)` |

### 遮罩、滚动条与内描边

| Token | Light 值 | Dark 值 |
| --- | --- | --- |
| `--td-mask-active` | `rgba(0, 0, 0, 60%)` | `rgba(0, 0, 0, 40%)` |
| `--td-mask-disabled` | `rgba(255, 255, 255, 60%)` | `rgba(0, 0, 0, 60%)` |
| `--td-mask-background` | `rgba(255, 255, 255, 96%)` | `rgba(36, 36, 36, 96%)` |
| `--td-shadow-inset-top` | `inset 0 .5px 0 #dcdcdc` | `inset 0 .5px 0 #5e5e5e` |
| `--td-shadow-inset-right` | `inset .5px 0 0 #dcdcdc` | `inset .5px 0 0 #5e5e5e` |
| `--td-shadow-inset-bottom` | `inset 0 -.5px 0 #dcdcdc` | `inset 0 -.5px 0 #5e5e5e` |
| `--td-shadow-inset-left` | `inset -.5px 0 0 #dcdcdc` | `inset -.5px 0 0 #5e5e5e` |
| `--td-table-shadow-color` | `rgba(0, 0, 0, 8%)` | `rgba(0, 0, 0, 55%)` |
| `--td-scrollbar-color` | `rgba(0, 0, 0, 10%)` | `rgba(255, 255, 255, 10%)` |
| `--td-scrollbar-hover-color` | `rgba(0, 0, 0, 30%)` | `rgba(255, 255, 255, 30%)` |
| `--td-scroll-track-color` | `#fff` | `#333` |

## 9. 生成与审计检查

- 业务 CSS 颜色是否优先使用 `var(--td-*)`。
- 彩色实心底是否同步使用 `--td-text-color-anti`。
- 删除、失败、危险是否使用错误语义；风险提醒是否使用告警语义；完成、通过是否使用成功语义。
- 图标是否继承或绑定 `--td-text-color-*` / `--td-brand-color` 等语义变量。
- Light / Dark 是否复用同一语义变量名，而不是手写两套颜色。
- `hover` / `focus` / `active` / `disabled` 是否使用同语义状态变量。

## 10. 交接协议

```yaml
module_id: M02
context: no-design-file
inputs_used:
  - M01 Usage-2
  - M01 Usage-7
  - M01 Usage-8
decisions:
  - 颜色以 TDesign CSS Variables 和项目运行时主题为准
  - Light / Dark 共用语义变量名
  - 彩色实心底前景强制使用 --td-text-color-anti
artifacts:
  - 高频颜色 Token 表
  - Light / Dark 默认语义链
  - 状态色和对比度规则
risks:
  - 如与工程现有主题冲突，以工程内 TDesign 主题变量为运行真理源
next_module: M03
```
