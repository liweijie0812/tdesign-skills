<!--
  TDesign TDesign Miniprogram 示例：tab-bar - index
  覆盖组件：Tab-bar
  来源：组件库源码 packages/components/tab-bar/_example/index.wxml
-->

Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '应用', icon: 'app' },
      { value: 'label_3', label: '聊天', icon: 'chat' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
