# Mobile 子组件与组合项 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `子组件与组合项` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- `GridItem`、`CellGroup`、`TabPanel`、`TabBarItem`、`SideBarItem`、`StepItem`、`IndexesAnchor`、`SwiperNav` / `SwiperNavigation` 等用于对应父组件内部结构，不作为独立组件选型入口。
- `Text`、`Title`、`Paragraph` 属于 `Typography` 的排版语义；`AvatarGroup`、`CollapsePanel`、`BaseTableCol` 分别归属 `Avatar`、`Collapse`、`Table`。
- `FormItem`、`RadioGroup`、`CheckboxGroup`、`CheckTag`、`PickerItem`、`DropdownItem` / `dropdown-item` 用于表单、选项和选择器内部组合，先按父组件语义选型，再查当前栈 API。
- 子组件真实可用性、标签名、props、事件、插槽、external classes 和类型源必须查 `tdesign-docs/references/api/shared/sub-components/mobile.md` 或 `tdesign-docs/references/api/shared/sub-components/miniprogram.md`。

## 选型要点

- 先确认当前需求属于 `通用与布局` 场景，再决定是否使用 `子组件与组合项`。
- 优先使用 TDesign 已有组件能力、子组件、插槽、props 和设计变量，不要重复造轮子。
- 需要具体 API、事件、插槽、类型或平台差异时，必须查当前技术栈 API 文档。

## 反模式

- 不要把其他端或其他技术栈的 API、事件、插槽和样式写法直接套用到当前平台。
- 不要为了视觉接近而绕开 TDesign 标准组件能力。
- 当前组件不能满足需求时，先查相似组件和降级策略，不要直接引入其他组件库或手写临时结构。
