<!--
  TDesign TDesign Vue 2 示例：descriptions - column
  覆盖组件：Descriptions
  来源：组件库源码 src/descriptions/_example/column.vue
-->

<template>
  <t-space direction="vertical">
    <t-radio-group v-model="column" :options="columnOptions"></t-radio-group>
    <t-descriptions bordered :column="column">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      columnOptions: [2, 3, 4],
      column: 2,
    };
  },
};
</script>
