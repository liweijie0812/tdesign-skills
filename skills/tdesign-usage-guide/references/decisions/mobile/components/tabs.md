# Mobile Tabs 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Tabs` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于同一页面或模块内，按分类维度快速切换内容。
- 通常位于页面或模块顶部，可结合吸顶方便用户切换。
- 不建议用 `Tabs` 表达应用主功能模块切换，主功能切换优先 `TabBar`。

## 选型要点

- Tab 项应是同一页面内的平级分类或状态，不表达应用主模块、流程步骤或操作集合。
- 分类较多时要考虑横向滚动、吸顶、懒加载和当前项可见性，避免触控成本过高。
- 二到四个轻量状态切换可优先考虑 `Segmented`；应用主模块切换使用 `TabBar`。
- 与列表联动时，要处理加载、空状态、滚动位置和刷新行为。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`TabBar`、`Segmented`、`Steps`。

## 反模式

- 不要用 `Tabs` 承担应用底部主导航，主导航使用 `TabBar`。
- 不要用 `Tabs` 表达分步流程，流程进度使用 `Steps`。
- 不要把复杂筛选条件伪装成多个 Tab。
- 不要照搬 Web Tabs 的信息密度和宽度布局。
