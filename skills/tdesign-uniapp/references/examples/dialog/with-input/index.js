<!--
  TDesign TDesign UniApp 示例：dialog - index
  覆盖组件：Dialog
  来源：组件库源码 packages/components/dialog/_example/index.vue
-->

Component({
  data: {
    dialogKey: '',
    showWithInput: false,
    showTextAndTitleWithInput: false,
  },
  methods: {
    showDialog(e) {
      const { key } = e.currentTarget.dataset;
      this.setData({ [key]: true, dialogKey: key });
    },

    closeDialog() {
      const { dialogKey } = this.data;
      this.setData({ [dialogKey]: false });
    },
  },
});
