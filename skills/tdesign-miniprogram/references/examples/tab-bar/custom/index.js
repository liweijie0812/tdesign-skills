<!--
  TDesign TDesign Miniprogram 示例：tab-bar - index
  覆盖组件：Tab-bar
  来源：组件库源码 packages/components/tab-bar/_example/index.wxml
-->

Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', icon: 'home', ariaLabel: '首页' },
      { value: 'label_2', icon: 'app', ariaLabel: '软件' },
      { value: 'label_3', icon: 'chat', ariaLabel: '聊天' },
      { value: 'label_4', icon: 'user', ariaLabel: '我的' },
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
