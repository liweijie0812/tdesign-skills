<!--
  TDesign TDesign UniApp 示例：back-top - back-top
  覆盖组件：Back-top
  来源：组件库源码 packages/components/back-top/_example/back-top.vue
-->

Page({
  data: {
    type: 'round',
    scrollTop: 0,
    rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
  },

  onPageScroll(e) {
    const { scrollTop } = e;
    this.setData({ scrollTop });
  },

  onBtnClick(e: any) {
    const { source: type } = e.currentTarget.dataset;

    this.setData({
      type,
    });

    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
