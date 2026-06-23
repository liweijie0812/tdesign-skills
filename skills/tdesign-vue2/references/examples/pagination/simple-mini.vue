<!--
  TDesign TDesign Vue 2 示例：pagination - simple-mini
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/simple-mini.vue
-->

<template>
  <t-pagination theme="simple" size="small" :total="100" :page-size.sync="pageSize" />
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
</script>
