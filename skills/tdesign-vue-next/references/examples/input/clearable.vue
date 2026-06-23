<!--
  TDesign TDesign Vue Next 示例：input - clearable
  覆盖组件：Input
  来源：组件库源码 packages/components/input/_example/clearable.vue
-->

<template>
  <t-input v-model="value" clearable placeholder="请输入" @clear="onClear" @blur="onBlur" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { InputProps } from 'tdesign-vue-next';

const value = ref('Hello TDesign');
const onClear: InputProps['onClear'] = () => {
  console.log('clear');
};
const onBlur: InputProps['onBlur'] = () => {
  console.log('blur');
};
</script>
