<!--
  TDesign TDesign Vue 2 示例：rate - size
  覆盖组件：Rate
  来源：组件库源码 src/rate/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <h3>16px</h3>
    <t-rate v-model="value" size="16px" />
    <h3>24px</h3>
    <t-rate v-model="value" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: 5,
    };
  },
};
</script>
