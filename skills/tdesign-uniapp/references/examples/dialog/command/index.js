<!--
  TDesign TDesign UniApp 示例：dialog - index
  覆盖组件：Dialog
  来源：组件库源码 packages/components/dialog/_example/index.vue
-->

import Dialog from 'tdesign-miniprogram/dialog';

Component({
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        closeOnOverlayClick: true,
        content: '告知当前状态、信息和解决方法等内容。',
        confirmBtn: '确定',
        cancelBtn: '取消',
      };

      Dialog.confirm(dialogConfig)
        .then((data) => console.log('点击了确定', data))
        .catch((data) => console.log('点击了取消', data));
    },
  },
});
