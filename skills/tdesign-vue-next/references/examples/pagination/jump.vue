<!--
  TDesign TDesign Vue Next 示例：pagination - jump
  覆盖组件：Pagination
  来源：组件库源码 packages/components/pagination/_example/jump.vue
-->

<template>
  <t-pagination
    v-model="current"
    v-model:pageSize="pageSize"
    :total="101"
    show-jumper
    @change="onChange"
    @page-size-change="onPageSizeChange"
    @current-change="onCurrentChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import type { PaginationProps } from 'tdesign-vue-next';

const current = ref(1);
const pageSize = ref(20);
const onPageSizeChange: PaginationProps['onPageSizeChange'] = (size) => {
  console.log('page-size:', size);
  MessagePlugin.success(`pageSize变化为${size}`);
};
const onCurrentChange: PaginationProps['onCurrentChange'] = (index, pageInfo) => {
  MessagePlugin.success(`转到第${index}页`);
  console.log(pageInfo);
};
const onChange: PaginationProps['onChange'] = (pageInfo) => {
  console.log(pageInfo);
};
</script>
