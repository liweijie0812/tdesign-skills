<!--
  TDesign TDesign Miniprogram 示例：fab - fab
  覆盖组件：Fab
  来源：组件库源码 packages/components/fab/_example/fab.wxml
-->

Page({
  onPageScroll() {},
  data: {
    type: 'base',
    rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
  },
  handleChange(e) {
    this.setData({
      type: e.target.dataset.type,
    });
  },
});
