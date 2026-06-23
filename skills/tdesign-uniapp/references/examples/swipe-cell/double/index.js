<!--
  TDesign TDesign UniApp 示例：swipe-cell - index
  覆盖组件：Swipe-cell
  来源：组件库源码 packages/components/swipe-cell/_example/index.vue
-->

Component({
  data: {
    right: [
      {
        text: '删除',
        className: 'btn delete-btn',
      },
    ],
    left: [
      {
        text: '选择',
        className: 'btn favor-btn',
      },
    ],
  },

  methods: {
    onActionClick({ detail }) {
      wx.showToast({ title: `你点击了${detail.text}`, icon: 'none' });
    },
  },
});
