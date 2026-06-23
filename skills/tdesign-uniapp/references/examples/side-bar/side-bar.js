<!--
  TDesign TDesign UniApp 示例：side-bar - side-bar
  覆盖组件：Side-bar
  来源：组件库源码 packages/components/side-bar/_example/side-bar.vue
-->

Page({
  toNavigation(e) {
    const { target } = e.target.dataset;

    wx.navigateTo({
      url: `./${target}/index`,
    });
  },
});
