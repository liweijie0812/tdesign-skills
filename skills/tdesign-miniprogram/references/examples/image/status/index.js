<!--
  TDesign TDesign Miniprogram 示例：image - index
  覆盖组件：Image
  来源：组件库源码 packages/components/image/_example/index.wxml
-->

Component({
  pageLifetimes: {
    show: function () {
      const $ele1 = this.selectComponent('#loading-img');
      const $ele2 = this.selectComponent('#loading-img-custom');

      this.setLoadingStatus($ele1);
      this.setLoadingStatus($ele2);
    },
  },
  methods: {
    setLoadingStatus(ele) {
      ele.onLoadError = null;
      ele.onLoaded = null;
      ele.setData({
        isLoading: true,
        isFailed: false,
      });
    },
  },
});
