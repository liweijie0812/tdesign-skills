<!--
  TDesign TDesign Vue Next 示例：breadcrumb - options
  覆盖组件：Breadcrumb
  来源：组件库源码 packages/components/breadcrumb/_example/options.vue
-->

<template>
  <t-breadcrumb :options="options" />
</template>

<script lang="tsx" setup>
import type { BreadcrumbProps } from 'tdesign-vue-next';

const options: BreadcrumbProps['options'] = [
  {
    content: '页面1',
  },
  {
    content: '页面2',
  },
  {
    content: '页面3',
    href: 'https://www.tencent.com',
  },
];
</script>
