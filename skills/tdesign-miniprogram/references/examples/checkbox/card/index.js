<!--
  TDesign TDesign Miniprogram 示例：checkbox - index
  覆盖组件：Checkbox
  来源：组件库源码 packages/components/checkbox/_example/index.wxml
-->

Component({
  /**
   * 组件的初始数据
   */
  data: {
    checked: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeChecked(e) {
      this.setData({
        checked: e.detail.checked,
      });
    },
  },
});
