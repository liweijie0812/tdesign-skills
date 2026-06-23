<!--
  TDesign TDesign UniApp 示例：switch - index
  覆盖组件：Switch
  来源：组件库源码 packages/components/switch/_example/index.vue
-->

Component({
  data: {
    defaultVal: true,
  },
  methods: {
    handleChange(e) {
      this.setData({
        defaultVal: e.detail.value,
      });
    },
  },
});
