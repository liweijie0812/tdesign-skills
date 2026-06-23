<!--
  TDesign TDesign UniApp 示例：swipe-cell - index
  覆盖组件：Swipe-cell
  来源：组件库源码 packages/components/swipe-cell/_example/index.vue
-->

Component({
  methods: {
    onChoice() {
      wx.showToast({ title: '你点击了选择', icon: 'none' });
    },
  },
});
