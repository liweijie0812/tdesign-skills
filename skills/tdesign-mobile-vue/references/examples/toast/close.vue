<!--
  TDesign TDesign Mobile Vue 示例：toast - close
  覆盖组件：Toast
  来源：组件库源码 src/toast/demos/close.vue
-->

<template>
  <div class="toast-demo">
    <t-button block size="large" theme="primary" variant="outline" @click="showOverlay">显示提示</t-button>
    <t-button block size="large" theme="primary" variant="outline" @click="hideToast">关闭提示</t-button>
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'tdesign-mobile-vue';

const showOverlay = () => {
  Toast({
    message: '未知点击事件',
    onClose: () => {
      console.log('[onClose]');
    },
    onDestroy: () => {
      console.log('[onDestroy]');
    },
    duration: 0,
  });
};
const hideToast = () => {
  Toast.clear();
};
</script>
