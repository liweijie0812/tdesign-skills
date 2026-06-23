<!--
  TDesign TDesign Vue Next 示例：time-picker - base
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-time-picker v-model="time1" class="demos" />
    <t-time-picker v-model="time2" class="demos" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const time1 = ref('20:22');
const time2 = ref('21:22');
</script>

<style scoped>
.demos {
  margin-top: 20px;
}
</style>
