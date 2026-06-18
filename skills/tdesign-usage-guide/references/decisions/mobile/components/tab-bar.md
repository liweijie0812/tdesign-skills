# Mobile TabBar 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `TabBar` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于应用主功能模块间的底部切换。
- 适合少量高频、平级、全局模块，不适合临时分类筛选。
- 常见于首页、消息、工作台、我的等全局一级入口。
- 页面内分类切换使用 `Tabs` 或 `Segmented`，不要升级为 TabBar。

## 选型要点

- TabBar 项应稳定、少量、平级，并代表应用主模块，不随页面内容临时变化。
- 每个项应有清晰图标和文字，用户能在任意页面快速返回主模块。
- 选中态、徽标和安全区行为必须按当前栈 API 确认，尤其是小程序和 UniApp。
- 若只是在同一页面内切换状态、频道或筛选条件，应使用 `Tabs`、`Segmented` 或 `DropdownMenu`。

## 反模式

- 不要把临时分类、筛选项或表单步骤放进 `TabBar`。
- 不要在层级很深的任务流中强行常驻 TabBar 干扰提交或返回。
- 不要用自定义底部按钮组重复实现 TDesign TabBar。
- 不要照搬 Web 顶部导航或侧栏逻辑。
