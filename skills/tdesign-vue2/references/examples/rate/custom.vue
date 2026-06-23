<!--
  TDesign TDesign Vue 2 示例：rate - custom
  覆盖组件：Rate
  来源：组件库源码 src/rate/_example/custom.vue
-->

<template>
  <t-rate v-model="value" :count="7" />
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
</script>
