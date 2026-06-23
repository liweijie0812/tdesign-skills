# 应用壳场景卡

用于后台管理、控制台、仪表盘等稳定页面框架。

布局、导航、Header 高度和品牌位唯一约束先查 `../modules/M04-layout-navigation.md`；本场景卡只给应用壳默认组合。

本场景卡主要适用于 Web。Mobile / Miniprogram 没有等价的常驻桌面应用壳，通常改用页面级导航、底部主导航或分类导航。

## Web 默认组件组合

- 整体结构：`Layout`。
- 顶部区域：`Header`，放产品标识、全局搜索、顶部导航、用户信息和全局操作。
- 侧边区域：`Aside`，放主导航、分组菜单或辅助筛选。
- 内容区域：`Content`，承载列表页、详情页、表单页和仪表盘。
- 底部区域：`Footer`，放版权、辅助链接或页面级说明。

## 选型规则

- Web 应用级侧边导航优先使用官方 `Menu + Layout` 组合，顶部导航优先使用官方顶部导航 / `Menu.HeadMenu` 等价组合。
- 当前位置层级使用 `Breadcrumb`，不替代整站主导航。
- 侧边导航与顶部导航一般不要在同一页面同时完整并存；如业务必须并存，全页只能保留一个 Logo + 系统名称品牌位。
- Web 与标准侧栏或顶部导航组合时，`Header` / `t-layout__header` 在页面模板中优先使用 `var(--td-comp-size-xxxl)` 高度；TDesign Vue Next 官方样式默认值可为 `64px`，Token 优先用于生成一致的应用壳，不表示官方默认值错误。自定义时同时设置 `height`、`min-height` 和 `flex-shrink: 0`。
- 页面内平级内容切换使用 `Tabs`，流程进度使用 `Steps`。
- 固定快捷工具使用 `StickyTool`，返回顶部使用 `BackTop`。
- 间距优先使用 `Space`、`Grid`、`Row`、`Col`，不要零散堆 margin。

## Mobile / Miniprogram 替代组合

- 顶部页面导航：`Navbar`，承载标题、返回、关闭和少量页面级操作。
- 主功能切换：`TabBar`，用于少量高频全局模块。
- 页面内分类：`Tabs`、`SideBar`、`Indexes`，按内容切换维度选择。
- 页面结构：`Row`、`Col`、`Grid`、`Cell`、`CellGroup`，不使用 Web `Header` / `Aside` / `Content` / `Footer` 语义。
- 长页面辅助：`BackTop`、`Sticky` 或项目已有吸顶/吸底容器，具体能力按当前栈 API。

## 栈差异提醒

- React 常见写法为 `Layout.Header`、`Layout.Aside`、`Layout.Content`、`Layout.Footer`。
- Vue Next 常见标签为 `<t-header>`、`<t-aside>`、`<t-content>`、`<t-footer>`。
- Vue 2 使用 Vue 2 注册名或项目已有标签，不照搬 React 点语法。
- Mobile React 查 `skills/tdesign-mobile-react/references/api/navbar/index.md`、`skills/tdesign-mobile-react/references/api/tab-bar/index.md`、`skills/tdesign-mobile-react/references/api/layout/index.md`。
- Mobile Vue 查 `skills/tdesign-mobile-vue/references/api/navbar/index.md`、`skills/tdesign-mobile-vue/references/api/tab-bar/index.md`、`skills/tdesign-mobile-vue/references/api/layout/index.md`。
- Miniprogram 查 `skills/tdesign-miniprogram/references/api/navbar/index.md`、`skills/tdesign-miniprogram/references/api/tab-bar/index.md`、`skills/tdesign-miniprogram/references/api/layout/index.md`。

## 验证清单

- 侧栏折叠、路由激活、菜单权限和面包屑来源一致。
- 侧栏和顶栏没有重复 Logo / 系统名称。
- Web `Header` / `t-layout__header` 使用组件尺寸 Token，且不会被内部控件或 flex 布局压缩。
- 内容区滚动容器明确，固定头部或侧栏不会遮挡内容。
- 小屏幕下导航有折叠或抽屉式降级方案。
- 全局反馈、弹层挂载点和 z-index 不与应用壳冲突。
- Web 导航图标来自 TDesign Icons manifest，颜色继承文本或使用语义 Token；Mobile / Miniprogram 按当前端图标 API 和项目图标方案确认。
- Mobile / Miniprogram 需要验证导航栏安全区、底部 TabBar 遮挡、滚动容器和平台返回行为。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-004`、`DS-005`、`DS-008`、`DS-012`。
- Web `Header` / `t-layout__header` 必须使用 `var(--td-comp-size-xxxl)`，并同时设置 `height`、`min-height`、`flex-shrink: 0`。
- Web 应用壳交付前按 `../design/checklist.json` 的 `outputTemplate` 输出适用项结果；能运行脚本时按 `../quality-gate.md` 检查目标文件。
