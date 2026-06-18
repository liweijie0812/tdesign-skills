# Mobile Loading 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Loading` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于移动端通用等待、局部刷新或用户操作提交中的加载状态。
- 适合按钮提交、列表刷新、页面初始化、接口等待等暂时无法展示内容结果的场景。
- 内容结构已知时优先考虑 `Skeleton`，例如列表、卡片、详情和信息流加载。
- 可量化进度使用 `Progress`；没有数据或无搜索结果使用 `Empty`。

## 选型要点

- 移动端加载反馈要尽量靠近触发位置，避免不必要地阻塞整页触控。
- 下拉刷新场景优先结合 `PullDownRefresh`，不要只放通用 Loading。
- 长时间等待应补充说明文案或阶段反馈，避免用户误以为页面卡死。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`Skeleton`、`Progress`、`Empty`。

## 反模式

- 不要在移动端整页长期遮罩用户操作，除非当前任务必须阻塞。
- 不要用 Loading 代替空状态、错误状态、无权限状态或流程结果。
- 不要在结构明确的列表和详情页只显示空白转圈。
- 不要把 Web Loading 的尺寸、布局和遮罩习惯直接套用到移动端或小程序。
