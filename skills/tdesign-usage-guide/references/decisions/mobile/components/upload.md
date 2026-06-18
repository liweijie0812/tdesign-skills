# Mobile Upload 何时使用

本文描述 `tdesign-mobile-react`、`tdesign-mobile-vue`、`tdesign-miniprogram` 和 `tdesign-uniapp` 中 `Upload` 的设计选型。具体 props、事件、插槽、external classes 和平台能力必须回到当前栈 API 确认。

## 何时使用

- 用于上传图片、视频或文件。
- 小程序上传能力受微信平台 API 约束，具体配置必须查 `skills/tdesign-miniprogram/references/api/upload/index.md`。
- 适合头像、凭证、附件、评价图片、表单材料、视频或文件提交等移动端上传任务。
- 图片选择、拍照、预览、删除、压缩和权限能力强依赖当前平台。

## 选型要点

- 先确认上传类型、数量限制、大小限制、来源、预览方式和失败重试路径。
- 移动端图片上传要关注相册/相机权限、网络失败、压缩、进度和重新选择。
- 上传中可结合 `Loading` / `Progress`，完成后用 `Toast` / `Message` 或页面状态反馈。
- 小程序、UniApp 和 H5 上传能力差异很大，具体配置必须查当前技术栈 API。

## 相关取舍

- 相似组件取舍见 `../similar-components.md`，优先按当前平台和当前技术栈确认。
- 常见相关组件：`Progress`、`Loading`、`Message`。

## 反模式

- 不要省略上传限制、失败原因和重试动作。
- 不要把选择成功、上传成功和业务提交成功混为一谈。
- 不要用自定义图片选择格重复实现 TDesign Upload 已有能力。
- 不要把 Web 上传 API、拖拽能力或文件对象行为直接套用到移动端和小程序。
