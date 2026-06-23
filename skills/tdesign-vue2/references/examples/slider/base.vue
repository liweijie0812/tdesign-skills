<!--
  TDesign TDesign Vue 2 示例：slider - base
  覆盖组件：Slider
  来源：组件库源码 src/slider/_example/base.vue
-->

<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" @change-end="handleChangeEnd" />
    <t-slider :value="value2" range :tooltipProps="tooltipProps" :label="renderLabel" @change="handleChange" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      tooltipProps: {},
    };
  },
  methods: {
    renderLabel(h, { value, position }) {
      console.log(`the position is ${position}`);
      return `${value}`;
    },
    handleChangeEnd(endValue) {
      console.log('the change end value is:', endValue);
    },
    handleChange(v) {
      if (v[1] <= 80) {
        this.value2 = v;
      }
    },
  },
};
</script>
