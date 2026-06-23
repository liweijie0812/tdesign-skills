<!--
  TDesign TDesign UniApp 示例：rate - index
  覆盖组件：Rate
  来源：组件库源码 packages/components/rate/_example/index.vue
-->

Component({
  data: {
    value: 2,
  },

  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
