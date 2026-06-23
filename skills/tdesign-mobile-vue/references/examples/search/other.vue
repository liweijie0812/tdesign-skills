<!--
  TDesign TDesign Mobile Vue 示例：search - other
  覆盖组件：Search
  来源：组件库源码 src/search/demos/other.vue
-->

<template>
  <div class="example-search">
    <t-search placeholder="搜索预设文案" center @change="onChange"></t-search>
  </div>
</template>

<script lang="ts" setup>
const onChange = (val: string) => {
  console.log('change: ', val);
};
</script>
