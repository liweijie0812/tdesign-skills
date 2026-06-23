<!--
  TDesign TDesign Mobile Vue 示例：checkbox - all
  覆盖组件：Checkbox
  来源：组件库源码 src/checkbox/demos/all.vue
-->

<template>
  <div>
    <t-checkbox-group v-model="checkBox" :options="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const checkBox = ref([1, 2, 3]);
const options = [
  { label: '全选', checkAll: true },
  { label: '多选', value: 1 },
  { label: '多选', value: 2 },
  {
    label: '多选',
    value: 3,
    content: '单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息',
  },
];
</script>
