<!--
  TDesign TDesign UniApp 示例：icon - index
  覆盖组件：Icon
  来源：组件库源码 packages/components/icon/_example/index.vue
-->

Component({
  data: {
    imageIconList: [
      'https://tdesign.gtimg.com/mobile/demos/icon1.png',
      'https://tdesign.gtimg.com/mobile/demos/icon2.png',
    ],
  },

  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') return;
      wx.showToast({ title: name, icon: 'none', duration: 1000 });
    },
  },
});
