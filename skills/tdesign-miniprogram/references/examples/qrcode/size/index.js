<!--
  TDesign TDesign Miniprogram 示例：qrcode - index
  覆盖组件：Qrcode
  来源：组件库源码 packages/components/qrcode/_example/index.wxml
-->

Component({
  data: {
    size: 160,
    minSize: 80,
    maxSize: 240,
  },
  methods: {
    changeSize(e) {
      const newSize = this.data.size + e.currentTarget.dataset.step;
      if (newSize >= this.data.minSize && newSize <= this.data.maxSize) {
        this.setData({ size: newSize });
      }
    },
  },
});
