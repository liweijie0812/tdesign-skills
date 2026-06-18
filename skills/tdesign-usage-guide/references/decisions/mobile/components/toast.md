# Mobile Toast 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Toast` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于轻量反馈或提示，不需要用户操作，通常短时间后自动消失。
- 不适合承载长文本、重要决策或危险确认。
- 适合保存成功、复制成功、网络轻提示、操作失败简述、短暂加载提示等即时反馈。
- 需要用户决策、确认或输入时使用 `Dialog`；需要页面内持续可见提示时使用 `Message` 或 `NoticeBar`。

## 选型要点

- 文案应短，用户无需停留阅读；超过一句话通常不适合 Toast。
- Toast 不应阻断用户任务；如果必须阻断，使用 `Dialog` 或页面状态。
- 频繁连续操作要避免堆叠 Toast，必要时合并反馈或使用页面内状态。
- 小程序插件调用、持续时间和层级行为必须查当前栈 API。

## 反模式

- 不要用 `Toast` 承担危险确认、权限说明、隐私授权或长错误详情。
- 不要把表单字段错误全部做成 Toast，字段错误应靠近字段展示。
- 不要连续弹多个 Toast 干扰用户操作。
- 不要手写临时浮层重复实现 TDesign Toast。
