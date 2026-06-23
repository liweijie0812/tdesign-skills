<!--
  TDesign TDesign Miniprogram 示例：color-picker - index
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/index.wxml
-->

Component({
  methods: {
    onChange(e) {
      console.log('change', e.detail);
    },

    handlePopup() {
      this.setData({ visible: true });
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
  },
});
