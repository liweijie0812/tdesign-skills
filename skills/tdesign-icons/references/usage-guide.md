# TDesign Icons 使用指南

按需引入的图标组件跨框架支持 `strokeColor`、`fillColor` 和 `strokeWidth` 三个高级属性，这是按需引入独有的能力。

## 安装

先确认当前项目使用的 TDesign 技术栈，再安装对应图标包。不要把 React / Vue 2 / Vue 3 图标包混用。

| 技术栈 | 组件包 | 图标包 |
| --- | --- | --- |
| React Web | `tdesign-react` | `tdesign-icons-react` |
| Vue 3 Web | `tdesign-vue-next` | `tdesign-icons-vue-next` |
| Vue 2 Web | `tdesign-vue` | `tdesign-icons-vue` |
| Mobile React | `tdesign-mobile-react` | `tdesign-icons-react` |
| Mobile Vue | `tdesign-mobile-vue` | `tdesign-icons-vue-next` |
| Miniprogram | `tdesign-miniprogram` | 默认用内置 `t-icon`；多色 / 可变粗细才评估 `@mp-svg-icons/*` |
| UniApp | `tdesign-uniapp` | 先查当前项目依赖和 `Icon` API，不直接套用 Web 包 |

```bash
# React
npm install tdesign-icons-react
# Mobile React
npm install tdesign-icons-react
# Vue 3
npm install tdesign-icons-vue-next
# Mobile Vue
npm install tdesign-icons-vue-next
# Vue 2
npm install tdesign-icons-vue
```

禁止使用 `tdesign-icons-xxx`、`tdesign-icons-web`、`tdesign-icon`、`tdesign-icons` 作为安装包名。

## React 按需引入

```tsx
import { SearchIcon, CloseIcon, ChevronDownIcon } from 'tdesign-icons-react';

function App() {
  const handleClick = () => console.log('clicked');
  return (
    <div>
      <SearchIcon />
      <CloseIcon size="20px" />
      <ChevronDownIcon onClick={handleClick} />
    </div>
  );
}
```

## Vue 3 按需引入

```vue
<script setup>
import { SearchIcon, CloseIcon } from 'tdesign-icons-vue-next';
</script>

<template>
  <SearchIcon />
  <CloseIcon size="20px" />
</template>
```

## Vue 2 按需引入

```js
import { SearchIcon, CloseIcon } from 'tdesign-icons-vue';

export default {
  components: { SearchIcon, CloseIcon },
};
```

## 多色图标 & 可变粗细

```tsx
import { CloseIcon, HeartIcon, SearchIcon } from 'tdesign-icons-react';

function Icons() {
  return (
    <>
      {/* 单色描边图标，调整粗细 */}
      <CloseIcon strokeColor="blue" strokeWidth={3} />

      {/* 多色描边图标（最多两种描边颜色） */}
      <HeartIcon strokeColor={['red', 'blue']} />

      {/* 多色填充图标（最多两种填充颜色） */}
      <HeartIcon fillColor={['green', 'yellow']} />

      {/* 描边图标自定义填充色 + 描边色 */}
      <SearchIcon fillColor="transparent" strokeColor="orange" strokeWidth={2.5} />
    </>
  );
}
```

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `strokeWidth` | `Number` | `2` | 描边粗细，任意数值 |
| `strokeColor` | `String \| [String, String]` | `currentColor` | 描边颜色，最多支持两种颜色 |
| `fillColor` | `String \| [String, String]` | 描边图标 `transparent`，填充图标 `currentColor` | 填充颜色，最多支持两种颜色 |

> **注意**：多色图标和可变粗细是**按需引入独有的能力**。`<Icon name="..." />` CDN 方式不支持 `strokeWidth`、`strokeColor`、`fillColor` 属性。

## 通过 Icon 组件使用（走网络 CDN，不推荐）

```tsx
// React
import { Icon } from 'tdesign-react';
<Icon name="search" />  {/* 依赖 loadDefaultIcons，走 https://tdesign.gtimg.com/icon/web/index.js */}
```

