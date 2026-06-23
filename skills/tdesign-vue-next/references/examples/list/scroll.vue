<!--
  TDesign TDesign Vue Next 示例：list - scroll
  覆盖组件：List
  来源：组件库源码 packages/components/list/_example/scroll.vue
-->

<template>
  <t-list style="max-height: 200px" @scroll="scrollHandler">
    <t-list-item v-for="index in 15" :key="`scroll${index}`">列表内容的描述性文字</t-list-item>
  </t-list>
</template>

<script lang="ts" setup>
import type { ListProps } from 'tdesign-vue-next';

const scrollHandler: ListProps['onScroll'] = (e) => console.log(e);
</script>
