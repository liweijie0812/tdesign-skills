<!--
  TDesign TDesign Miniprogram 示例：transition - transition
  覆盖组件：Transition
  来源：组件库源码 packages/components/transition/_example/transition.wxml
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
