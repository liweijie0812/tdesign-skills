<!--
  TDesign TDesign UniApp 示例：avatar - index
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/index.vue
-->

Component({
  data: {
    pics: [
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    ],
  },

  methods: {
    onAddTap() {
      wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
    },
    onClickCollapsedAvatar() {
      console.log('click collapsed avatar');
    },
  },
});
