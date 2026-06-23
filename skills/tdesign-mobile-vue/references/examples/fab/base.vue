<!--
  TDesign TDesign Mobile Vue 示例：fab - base
  覆盖组件：Fab
  来源：组件库源码 src/fab/demos/base.vue
-->

<template>
  <t-fab :icon="iconFunc" @click="onClick" />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { AddIcon } from 'tdesign-icons-vue-next';

const iconFunc = () => h(AddIcon, { size: '24px' });
const onClick = () => {
  console.log('click Fab');
};
</script>
