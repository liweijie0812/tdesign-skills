<!--
  TDesign TDesign UniApp 示例：overlay - index
  覆盖组件：Overlay
  来源：组件库源码 packages/components/overlay/_example/index.vue
-->

Component({
  data: {
    visible: false,
  },
  methods: {
    handleClick() {
      this.setData({ visible: true });
    },
    handleOverlayClick(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },
  },
});
