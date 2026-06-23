<!--
  TDesign TDesign UniApp 示例：collapse - collapse
  覆盖组件：Collapse
  来源：组件库源码 packages/components/collapse/_example/collapse.vue
-->

Page({
  data: {
    activeValues: [0],
  },
  handleChange(e) {
    this.setData({
      activeValues: e.detail.value,
    });
  },
});
