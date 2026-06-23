<!--
  TDesign TDesign Vue 2 示例：qrcode - popover
  覆盖组件：Qrcode
  来源：组件库源码 src/qrcode/_example/popover.vue
-->

<template>
  <div style="width: 100%">
    <t-popup trigger="hover">
      <t-button>Hover me</t-button>
      <template #content>
        <t-qrcode value="https://tdesign.tencent.com/" :size="136" borderless />
      </template>
    </t-popup>
  </div>
</template>
