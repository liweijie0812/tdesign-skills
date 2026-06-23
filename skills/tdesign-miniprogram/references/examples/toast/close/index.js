<!--
  TDesign TDesign Miniprogram 示例：toast - index
  覆盖组件：Toast
  来源：组件库源码 packages/components/toast/_example/index.wxml
-->

import Toast, { hideToast } from 'tdesign-miniprogram/toast';

Component({
  methods: {
    handleShow() {
      Toast({
        context: this,
        selector: '#t-toast',
        duration: -1,
        message: '轻提示文字内容',
      });
    },
    handleHide() {
      hideToast({
        context: this,
        selector: '#t-toast',
      });
    },
  },
});
