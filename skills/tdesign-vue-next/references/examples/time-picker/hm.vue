<!--
  TDesign TDesign Vue Next 示例：time-picker - hm
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/hm.vue
-->

<template>
  <t-space direction="vertical">
    <h3>时分选择</h3>
    <t-time-picker format="HH:mm" />
    <h3>毫秒选择</h3>
    <t-time-picker default-value="12:59:59:000" format="HH:mm:ss:SSS" />
  </t-space>
</template>
