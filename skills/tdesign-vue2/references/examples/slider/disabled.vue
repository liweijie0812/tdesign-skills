<!--
  TDesign TDesign Vue 2 示例：slider - disabled
  覆盖组件：Slider
  来源：组件库源码 src/slider/_example/disabled.vue
-->

<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" disabled :show-tooltip="true" />
    <t-slider v-model="value2" disabled range :show-tooltip="true" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
    };
  },
};
</script>
<style>
.block {
  padding: 30px 24px;
}
</style>
