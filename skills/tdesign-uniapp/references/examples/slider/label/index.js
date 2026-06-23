<!--
  TDesign TDesign UniApp 示例：slider - index
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/index.vue
-->

Component({
  data: {
    value: 35,
    label(value, position) {
      const symbols = { min: '%', max: '%', start: '%', end: '%' };
      return `${value}${symbols[position]}`;
    },
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
