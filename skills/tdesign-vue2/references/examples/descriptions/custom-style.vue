<!--
  TDesign TDesign Vue 2 示例：descriptions - custom-style
  覆盖组件：Descriptions
  来源：组件库源码 src/descriptions/_example/custom-style.vue
-->

<template>
  <t-descriptions
    title="Shipping address"
    bordered
    :label-style="{ width: '100px', textAlign: 'left' }"
    :content-style="{ textAlign: 'right' }"
    :column="3"
  >
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
  </t-descriptions>
</template>
