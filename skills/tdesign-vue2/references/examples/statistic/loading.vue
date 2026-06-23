<!--
  TDesign TDesign Vue 2 示例：statistic - loading
  覆盖组件：Statistic
  来源：组件库源码 src/statistic/_example/loading.vue
-->

<template>
  <t-space direction="vertical">
    <t-switch v-model="loading" size="large" />
    <t-statistic title="Downloads" :value="123456" :loading="loading" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
</script>
