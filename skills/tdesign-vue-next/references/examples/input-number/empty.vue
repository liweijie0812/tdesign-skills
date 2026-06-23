<!--
  TDesign TDesign Vue Next 示例：input-number - empty
  覆盖组件：Input-number
  来源：组件库源码 packages/components/input-number/_example/empty.vue
-->

<template>
  <t-input-number v-model="value" placeholder="输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(undefined);
</script>
