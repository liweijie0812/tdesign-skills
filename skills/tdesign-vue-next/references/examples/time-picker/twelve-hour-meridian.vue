<!--
  TDesign TDesign Vue Next 示例：time-picker - twelve-hour-meridian
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/twelve-hour-meridian.vue
-->

<template>
  <t-time-picker v-model="value" format="A hh:mm:ss" placeholder="选择时间" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('PM 10:20:30');
</script>
