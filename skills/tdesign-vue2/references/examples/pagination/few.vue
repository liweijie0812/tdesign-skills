<!--
  TDesign TDesign Vue 2 示例：pagination - few
  覆盖组件：Pagination
  来源：组件库源码 src/pagination/_example/few.vue
-->

<template>
  <div>
    <t-pagination v-model="current" :total="49" :on-change="onChange" :page-size="10" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
  methods: {
    onChange(pageInfo) {
      console.log(pageInfo);
    },
  },
};
</script>
