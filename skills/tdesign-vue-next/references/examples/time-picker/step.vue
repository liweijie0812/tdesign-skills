<!--
  TDesign TDesign Vue Next 示例：time-picker - step
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/step.vue
-->

<template>
  <t-time-picker v-model="time1" :steps="[1, 2, 3]" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const time1 = ref('09:18:17');
</script>
