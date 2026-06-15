# footer

来源：TDesign UniApp

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-miniprogram/develop/packages/components/footer/README.md

## API

### Footer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
copyright | String | '' | 已废弃。版权信息，type 为`text`生效 | N
links | Array | [] | `1.0.0`。链接列表。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[详细类型定义](./type.ts) | N
logo | Object | - | 图标配置。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接。TS 类型：`FooterLogo` `interface FooterLogo { icon: string; title?: string; url?: string }`。[详细类型定义](./type.ts) | N
text | String | '' | `1.0.0`。版权信息 | N
text-link-list | Array | [] | 已废弃。链接列表，type 为`text`生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[详细类型定义](./type.ts) | N
theme | String | 'text' | 已废弃。页脚展示类型。可选项：text/logo | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-footer-link-color | @brand-color | -
--td-footer-link-dividing-line-color | @text-color-placeholder | -
--td-footer-link-dividing-line-padding | @spacer-1 | -
--td-footer-link-font | @font-body-medium | -
--td-footer-logo-icon-height | 48rpx | -
--td-footer-logo-icon-margin-right | @spacer | -
--td-footer-logo-icon-width | 48rpx | -
--td-footer-logo-title-font | @font-title-medium | -
--td-footer-logo-title-url-width | 256rpx | -
--td-footer-text-color | @text-color-placeholder | -
--td-footer-text-font | @font-body-small | -
--td-footer-text-margin-top | 8rpx | -
