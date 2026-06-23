<!--
  TDesign TDesign Miniprogram 示例：tab-bar - index
  覆盖组件：Tab-bar
  来源：组件库源码 packages/components/tab-bar/_example/index.wxml
-->

Component({
  data: {
    value: 'home',
    list: [
      { value: 'home', label: '首页' },
      { value: 'app', label: '应用' },
      { value: 'chat', label: '聊天' },
      { value: 'user', label: '我的' },
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
