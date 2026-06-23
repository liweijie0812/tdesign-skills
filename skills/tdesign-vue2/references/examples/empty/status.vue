<!--
  TDesign TDesign Vue 2 示例：empty - status
  覆盖组件：Empty
  来源：组件库源码 src/empty/_example/status.vue
-->

<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty type="empty"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="maintenance"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="network-error"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="success"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="fail"></t-empty>
    </t-col>
  </t-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
