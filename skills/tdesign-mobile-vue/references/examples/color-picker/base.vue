<!--
  TDesign TDesign Mobile Vue 示例：color-picker - base
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/demos/base.vue
-->

<template>
  <t-color-picker @change="onChange" />
</template>
<script setup lang="ts">
const onChange = (val: string, context: { color: any; trigger: string }) => {
  console.log('change: ', val, context);
};
</script>
