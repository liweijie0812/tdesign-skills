<!--
  TDesign TDesign Vue 2 示例：qrcode - status
  覆盖组件：Qrcode
  来源：组件库源码 src/qrcode/_example/status.vue
-->

<template>
  <t-space>
    <t-qrcode value="https://tdesign.tencent.com/" status="loading" />
    <t-qrcode value="https://tdesign.tencent.com/" status="expired" :onRefresh="handleRefresh" />
    <t-qrcode value="https://tdesign.tencent.com/" status="scanned" />
  </t-space>
</template>

<script>
export default {
  methods: {
    handleRefresh() {
      console.log('Click Refresh');
    },
  },
};
</script>
