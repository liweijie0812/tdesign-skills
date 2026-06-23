<!--
  TDesign TDesign Miniprogram 示例：segmented - index
  覆盖组件：Segmented
  来源：组件库源码 packages/components/segmented/_example/index.wxml
-->

Component({
  data: {
    options: [
      { value: 0, label: '选项' },
      { value: 1, label: '选项' },
      { value: 2, label: '选项' },
    ],
    valueWithIcon: 0,
    optionsWithIcon: [
      { value: 0, label: '选项', icon: 'home' },
      { value: 1, label: '选项', icon: 'home' },
      { value: 2, label: '选项', icon: 'home' },
    ],
  },
  methods: {
    onChangeWithIcon(e) {
      console.log('onChangeWithIcon:', e.detail);
      this.setData({ valueWithIcon: e.detail.value });
    },
  },
});
