<!--
  TDesign TDesign UniApp 示例：toast - index
  覆盖组件：Toast
  来源：组件库源码 packages/components/toast/_example/index.vue
-->

import Toast from 'tdesign-miniprogram/toast';

Component({
  methods: {
    handleToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '禁止滑动和点击',
        direction: 'column',
        duration: 3000,
        preventScrollThrough: true,
        icon: 'poweroff',
      });
    },
  },
});
