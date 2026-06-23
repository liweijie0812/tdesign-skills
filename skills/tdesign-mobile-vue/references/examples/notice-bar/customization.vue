<!--
  TDesign TDesign Mobile Vue 示例：notice-bar - customization
  覆盖组件：Notice-bar
  来源：组件库源码 src/notice-bar/demos/customization.vue
-->

<template>
  <t-notice-bar visible content="提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述">
    <template #operation>
      <t-link style="margin-left: 2px" theme="primary">详情</t-link>
    </template>
    <template #suffixIcon>
      <CloseIcon />
    </template>
  </t-notice-bar>
</template>

<script lang="ts" setup>
import { CloseIcon } from 'tdesign-icons-vue-next';
</script>
