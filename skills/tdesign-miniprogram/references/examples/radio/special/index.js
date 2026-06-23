<!--
  TDesign TDesign Miniprogram 示例：radio - index
  覆盖组件：Radio
  来源：组件库源码 packages/components/radio/_example/index.wxml
-->

Component({
  data: {
    value: 0,
    value1: 0,
  },
  methods: {
    onChange(e) {
      this.setData({ value: e.detail.value });
    },
    onChange1(e) {
      this.setData({ value1: e.detail.value });
    },
  },
});
