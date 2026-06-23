<!--
  TDesign TDesign Miniprogram 示例：segmented - index
  覆盖组件：Segmented
  来源：组件库源码 packages/components/segmented/_example/index.wxml
-->

Component({
  data: {
    valueWithDisabled: 0,
    optionsWithDisabled: [
      { value: 0, label: '选中' },
      { value: 1, label: '默认' },
      { value: 2, label: '禁用', disabled: true },
    ],
  },
  methods: {
    onChangeWithDisabled(e) {
      console.log('onChangeWithDisabled:', e.detail);
      this.setData({ valueWithDisabled: e.detail.value });
    },
  },
});
