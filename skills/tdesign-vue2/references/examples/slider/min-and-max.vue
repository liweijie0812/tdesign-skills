<!--
  TDesign TDesign Vue 2 示例：slider - min-and-max
  覆盖组件：Slider
  来源：组件库源码 src/slider/_example/min-and-max.vue
-->

<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :max="max" :min="min" :marks="marks" />

    <t-slider v-model="value2" range :show-tooltip="true" :max="max" :min="min" :marks="marks" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [12, 20],
      min: 10,
      max: 30,
      marks: {
        10: 'min:10',
        30: 'max:30',
      },
    };
  },
};
</script>
