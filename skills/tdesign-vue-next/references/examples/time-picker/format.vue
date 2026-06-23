<!--
  TDesign TDesign Vue Next 示例：time-picker - format
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/format.vue
-->

<template>
  <t-time-picker v-model="time" class="demos" format="h:m:s a" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const time = ref('00:00:00 am');
</script>
