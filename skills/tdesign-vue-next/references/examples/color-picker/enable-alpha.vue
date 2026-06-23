<!--
  TDesign TDesign Vue Next 示例：color-picker - enable-alpha
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/enable-alpha.vue
-->

<template>
  <t-color-picker-panel v-model="color" format="RGBA" :enable-alpha="true" @change="handleChange" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { ColorPickerPanelProps } from 'tdesign-vue-next';

const color = ref('#0052d9');
const handleChange: ColorPickerPanelProps['onChange'] = (value) => {
  console.log(value);
};
</script>
