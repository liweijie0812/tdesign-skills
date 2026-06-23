<!--
  TDesign TDesign UniApp 示例：color-picker - index
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/index.vue
-->

Component({
  data: {
    curFormat: 'CSS',
    color: '#7bd60b',
    formatList: [
      ['CSS', 'HEX', 'RGB'],
      ['HSL', 'HSV', 'CMYK'],
    ],
  },
  methods: {
    onChange(e) {
      console.log('change', e.detail);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
    clickFormat(e) {
      this.setData({
        curFormat: e.target.dataset.format,
      });
    },
  },
});
