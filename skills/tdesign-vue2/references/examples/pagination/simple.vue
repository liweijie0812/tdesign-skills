<!--
  TDesign TDesign Vue 2 示例：pagination - simple
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/simple.vue
-->

<template>
  <div>
    <t-pagination theme="simple" :total="100" :page-size.sync="pageSize" />
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
