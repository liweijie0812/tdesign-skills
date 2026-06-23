<!--
  TDesign TDesign Vue 2 示例：rate - texts
  覆盖组件：Rate
  来源：组件库源码 src/rate/_example/texts.vue
-->

<template>
  <t-rate show-text v-model="value" />
</template>
<script>
export default {
  data() {
    return {
      value: 4,
    };
  },
};
</script>
