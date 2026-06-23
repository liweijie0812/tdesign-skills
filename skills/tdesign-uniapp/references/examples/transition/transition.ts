<!--
  TDesign TDesign UniApp 示例：transition - transition
  覆盖组件：Transition
  来源：组件库源码 packages/components/transition/_example/transition.vue
-->

Page({
  data: {
    visible: false,
  },

  onTriggerClick() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
