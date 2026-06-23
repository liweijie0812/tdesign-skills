<!--
  TDesign TDesign Vue 2 示例：pagination - disabled
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/disabled.vue
-->

<template>
  <div>
    <t-pagination v-model="index" disabled show-jumper show-sizer :total="100" :page-size="pageSize" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      pageSize: 5,
    };
  },
};
</script>
