<!--
  TDesign TDesign Miniprogram 示例：toast - index
  覆盖组件：Toast
  来源：组件库源码 packages/components/toast/_example/index.wxml
-->

import Toast from 'tdesign-miniprogram/toast';

Component({
  methods: {
    showSuccessToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '成功文案',
        theme: 'success',
        direction: 'column',
      });
    },

    showWarningToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '警告文案',
        theme: 'warning',
        direction: 'column',
      });
    },

    showErrorToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '错误文案',
        theme: 'error',
        direction: 'column',
      });
    },
  },
});
