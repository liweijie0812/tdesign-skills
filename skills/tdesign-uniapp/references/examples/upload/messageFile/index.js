<!--
  TDesign TDesign UniApp 示例：upload - index
  覆盖组件：Upload
  来源：组件库源码 packages/components/upload/_example/index.vue
-->

Component({
  data: {
    originFiles: [
      {
        url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
        name: 'uploaded1.png',
        type: 'image',
      },
    ],
    gridConfig: {
      column: 4,
      width: 160,
      height: 160,
    },
    config: {
      count: 1,
    },
  },
  methods: {
    handleSuccess(e) {
      const { files } = e.detail;
      this.setData({
        originFiles: files,
      });
    },
    handleRemove(e) {
      const { index } = e.detail;
      const { originFiles } = this.data;
      originFiles.splice(index, 1);
      this.setData({
        originFiles,
      });
    },
  },
});
