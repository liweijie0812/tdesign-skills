<!--
  TDesign TDesign Miniprogram 示例：icon - index
  覆盖组件：Icon
  来源：组件库源码 packages/components/icon/_example/index.wxml
-->

import icons from '../data';

Component({
  data: {
    icons,
  },

  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') return;
      wx.showToast({ title: name, icon: 'none', duration: 1000 });
    },
  },
});
