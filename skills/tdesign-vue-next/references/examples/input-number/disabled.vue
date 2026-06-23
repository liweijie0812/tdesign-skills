<!--
  TDesign TDesign Vue Next 示例：input-number - disabled
  覆盖组件：Input-number
  来源：组件库源码 packages/components/input-number/_example/disabled.vue
-->

<template>
  <t-input-number v-model="value" :max="15" :min="-2" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(3);
</script>