```vue
<!-- Vue 3 -->
<t-icon name="search" />  <!-- 同样走 CDN 网络加载 -->
```

> **注意**：`<Icon name="..." />` / `<t-icon name="..." />` 方式依赖 `loadDefaultIcons` 从 CDN 远程加载图标资源，会有网络延迟。**生产环境优先使用按需引入方式**。

## 小程序（多色 & 可变粗细）

小程序原生 `t-icon` 不支持多色和可变粗细。需要使用 [miniprogram-svg-icons](https://github.com/anlyyao/miniprogram-svg-icons) 实现：

```bash
# 按平台安装（微信/QQ/支付宝/快手/抖音/百度/小红书/京东）
npm install @mp-svg-icons/wechat
```

在页面/组件的 `*.json` 中注册：
```json
{
  "usingComponents": {
    "t-icon": "@mp-svg-icons/wechat/icon"
  }
}
```

使用示例：
```xml
<!-- 基础 -->
<t-icon name="add" size="{{24}}" />

<!-- 单色 + 可变粗细 -->
<t-icon name="send" size="{{32}}" stroke-color="#0766ff" fill-color="#e70d0d" stroke-width="{{3}}" />

<!-- 多色（数组形式指定不同区域颜色） -->
<t-icon
  name="robot-2"
  size="{{32}}"
  stroke-color="{{['#0052D9', '#e40a23']}}"
  fill-color="{{['#e1e50f', '#632bc9']}}"
/>
```

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `name` | `String` | — | 图标名称（必填） |
| `size` | `Number` / `String` | `24` | 图标尺寸（px） |
| `strokeColor` | `String` / `String[]` | — | 描边颜色，支持 HEX/rgb/rgba |
| `fillColor` | `String` / `String[]` | — | 填充颜色，支持 HEX/rgb/rgba |
| `strokeWidth` | `Number` | `2` | 描边宽度（可变粗细） |
| `brand` | `String` | `'tdesign'` | 品牌名称 |

**按需裁剪**（完整包约 1 MB / 2347 图标，强烈建议裁剪）：
```bash
# 安装裁剪工具
npm install @mp-svg-icons/utils -D

# 扫描项目自动识别已使用的图标
npx mp-svg-icons-clear \
  --pkg-dir ./miniprogram_npm/@mp-svg-icons/wechat \
  --scan ./pages ./components

# 或手动指定图标列表
npx mp-svg-icons-clear \
  --pkg-dir ./miniprogram_npm/@mp-svg-icons/wechat \
  --icons add,close,search,chevron-down
```

> 裁剪效果：10 个图标约 4.3 KB，相比完整包节省 99.6%。

## 可用分类

使用 `--list-categories` 查看最新分类，下表为参考：

| 分类 | 中文名 | filled | outline |
|------|--------|--------|---------|
| Action | 行动 | ✓ | ✓ |
| Alert | 警报 | ✓ | ✓ |
| Arrows | 箭头 | ✓ | ✓ |
| Brand | 品牌 | ✓ | ✓ |
| Buildings | 建筑 | ✓ | ✓ |
| Charts | 图表 | ✓ | ✓ |
| Communication | 沟通 | ✓ | ✓ |
| Component | 组件 | ✓ | ✓ |
| Design | 设计 | ✓ | ✓ |
| Development | 开发 | ✓ | ✓ |
| Device | 设备 | ✓ | ✓ |
| Document | 文档 | ✓ | ✓ |
| Emoji | 表情 | ✓ | ✓ |
| File | 文件 | ✓ | ✓ |
| Foods | 食品 | ✓ | ✓ |
| Gestures | 手势 | ✓ | ✓ |
| Image | 图片 | ✓ | ✓ |
| Maps | 地图 | ✓ | ✓ |
| Math | 数学 | ✓ | ✓ |
| Media | 媒体 | ✓ | ✓ |
| System | 系统 | ✓ | ✓ |
| User | 用户 | ✓ | ✓ |
| Weather | 天气 | ✓ | ✓ |
| Letters | 字母 | - | ✓ |
| Numbers | 数字 | - | ✓ |
| Else | 其他 | - | ✓ |
