<!--
  TDesign TDesign UniApp 示例：popover - index
  覆盖组件：Popover
  来源：组件库源码 packages/components/popover/_example/index.vue
-->

Component({
  data: {
    visible: {
      normal: false,
      noArrow: false,
      custom: false,
    },
  },
  methods: {
    showPopover(e) {
      const { target } = e.currentTarget.dataset;
      this.setData({
        [`visible.${target}`]: !this.data.visible[target],
      });
    },
    onVisibleChange(e) {
      const { target } = e.currentTarget.dataset;
      this.setData({
        [`visible.${target}`]: e.detail.visible,
      });
    },
  },
});
