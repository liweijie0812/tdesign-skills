<!--
  TDesign TDesign Miniprogram 示例：rate - index
  覆盖组件：Rate
  来源：组件库源码 packages/components/rate/_example/index.wxml
-->

Component({
  data: {
    value: [3, 3],
  },
  methods: {
    onChange(e) {
      const { index } = e.currentTarget.dataset;
      const { value } = e.detail;
      this.setData({
        [`value[${index}]`]: value,
      });
    },
  },
});
