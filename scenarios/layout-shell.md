# 应用壳场景卡

用于后台管理、控制台、仪表盘等稳定页面框架。

## 默认组件组合

- 整体结构：`Layout`。
- 顶部区域：`Header`，放产品标识、全局搜索、顶部导航、用户信息和全局操作。
- 侧边区域：`Aside`，放主导航、分组菜单或辅助筛选。
- 内容区域：`Content`，承载列表页、详情页、表单页和仪表盘。
- 底部区域：`Footer`，放版权、辅助链接或页面级说明。

## 选型规则

- 应用级导航使用 `Menu`，当前位置层级使用 `Breadcrumb`。
- 页面内平级内容切换使用 `Tabs`，流程进度使用 `Steps`。
- 固定快捷工具使用 `StickyTool`，返回顶部使用 `BackTop`。
- 间距优先使用 `Space`、`Grid`、`Row`、`Col`，不要零散堆 margin。

## 栈差异提醒

- React 常见写法为 `Layout.Header`、`Layout.Aside`、`Layout.Content`、`Layout.Footer`。
- Vue Next 常见标签为 `<t-header>`、`<t-aside>`、`<t-content>`、`<t-footer>`。
- Vue 2 使用 Vue 2 注册名或项目已有标签，不照搬 React 点语法。

## 验证清单

- 侧栏折叠、路由激活、菜单权限和面包屑来源一致。
- 内容区滚动容器明确，固定头部或侧栏不会遮挡内容。
- 小屏幕下导航有折叠或抽屉式降级方案。
- 全局反馈、弹层挂载点和 z-index 不与应用壳冲突。
