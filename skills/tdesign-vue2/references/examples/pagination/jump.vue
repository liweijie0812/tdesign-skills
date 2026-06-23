<!--
  TDesign TDesign Vue 2 示例：pagination - jump
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/jump.vue
-->

<template>
  <div>
    <t-pagination v-model="current" :total="101" :page-size.sync="pageSize" show-jumper />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 1,
    };
  },
};
</script>
