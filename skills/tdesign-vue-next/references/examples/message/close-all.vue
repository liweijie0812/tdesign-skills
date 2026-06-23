<!--
  TDesign TDesign Vue Next 示例：message - close-all
  覆盖组件：Message
  来源：组件库源码 packages/components/message/_example/close-all.vue
-->

<template>
  <t-space>
    <t-button variant="outline" @click="openSomeMsg">点击打开多个消息</t-button>
    <t-button id="t-demo-msg-close-all" variant="outline" @click="closeAll">点击关闭所有消息</t-button>
  </t-space>
</template>

<script lang="ts" setup>
import { MessagePlugin } from 'tdesign-vue-next';
import type { ButtonProps } from 'tdesign-vue-next';

const openSomeMsg: ButtonProps['onClick'] = () => {
  MessagePlugin.info('这是第一条消息');
  MessagePlugin.warning('这是第二条消息');
  MessagePlugin.error('这是第三条消息');
};
const closeAll: ButtonProps['onClick'] = () => {
  MessagePlugin.closeAll();
};
</script>
