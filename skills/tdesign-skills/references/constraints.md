# TDesign Skills 强制约束

## 核心原则

1. 优先使用 TDesign 组件、布局、子组件、props、插槽和设计变量。
2. 只有 TDesign 无法满足需求时，才使用原生 HTML、最小 CSS 或受控自定义组件，并说明不是 TDesign 官方能力。
3. 禁止无理由引入其他组件库。
4. 禁止用 `div`、`ul > li`、`window.confirm()` 等重复实现 TDesign 已有能力。
5. 禁止凭经验猜 props、事件、插槽、函数式调用或小程序 external classes。

## 跨栈隔离

- 禁止混用 React 点语法、Vue 标签写法、小程序短横线属性、uni-app `@event` 语法和不同端默认值。
- 禁止把 Web、Mobile、Miniprogram 的组件结论直接互相套用。
- 不要把 `tdesign-vue-next`、`tdesign-vue`、`tdesign-mobile-react` 的 API 当作 React Web API。

## 样式约束

- 禁止在 TDesign 已提供组件的情况下手写等价实现。
- 禁止通过覆盖 TDesign 样式来实现新 UI，应优先换组件或调整 props。
- 只有组件组合和 props 无法满足时，才补最小 CSS。

## 场景卡约束

- 涉及 `Dialog`、`Form`、`Table` 的页面搭建、组件组合或交互流程设计，必须先查 `../tdesign-composition/references/scenarios/README.md` 并进入对应场景卡。
- 纯 API 查询或局部修复可直接查当前技术栈组件 API。
- 场景卡只提供默认组合和校验点，不替代当前项目业务约束。

## API 目录约束

- 只读取当前任务需要的单个组件目录，不整树加载 `references/api/`。
- API 表不够精确时，再读取同目录 `type.ts`、`props.ts`、`common.ts`。
- 组件是否存在必须以 `references/meta/stack-matrix.json` 或对应端文件为准，不从目录存在推断。
