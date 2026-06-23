<!--
  TDesign TDesign Mobile Vue 示例：search - base
  覆盖组件：Search
  来源：组件库源码 src/search/demos/base.vue
-->

<template>
  <div class="example-search">
    <t-search placeholder="搜索预设文案"></t-search>
  </div>
  <div class="example-search">
    <t-search
      v-model="value"
      :result-list="resultList"
      placeholder="输入tdesign，有预览效果"
      @change="onChange"
    ></t-search>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const list = [
  'tdesign-vue',
  'tdesign-react',
  'tdesign-miniprogram',
  'tdesign-angular',
  'tdesign-mobile-vue',
  'tdesign-mobile-react',
];
const resultList = ref([]);

const onChange = (val: string) => {
  console.log('onChange: ', val);
  val ? (resultList.value = list.filter((item) => item.includes(val))) : (resultList.value = []);
};
</script>
<style lang="less">
.example-search {
  background-color: var(--bg-color-demo, #fff);
  padding: 8px 16px;
}
</style>
