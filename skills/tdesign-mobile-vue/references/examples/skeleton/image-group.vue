<!--
  TDesign TDesign Mobile Vue 示例：skeleton - image-group
  覆盖组件：Skeleton
  来源：组件库源码 src/skeleton/demos/image-group.vue
-->

<template>
  <div class="group">
    <t-skeleton :row-col="rowCols" :loading="loading"></t-skeleton>
    <t-skeleton :row-col="rowCols" :loading="loading"></t-skeleton>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);
const rowCols = [{ size: '163.5px', borderRadius: '12px' }, 1, { width: '61%' }];
</script>
<style lang="less" scoped>
.group {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
