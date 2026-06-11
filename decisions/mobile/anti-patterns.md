# TDesign Mobile 与小程序反模式

适用于 `tdesign-mobile-react`、`tdesign-mobile-vue` 和 `tdesign-miniprogram`。

## 禁止混栈

- Mobile React 不要照搬 Web React 的组件、事件和子组件默认写法。
- Mobile Vue 不要照搬 Web Vue 的组件、事件和插槽默认写法。
- 小程序不要照搬 React / Vue 写法；必须使用 WXML/JS、短横线属性、`bind` 事件和 `usingComponents`。
- 不把小程序 external classes、微信平台事件或页面生命周期套到 Web / Mobile React / Mobile Vue。

## 禁止照搬 Web 交互

- 不使用 Web 应用壳的 `Header`、`Aside`、`Content`、`Footer` 语义搭移动端页面。
- 不强行复刻 Web 多列宽表格、常驻侧栏、hover 说明和键盘快捷操作。
- 不在小屏幕中堆叠多列筛选、复杂弹窗和大面积表格。

## 禁止过重反馈

- 简单成功、失败或提示不要默认用 `Dialog`，轻反馈优先 `Toast` / `Message`。
- 操作集合不要用复杂自定义浮层，移动端上下文操作优先 `ActionSheet`。
- 标准 `Picker`、`Cascader`、`Dialog`、`ActionSheet` 能满足时，不优先使用底层 `Popup`。

## 禁止破坏触控可用性

- 关键操作不要只依赖小图标，应保证触控面积和明确文案。
- 吸底按钮、`TabBar`、安全区和滚动容器不要互相遮挡。
- 破坏性操作不要在 `SwipeCell` 中直接执行，必要时增加确认。
- 长列表不要一次性渲染大量内容，应考虑分页、加载更多或 `PullDownRefresh`。
