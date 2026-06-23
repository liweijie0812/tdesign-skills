<!--
  TDesign TDesign Vue Next 示例：qrcode - status
  覆盖组件：Qrcode
  来源：组件库源码 packages/components/qrcode/_example/status.vue
-->

<template>
  <t-space>
    <t-qrcode value="https://tdesign.tencent.com/" status="loading" />
    <t-qrcode value="https://tdesign.tencent.com/" status="expired" :on-refresh="() => console.log('Click Refresh')" />
    <t-qrcode value="https://tdesign.tencent.com/" status="scanned" />
  </t-space>
</template>
