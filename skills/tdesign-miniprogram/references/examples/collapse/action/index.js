<!--
  TDesign TDesign Miniprogram 示例：collapse - index
  覆盖组件：Collapse
  来源：组件库源码 packages/components/collapse/_example/index.wxml
-->

Component({
  data: {
    activeValues: [0],
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
  },
});
