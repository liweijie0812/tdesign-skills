<!--
  TDesign TDesign Mobile Vue 示例：empty - base
  覆盖组件：Empty
  来源：组件库源码 src/empty/demos/base.vue
-->

<template>
  <t-empty :icon="userIcon" description="描述文字" />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { InfoCircleFilledIcon } from 'tdesign-icons-vue-next';

const userIcon = () => h(InfoCircleFilledIcon);
</script>
