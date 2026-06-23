<!--
  TDesign TDesign Vue 2 示例：pagination - customizable
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/customizable.vue
-->

<template>
  <div>
    <t-pagination
      :total="200"
      :page-size.sync="pageSize"
      v-model="current"
      show-jumper
      show-sizer
      :page-size-options="[10, 20, 30, 100, 200]"
    />
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
