# TDesign 组件搭配索引

当用户要求生成页面、改造 UI 或询问“组件怎么搭配”时，先识别当前项目安装的 TDesign 包，再进入对应端的组件搭配规则。本文只做入口索引，不承载端内细节。

## 查阅顺序

1. 识别平台和技术栈：Web、Mobile、Miniprogram；React、Vue Next、Vue 2、Mobile React、Mobile Vue、小程序。
2. 查 `skills/tdesign-docs/references/meta/stack-matrix.json` 确认当前栈是否提供目标组件。
3. Web 组件搭配查 `web/component-composition-map.md`。
4. Mobile / Miniprogram 组件搭配查 `mobile/component-composition-map.md`。
5. 页面级细节再查 `skills/tdesign-composition/references/scenarios/`。
6. 实现前只读取当前栈当前组件的 API，不跨栈照搬写法。

## 通用原则

- 组件搭配先按平台选择，不把 Web 桌面布局套到 Mobile / Miniprogram。
- 组合方案只表达任务结构，具体 props、事件、插槽和导入方式必须查当前技术栈 skill 的 `references/api/<component>/index.md`。
- 如果当前端缺少某个组件，按 `fallback-policy.md` 降级，并说明不是 TDesign 官方能力。

## 页面拆解顺序

1. 先识别页面主任务：录入、筛选、浏览、确认、导航还是结果反馈。
2. 再拆成区块：页面骨架、筛选区、内容区、操作区、反馈区。
3. 每个区块先选承载组件，再补辅助组件，例如间距、状态、说明和操作收纳。
4. 复杂页面优先复用成熟搭配，例如 `Form + Space + Button`、`Table + Pagination`、`Tabs + Card`、`Cell + Button + Popup`。

## 通用搭配模式

- 表单页：`Form` 承载字段，`Space` 或平台等价布局组件控制间距，提交与取消使用 `Button` 组。
- 列表筛选页：筛选控件放在内容前或吸顶区域，数据承载优先 `Table`、`List`、`Cell` 等当前端组件，分页或刷新按平台选择。
- 详情页：信息展示优先 `Descriptions`、`Cell`、`Card` 等信息容器，页面级操作放在页头、吸底栏或固定区域。
- 结果反馈页：结果组件负责状态表达，下一步动作由主次按钮承载，不把说明文案塞进按钮。

## 组合边界

- 不把选择组件当操作菜单，不把操作菜单当值选择。
- 不用底层浮层组件替代已经存在的高层语义组件，除非标准组件明显不满足。
- 不为了“看起来完整”强行给每个区块都套容器，先看信息层级是否真的需要。
