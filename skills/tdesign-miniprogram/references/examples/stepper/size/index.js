<!--
  TDesign TDesign Miniprogram 示例：stepper - index
  覆盖组件：Stepper
  来源：组件库源码 packages/components/stepper/_example/index.wxml
-->

Component({
  data: {
    value: 3,
  },

  methods: {
    handleChange(e) {
      const { value } = e.detail;

      console.log(value);
      this.setData({
        value,
      });
    },
  },
});
