# result

来源：TDesign Mobile Vue

组件简介：用于反馈不同结果的展示。

上游文档：https://raw.githubusercontent.com/Tencent/tdesign-mobile-vue/develop/src/result/result.md

## API

### Result Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
description | String / Slot / Function | - | 描述文字。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
icon | Slot / Function | - | 图标名称。TS 类型：`TNode`。[通用类型定义](../common.ts) | N
image | String / Slot / Function | - | 图片地址。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N
theme | String | default | 内置主题。可选项：default/success/warning/error | N
title | String / Slot / Function | '' | 标题。TS 类型：`string \| TNode`。[通用类型定义](../common.ts) | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-result-description-color | @text-color-secondary | -
--td-result-description-font | @font-body-medium | -
--td-result-description-margin-top | @spacer | -
--td-result-icon-default-color | @brand-color | -
--td-result-icon-error-color | @error-color | -
--td-result-icon-success-color | @success-color | -
--td-result-icon-warning-color | @warning-color | -
--td-result-title-color | @text-color-primary | -
--td-result-title-font | @font-title-extraLarge | -
--td-result-title-margin-top | @spacer-1 | -
