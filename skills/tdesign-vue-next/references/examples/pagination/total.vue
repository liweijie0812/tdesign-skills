<!--
  TDesign TDesign Vue Next 示例：pagination - total
  覆盖组件：Pagination
  来源：组件库源码 packages/components/pagination/_example/total.vue
-->

<template>
  <t-pagination v-model="current" v-model:page-size="pageSize" :total="total" :total-content="renderTotalContent" />
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import type { PaginationProps } from 'tdesign-vue-next';

const current = ref(12);
const pageSize = ref(10);
const total = ref(685);
const renderTotalContent: PaginationProps['totalContent'] = () => {
  return <div class="t-pagination__total">{`共 ${total.value} 项数据`}</div>;
};
</script>
