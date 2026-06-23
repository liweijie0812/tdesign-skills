<!--
  TDesign TDesign Mobile Vue 示例：toast - cover
  覆盖组件：Toast
  来源：组件库源码 src/toast/demos/cover.vue
-->

<template>
  <div class="toast-demo">
    <t-button block size="large" theme="primary" variant="outline" @click="showPreventScrollThrough"
      >禁止滑动和点击</t-button
    >
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { PoweroffIcon } from 'tdesign-icons-vue-next';
import { Toast } from 'tdesign-mobile-vue';

const showPreventScrollThrough = () => {
  Toast({
    message: '禁止滑动和点击',
    direction: 'column',
    placement: 'bottom',
    duration: 5000,
    preventScrollThrough: true,
    showOverlay: true,
    icon: () => h(PoweroffIcon),
  });
};
</script>
