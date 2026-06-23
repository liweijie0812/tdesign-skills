<!--
  TDesign TDesign Vue Next 示例：input - focus
  覆盖组件：Input
  来源：组件库源码 packages/components/input/_example/focus.vue
-->

<template>
  <t-space direction="vertical">
    <t-input placeholder="请输入内容" @focus="onFocus" />
  </t-space>
</template>
<script lang="ts" setup>
import type { InputProps } from 'tdesign-vue-next';

const onFocus: InputProps['onFocus'] = () => {
  console.log('focused');
};
</script>
