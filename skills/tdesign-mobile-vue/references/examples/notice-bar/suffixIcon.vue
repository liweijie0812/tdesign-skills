<!--
  TDesign TDesign Mobile Vue 示例：notice-bar - suffixIcon
  覆盖组件：Notice-bar
  来源：组件库源码 src/notice-bar/demos/suffixIcon.vue
-->

<template>
  <t-notice-bar visible content="这是一条普通的通知信息">
    <template #suffixIcon>
      <CloseIcon />
    </template>
  </t-notice-bar>
</template>

<script lang="ts" setup>
import { CloseIcon } from 'tdesign-icons-vue-next';
</script>
