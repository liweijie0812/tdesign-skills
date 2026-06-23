<!--
  TDesign TDesign Vue Next 示例：color-picker - trigger
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/trigger.vue
-->

<template>
  <t-color-picker v-model="color" :show-primary-color-preview="false" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const color = ref('#0052d9');
</script>
