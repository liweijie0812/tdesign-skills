<!--
  TDesign TDesign Vue Next 示例：steps - options
  覆盖组件：Steps
  来源：组件库源码 packages/components/steps/_example/options.vue
-->

<template>
  <t-steps :current="current" :options="options" />
</template>

<script lang="ts" setup>
import type { StepsProps } from 'tdesign-vue-next';

const options: StepsProps['options'] = [
  {
    title: '步骤一',
    content: '这里是提示文字',
  },
  {
    title: '步骤二',
    content: '这里是提示文字',
  },
  {
    title: '步骤三',
    content: '这里是提示文字',
  },
  {
    title: '步骤四',
    content: '这里是提示文字',
  },
];
const current: StepsProps['current'] = 1;
</script>
