<!--
  TDesign TDesign Vue Next 示例：time-picker - twelve-hour
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/twelve-hour.vue
-->

<template>
  <t-time-picker v-model="value" format="hh:mm:ss a" :hide-disabled-time="false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('10:20:30 am');
</script>
