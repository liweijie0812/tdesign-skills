<!--
  TDesign TDesign Vue Next 示例：date-picker - cancel-range-limit
  覆盖组件：Date-picker
  来源：组件库源码 packages/components/date-picker/_example/cancel-range-limit.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range" cancel-range-select-limit />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const range = ref(['', '']);
</script>
