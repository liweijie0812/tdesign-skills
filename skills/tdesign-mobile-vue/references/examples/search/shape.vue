<!--
  TDesign TDesign Mobile Vue 示例：search - shape
  覆盖组件：Search
  来源：组件库源码 src/search/demos/shape.vue
-->

<template>
  <div class="example-search">
    <t-search v-model="value" :clearable="true" placeholder="搜索预设文案" @change="onChange"></t-search>
  </div>
  <div class="example-search">
    <t-search v-model="value" :clearable="true" shape="round" placeholder="搜索预设文案" @change="onChange"></t-search>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const onChange = (val: string) => {
  console.log('change: ', val);
};

const value = ref('');
</script>
<style lang="less">
.example-search {
  background-color: var(--bg-color-demo, #fff);
  padding: 8px 16px;
}
</style>
