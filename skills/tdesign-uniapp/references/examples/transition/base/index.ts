<!--
  TDesign TDesign UniApp 示例：transition - index
  覆盖组件：Transition
  来源：组件库源码 packages/components/transition/_example/index.vue
-->

Component({
  data: {
    visible: false,
    style: 'display:none',
    customStyle: 'font-size: 9px',
  },
  methods: {
    onTriggerClick() {
      this.setData({
        visible: !this.data.visible,
      });
    },
    onClose() {
      this.setData({
        visible: false,
      });
    },
  },
});
