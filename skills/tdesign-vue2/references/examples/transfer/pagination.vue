<!--
  TDesign TDesign Vue 2 示例：transfer - pagination
  覆盖组件：Transfer
  来源：组件库源码 src/transfer/_example/pagination.vue
-->

<template>
  <t-transfer
    theme="primary"
    :data="list"
    v-model="targetValue"
    :checked-value="checkedValue"
    :pagination="pagination"
    :onPageChange="handlePageChange"
  />
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: `内容${i + 1}`,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checkedValue: [],
      pagination: [
        {
          pageSize: 10,
          defaultCurrent: 1,
        },
        {
          pageSize: 5,
          defaultCurrent: 1,
        },
      ],
    };
  },
  methods: {
    handlePageChange(...args) {
      console.log('handlePageChange', args);
    },
  },
};
</script>
