# M04 - Layout & Navigation

本模块定义无设计文件场景下的 TDesign 布局与导航规则。它接收 `M01` 的后台导航红线、`M02` 的导航色彩语义、`M03` 的间距与组件尺寸规则，并输出给 `M05` 的导航图标与业务组件放置规则。

## 1. 使用优先级

1. Web 中后台应用壳优先使用 TDesign `Layout`、`Header`、`Aside`、`Content`、`Footer` 与 `Menu` 官方组合，不从裸 `div` 开始复刻框架。
2. 侧边导航优先使用官方 `Menu + Layout` 侧栏组合；顶部导航优先使用官方顶部导航或 `Menu.HeadMenu` 等价组合。
3. 无设计文件时，不假设 Figma 画板、主件或 Logo 子实例；按本模块、场景卡、当前技术栈 API 和项目既有应用壳实现。
4. 间距、Header 高度、边框、背景和文字颜色使用 TDesign Token；布局细节优先使用 `Space`、`Row`、`Col`、`Layout` 和组件 props。
5. 具体组件 API、插槽、事件和导入方式回到当前技术栈 skill 或项目依赖确认。

## 2. 栅格与页面边距

| 规则项 | 默认值 | 说明 |
| --- | --- | --- |
| 网格基数 | `8px` | 间距遵循 8 倍数原则，`4px`、`12px` 可作为小间距例外 |
| 内容区列数 | `12` 列 | Web 中后台主体内容默认按 12 栅格组织 |
| 栅格槽宽 | `16px` | 内容区常用 gutter |
| 页面水平安全边距 | `var(--td-size-8)` | 默认等价 `24px`，可按业务用 8 倍数调整 |
| 常见区块间距 | `var(--td-size-6)` / `var(--td-size-8)` / `var(--td-size-10)` | 常见为 16 / 24 / 32 |
| 强分隔区块 | `var(--td-size-13)` | 仪表盘大模块、强分段布局 |

内容区优先使用卡片、区块、栅格和分组结构组织信息，不要整页平铺信息和操作。表单、列表和详情默认左对齐主文案；金额、数量、百分比等数值列可右对齐。

## 3. 对齐与信息密度

- 主操作保持唯一；次要操作降级为普通按钮、链接、下拉或更多操作。
- 破坏性操作单独强调，并使用确认组件，不只靠颜色区分。
- 中后台密度以可读性优先，不为了紧凑牺牲点击区域、行高和状态可见性。
- 同一页面主间距档位控制在 1 到 2 个，常见组合是 `16px + 24px` 或 `24px + 32px`。
- 页面内容区滚动容器必须明确，固定头部或侧栏不能遮挡内容。

## 4. 导航结构

### 侧边导航

侧边导航适合后台、控制台、系统管理等层级较深、切换频繁的页面。Web 实现优先使用官方 `Menu + Layout` 侧栏组合。

常见默认：

- 侧栏展开宽度：`232px`。
- 侧栏收起宽度：`64px`。
- 侧栏品牌区高度：与 Header 一致，使用 `var(--td-comp-size-xxxl)`。
- 侧栏图标：按 `M05` 使用 TDesign Icons，颜色继承文本或绑定语义 Token。

### 顶部导航

顶部导航适合一级模块少、横向空间更重要、内容区需要稳定宽度的页面。Web 实现优先使用官方顶部导航或 `Menu.HeadMenu` 等价组合。

顶部区域可放：Logo / 系统名称、顶部导航、全局搜索、状态指示、图标按钮、用户头像和全局操作。避免放入大标题、大型表单或高于默认控件尺寸的复杂内容。

### 混合导航

混合导航适合一级导航在顶部、二级及以下导航在侧边的信息架构。不要让顶部和侧边重复承载同一层级；需要并存时，必须明确一级 / 二级分工。

### 品牌位唯一约束

侧边导航与顶部导航一般不要在同一页面完整并存；如业务必须并存，全页只能保留一个 Logo + 系统名称品牌位。禁止在侧栏与顶栏各放一套 Logo / 名称。

## 5. Header 高度与实施约束

