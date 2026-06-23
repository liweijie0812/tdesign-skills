<!--
  TDesign TDesign Vue 2 示例：slider - input-number-vertical
  覆盖组件：Slider
  来源：组件库源码 src/slider/_example/input-number-vertical.vue
-->

<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" :layout="layout" :show-tooltip="true" :inputNumberProps="inputNumberProps" />
    <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" :inputNumberProps="inputNumberProps" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      inputNumberProps: { theme: 'column' },
      layout: 'vertical',
    };
  },
};
</script>
