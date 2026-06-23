<!--
  TDesign TDesign Mobile Vue 示例：qrcode - status
  覆盖组件：Qrcode
  来源：组件库源码 src/qrcode/demos/status.vue
-->

<template>
  <div style="display: flex; flex-direction: column">
    <t-qrcode value="https://tdesign.tencent.com/" status="active" />

    <p class="tdesign-mobile-demo-block__summary">expired</p>
    <t-qrcode value="https://tdesign.tencent.com/" status="expired" :on-refresh="() => console.log('Click Refresh')" />

    <p class="tdesign-mobile-demo-block__summary">loading</p>
    <t-qrcode value="https://tdesign.tencent.com/" status="loading" />

    <p class="tdesign-mobile-demo-block__summary">scanned</p>
    <t-qrcode value="https://tdesign.tencent.com/" status="scanned" />
  </div>
</template>
