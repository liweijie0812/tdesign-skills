<!--
  TDesign TDesign Miniprogram 示例：sticky - index
  覆盖组件：Sticky
  来源：组件库源码 packages/components/sticky/_example/index.wxml
-->

Component({
  properties: {
    navbarHeight: {
      type: Number,
      value: 0,
    },
  },

  data: {
    container: null,
  },

  lifetimes: {
    ready: function () {
      this.setData({
        container: () => this.createSelectorQuery().select('.wrapper'),
      });
    },
  },
});
