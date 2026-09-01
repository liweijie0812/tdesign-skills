# 来源链接

Last sync: 2026-06-10

## 同步锚点

| Source | Branch | Observed commit |
| --- | --- | --- |
| Tencent/tdesign-common | develop | `61d00ef4a74a572e6137cfcb463703e6c40d734f` |
| Tencent/tdesign-react | develop | `fe3cf8dd722f45a69f00b7897837df9877f6e8b8` |
| Tencent/tdesign-vue-next | develop | `3930ace2d566762a8599997c924aa8f32602e74c` |
| Tencent/tdesign-vue | develop | `f1bb2884397491cb39aef0dafa49cd5af6a8bca3` |
| Tencent/tdesign-mobile-react | develop | `a09331c47bb7b905ec37ee36fbd155e290553525` |
| Tencent/tdesign-mobile-vue | develop | `292e3dfc3b3c3ff4fb7a63c13b885be653909b8b` |
| Tencent/tdesign-miniprogram | develop | `f54ba6fffdeb64dd24965b9fc436f6bdd48b9827` |
| Tencent/tdesign | main | `85e6b1e72ce9a4d63260524cf1f4997d2c5df3a9` |

## TDesign

- TDesign Web 设计指南：https://github.com/Tencent/tdesign-common/tree/develop/docs/web/design
- TDesign Mobile 设计指南：https://github.com/Tencent/tdesign-common/tree/develop/docs/mobile/design
- TDesign Color 色彩：https://tdesign.tencent.com/design/color
- TDesign Color 页面源码：https://github.com/Tencent/tdesign/blob/main/site/src/pages/design/color_zh-CN.vue
- TDesign Layout 布局：https://tdesign.tencent.com/design/layout
- TDesign Layout 页面源码：https://github.com/Tencent/tdesign/blob/main/site/src/pages/design/layout_zh-CN.vue
- TDesign 中后台整体框架搭建：https://tdesign.tencent.com/design/offices
- TDesign 中后台整体框架搭建源码：https://github.com/Tencent/tdesign/blob/main/docs/design/offices_zh-CN.md
- TDesign 中后台高频任务设计方法：https://tdesign.tencent.com/design/offices-task
- TDesign 中后台高频任务设计方法源码：https://github.com/Tencent/tdesign/blob/main/docs/design/offices-task_zh-CN.md
- TDesign 组件映射：https://github.com/Tencent/tdesign-common/blob/develop/js/components.ts
- TDesign React 组件源码与 API 文档：https://github.com/Tencent/tdesign-react/tree/develop/packages/components
- TDesign Vue Next 组件源码与 API 文档：https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components
- TDesign Vue 2 组件源码与 API 文档：https://github.com/Tencent/tdesign-vue/tree/develop/src
- TDesign Mobile React 组件源码与 API 文档：https://github.com/Tencent/tdesign-mobile-react/tree/develop/src
- TDesign Mobile Vue 组件源码与 API 文档：https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src
- TDesign Miniprogram 组件源码与 API 文档：https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components
- TDesign React 官网：https://tdesign.tencent.com/react/components/overview
- TDesign Vue Next 官网：https://tdesign.tencent.com/vue-next/components/overview
- TDesign Mobile React 官网：https://tdesign.tencent.com/mobile-react/components/overview
- TDesign Mobile Vue 官网：https://tdesign.tencent.com/mobile-vue/components/overview
- TDesign 小程序官网：https://tdesign.tencent.com/miniprogram/components/overview

## 说明

- TDesign 设计文档是产品设计选型的主要依据。
- TDesign Color 色彩来自官网设计页；`tdesign-design-spec/references/design/color.md` 摘取官方色板、Design Token 层级和主题定制规则，不替代组件级 CSS Variables 表。
- TDesign Layout 布局来自官网 Web 设计页；`tdesign-design-spec/references/design/layout.md` 摘取 Web 中后台导航布局、栅格系统、断点、间距和侧边栏规则，不替代具体组件 API。
- TDesign 中后台设计指南来自官网 Web 设计页；`tdesign-design-spec/references/design/offices.md` 和 `tdesign-design-spec/references/design/offices-task.md` 摘取 Web 中后台框架选择、页面模板和任务流程，不替代具体组件 API。
- 小程序设计口径复用 TDesign Mobile 设计指南；小程序 API、事件和平台能力以 `tdesign-miniprogram` 文档为准。
- `tdesign-common/js/components.ts` 是 Web 与移动端组件范围的主要依据。
- TDesign 框架文档是 API、props、事件、插槽和组件能力的主要依据。
- 通用企业级 UI 经验只作为补充判断，不作为 TDesign API 依据。
- 同步脚本优先读取同级本地仓库的 `develop`，无法安全快进时回退到 GitHub raw `develop`；重新同步后需要更新上方锚点。
