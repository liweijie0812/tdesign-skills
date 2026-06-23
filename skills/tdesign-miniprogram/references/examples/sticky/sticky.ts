<!--
  TDesign TDesign Miniprogram 示例：sticky - sticky
  覆盖组件：Sticky
  来源：组件库源码 packages/components/sticky/_example/sticky.wxml
-->

Page({
  data: {
    navbarHeight: 0,
  },

  onLoad() {
    this.getCustomNavbarHeight();
  },

  getCustomNavbarHeight() {
    const query = wx.createSelectorQuery();
    query.select('.custom-navbar').boundingClientRect();
    query.exec((res) => {
      console.log(res);
      const { height = 0 } = res[0] || {};
      this.setData({ navbarHeight: height });
    });
  },
});
