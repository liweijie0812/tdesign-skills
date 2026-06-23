<!--
  TDesign TDesign Vue Next 示例：input-number - auto-width
  覆盖组件：Input-number
  来源：组件库源码 packages/components/input-number/_example/auto-width.vue
-->

<template>
  <t-space size="100px">
    <t-input-number v-model="value1" auto-width theme="row" :min="-2" />
    <t-input-number v-model="value2" auto-width theme="column" :min="-2" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3);
</script>
