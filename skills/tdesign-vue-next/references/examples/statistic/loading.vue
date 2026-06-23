<!--
  TDesign TDesign Vue Next 示例：statistic - loading
  覆盖组件：Statistic
  来源：组件库源码 packages/components/statistic/_example/loading.vue
-->

<template>
  <t-space direction="vertical">
    <t-switch v-model="loading" size="large" />
    <t-statistic title="Downloads" :value="123456" :loading="loading" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);
</script>