与标准侧栏或顶部导航组合时，`Header` / `t-layout__header` 默认使用 `var(--td-comp-size-xxxl)`，通常等价 `56px`。侧栏品牌区使用同一 Token，保持左右基线一致。无产品、无障碍或业务特殊需求时，不要改成非组件尺寸阶梯值。

### 强制实现

1. 使用 `var(--td-comp-size-xxxl)`，不要优先硬编码 `56px`、`52px`、`60px` 或 `64px`。
2. 同时设置 `height` 和 `min-height`，避免 flex 容器中被内部控件压缩。
3. 设置 `flex-shrink: 0`，防止内容溢出时头部被压缩。
4. 自定义类建议写成 `.t-layout__header.<your-class>`，提高特异度以覆盖默认规则。
5. 必要时在组件上使用 inline style 兜底，保证主题或版本差异下仍不被覆盖。

### 推荐片段

```html
<t-header
  class="app-header"
  :style="{
    height: 'var(--td-comp-size-xxxl)',
    minHeight: 'var(--td-comp-size-xxxl)',
    flexShrink: 0
  }"
>
  ...
</t-header>
```

```css
.t-layout__header.app-header {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--td-size-5);
  padding: 0 var(--td-size-8);
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.app-brand {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
}
```

### 禁止

- 只写 `height`，缺少 `min-height` 和 `flex-shrink: 0`。
- 写 `.app-header { height: 56px; }`，既硬编码又容易被 `.t-layout__header` 默认规则覆盖。
- 用 `!important` 暴力覆盖 Header 高度；应通过 Token、特异度和 inline style 兜底解决。
- 把 Header 高度改为非 `--td-comp-size-*` 阶梯值。
- 在标准 Header 内嵌入大型表单字段、`H1` / `H2` 或高于默认控件尺寸的复杂模块。

## 6. 响应式与多端策略

### Web / 桌面

- 固定与弹性布局结合，内容区在侧栏展开 / 收起时保持最小可读宽度。
- 默认断点参考 `992px`，侧栏可在窄屏下收起或切换抽屉式导航。
- 无侧边栏固定栅格最小宽度可参考 `768px`；侧边栏布局内容区最小可读宽度可参考 `704px`。
- 超长页面要明确是页面滚动、内容区滚动还是表格内部滚动。

### Mobile / Miniprogram

- 不复刻 Web 应用壳，不使用常驻 `Header` / `Aside` / `Content` / `Footer` 桌面语义。
- 优先使用当前端 `Navbar`、`TabBar`、`Tabs`、`SideBar`、`Cell`、`Grid`、`Row` / `Col`、`Popup` 等组件。
- 需要验证安全区、底部 TabBar 遮挡、平台返回行为、触控目标和小屏溢出。

## 7. 生成与审计检查

- 应用壳是否使用 `Layout`、`Header`、`Aside`、`Content`、`Footer` 和 `Menu` 官方组合。
- 侧边导航是否使用 `Menu + Layout`，顶部导航是否使用官方顶部导航或 `Menu.HeadMenu` 等价组合。
- 侧栏与顶栏并存时是否只有一个 Logo + 系统名称品牌位。
- `Header` / `t-layout__header` 是否使用 `var(--td-comp-size-xxxl)`，并同时设置 `height`、`min-height`、`flex-shrink: 0`。
- 页面边距、栅格槽宽和区块间距是否遵循 8px 栅格与 `--td-size-*` Token。
- Mobile / Miniprogram 是否使用端内导航组件，而非照搬 Web 应用壳。

## 8. 交接协议

```yaml
module_id: M04
context: no-design-file
inputs_used:
  - M01 Usage-6
  - M02 navigation colors
  - M03 spacing and component size
decisions:
  - Web 内容区默认 12 栅格与 --td-size-8 页面安全边距
  - 侧栏使用官方 Menu + Layout
  - 顶栏使用官方顶部导航或 Menu.HeadMenu 等价组合
  - 导航并存时全页唯一 Logo + 系统名称品牌位
  - t-layout__header 与标准导航组合时使用 --td-comp-size-xxxl
artifacts:
  - 页面骨架布局规则
  - 导航结构规则
  - Header 高度实现片段
risks:
  - 如项目已有应用壳封装，以项目封装为实现入口，但仍需满足品牌位唯一与 Header 尺寸约束
next_module: M05
```
