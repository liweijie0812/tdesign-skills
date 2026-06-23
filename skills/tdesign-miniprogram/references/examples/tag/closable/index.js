<!--
  TDesign TDesign Miniprogram 示例：tag - index
  覆盖组件：Tag
  来源：组件库源码 packages/components/tag/_example/index.wxml
-->

Component({
  data: {
    show: [true, true],
  },

  methods: {
    handleClose0() {
      this.setData({
        [`show[0]`]: false,
      });
    },
    handleClose1() {
      this.setData({
        [`show[1]`]: false,
      });
    },
  },
});
