---
name: tdesign-icons
description: 当用户需要查找 TDesign 图标、搜索图标名称/关键词、浏览图标分类、确认图标是否存在，或需要为 TDesign 项目选择合适的图标时使用。使用 manifest 数据提供图标检索能力。
---

# TDesign Icons 图标检索

本 skill 用于查找和检索 TDesign Icons 图标库中的图标，支持按名称、关键词、分类和风格进行搜索。

数据来源：`tdesign-icons` 官方 `manifest.js`（`packages/view/src/manifest.js`），包含 2000+ 个图标的全量元数据。

## 查阅顺序

1. 确认项目已安装 `tdesign-icons-react`、`tdesign-icons-vue-next` 或 `tdesign-icons-vue`。
2. 需要按中英文关键词搜索图标时，使用 `node skills/tdesign-icons/scripts/query-icons.mjs --search <关键词>`。
3. 需要按分类浏览图标时，先用 `--list-categories` 列出所有分类，再用 `--category <分类名>` 查看该分类下图标。
4. 需要确认某图标是否存在时，使用 `--name <图标名>` 精确查找。
5. 找到图标名后，**优先推荐按需引入**（`import { XxxIcon } from 'tdesign-icons-xxx'`），不走网络 CDN。
6. 图标组件 API（`size`、`onClick` 等）参考当前技术栈 skill 的 `references/api/icon/index.md`。

## 快速查询

```bash
# 统计全量图标信息
node skills/tdesign-icons/scripts/query-icons.mjs --stats

# 列出所有分类
node skills/tdesign-icons/scripts/query-icons.mjs --list-categories
node skills/tdesign-icons/scripts/query-icons.mjs --list-categories --style outline

# 按关键词搜索（支持中文/英文）
node skills/tdesign-icons/scripts/query-icons.mjs --search 搜索
node skills/tdesign-icons/scripts/query-icons.mjs --search close
node skills/tdesign-icons/scripts/query-icons.mjs --style filled --search 箭头

# 按分类浏览图标
node skills/tdesign-icons/scripts/query-icons.mjs --category Brand
node skills/tdesign-icons/scripts/query-icons.mjs --category Arrows --style outline --limit 10

# 精确查找图标名称
node skills/tdesign-icons/scripts/query-icons.mjs --name chevron-down

# JSON 输出（便于程序处理）
node skills/tdesign-icons/scripts/query-icons.mjs --search edit --json
```

## 图标命名规则

- 格式：`{语义名}-{变体?}-{风格}`，如 `search-filled`、`chevron-down`、`logo-android-filled`
- `filled`（实心/填充）风格的图标以 `-filled` 结尾
- `outline`（线性/描边）风格的图标不带风格后缀（如 `search`）
- 变体（如 `-1`、`-2`）区分同语义不同形态

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

## 使用方式

**优先推荐按需引入**（本地 npm 包引入，不走网络，支持 tree-shaking）：

安装对应图标包：
```bash
# React
npm install tdesign-icons-react
# Vue 3
npm install tdesign-icons-vue-next
# Vue 2
npm install tdesign-icons-vue
```

### React 按需引入

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

图标名称规则：manifest 中的 `search` → 导入名 `SearchIcon`（首字母大写 + `Icon` 后缀），`chevron-down` → `ChevronDownIcon`。

### Vue 3 按需引入

```vue
<script setup>
import { SearchIcon, CloseIcon } from 'tdesign-icons-vue-next';
</script>

<template>
  <SearchIcon />
  <CloseIcon size="20px" />
</template>
```

### Vue 2 按需引入

```js
import { SearchIcon, CloseIcon } from 'tdesign-icons-vue';

export default {
  components: { SearchIcon, CloseIcon },
};
```

### 多色图标 & 可变粗细

按需引入的图标组件跨框架支持 `strokeColor`、`fillColor` 和 `strokeWidth` 三个高级属性：

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

> **注意**：多色图标和可变粗细是**按需引入独有的能力**。`<Icon name="..." />` CDN 方式不支持 `strokeWidth`、`strokeColor`、`fillColor` 属性（仅在 IconSVG 的 `url` 方式下部分支持，且能力受限）。

### 通过 Icon 组件使用（会走网络 CDN）

```tsx
// React
import { Icon } from 'tdesign-react';
<Icon name="search" />  {/* 依赖 loadDefaultIcons，走 https://tdesign.gtimg.com/icon/web/index.js */}
```

```vue
<!-- Vue 3 -->
<t-icon name="search" />  <!-- 同样走 CDN 网络加载 -->
```

> **注意**：`<Icon name="..." />` / `<t-icon name="..." />` 方式依赖 `loadDefaultIcons` 从 CDN 远程加载图标资源，会有网络延迟。**生产环境优先使用按需引入方式**，图标随 npm 包打包，无额外网络请求。

### 小程序（多色 & 可变粗细）

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

## 约束

- 图标名称以 manifest 数据为准，不要凭经验编造图标名。
- **优先推荐按需引入**（`import { XxxIcon } from 'tdesign-icons-xxx'`），不要默认使用 `<Icon name="..." />` 走 CDN 网络加载的方式。多色图标（`strokeColor`/`fillColor` 数组）和可变粗细（`strokeWidth`）是**按需引入独有能力**。
- 搜索不到图标时，可尝试放宽关键词、切换风格（filled/outline）或使用 `--list-categories` 浏览分类。
- 不要在无数据支持的情况下声称某图标存在或不存在。
- 更新 manifest 数据：重新运行 `node skills/tdesign-icons/scripts/convert-manifest.mjs`。
