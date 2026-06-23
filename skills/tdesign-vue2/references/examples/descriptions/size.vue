<!--
  TDesign TDesign Vue 2 示例：descriptions - size
  覆盖组件：Descriptions
  来源：组件库源码 src/descriptions/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <t-radio-group v-model="size" :options="sizeOptions"></t-radio-group>
    <t-descriptions bordered :size="size" :column="3">
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
      size: 'medium',
      sizeOptions: ['large', 'medium', 'small'],
    };
  },
};
</script>
