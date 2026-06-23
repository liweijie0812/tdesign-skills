<!--
  TDesign TDesign Mobile Vue 示例：skeleton - grid
  覆盖组件：Skeleton
  来源：组件库源码 src/skeleton/demos/grid.vue
-->

<template>
  <t-skeleton :row-col="grid" :loading="true"></t-skeleton>
</template>
<script lang="ts" setup>
const grid = [
  [
    { width: '48px', height: '48px', borderRadius: '6px' },
    { width: '48px', height: '48px', borderRadius: '6px' },
    { width: '48px', height: '48px', borderRadius: '6px' },
    { width: '48px', height: '48px', borderRadius: '6px' },
    { width: '48px', height: '48px', borderRadius: '6px' },
  ],
  [
    { width: '48px', height: '16px', borderRadius: '3px' },
    { width: '48px', height: '16px', borderRadius: '3px' },
    { width: '48px', height: '16px', borderRadius: '3px' },
    { width: '48px', height: '16px', borderRadius: '3px' },
    { width: '48px', height: '16px', borderRadius: '3px' },
  ],
];
</script>
