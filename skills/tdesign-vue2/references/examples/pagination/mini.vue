<!--
  TDesign TDesign Vue 2 示例：pagination - mini
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/mini.vue
-->

<template>
  <div>
    <t-pagination size="small" :total="100" :page-size.sync="pageSize" />
  </div>
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
