<!--
  TDesign TDesign Mobile Vue 示例：dialog - plugin
  覆盖组件：Dialog
  来源：组件库源码 src/dialog/demos/plugin.vue
-->

<template>
  <t-button content="命令行操作" block theme="primary" size="large" variant="outline" @click="onClick" />
</template>

<script lang="ts" setup>
import { inject } from 'vue';

const $dialog: any = inject('$dialog');

const onClick = () => {
  $dialog.confirm({
    title: '对话框标题',
    content: '告知当前状态、信息和解决方法，等内容。描述尽可能控制在三行内。',
    confirmBtn: '确认',
  });
};
</script>
