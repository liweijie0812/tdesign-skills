<!--
  TDesign TDesign Miniprogram 示例：search - index
  覆盖组件：Search
  来源：组件库源码 packages/components/search/_example/index.wxml
-->

Component({
  data: {
    value: '',
    actionText: '',
  },

  methods: {
    changeHandle(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },

    focusHandle() {
      this.setData({
        actionText: '取消',
      });
    },

    blurHandle() {
      this.setData({
        actionText: '',
      });
    },

    actionHandle() {
      this.setData({
        value: '',
        actionText: '',
      });
    },
  },
});
