<!--
  TDesign TDesign Vue Next 示例：slider - disabled
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/disabled.vue
-->

<template>
  <t-space direction="vertical" class="slider-demo-container">
    <t-slider v-model="value1" disabled :show-tooltip="true" />
    <t-slider v-model="value2" disabled range :show-tooltip="true" />
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
</script>
<style>
.slider-demo-container {
  padding: 30px 24px;
}
</style>
