<!--
  TDesign TDesign Vue Next 示例：color-picker - status-disabled
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/status-disabled.vue
-->

<template>
  <t-color-picker v-model="color" disabled />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const color = ref('#0052d9');
</script>
