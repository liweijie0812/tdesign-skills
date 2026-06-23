<!--
  TDesign TDesign UniApp 示例：navbar - index
  覆盖组件：Navbar
  来源：组件库源码 packages/components/navbar/_example/index.vue
-->

Component({
  methods: {
    onBack() {
      wx.navigateBack();
    },
    onGoHome() {
      wx.reLaunch({
        url: '/pages/home/home',
      });
    },
  },
});
