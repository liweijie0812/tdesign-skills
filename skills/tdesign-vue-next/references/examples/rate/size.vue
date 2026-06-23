<!--
  TDesign TDesign Vue Next 示例：rate - size
  覆盖组件：Rate
  来源：组件库源码 packages/components/rate/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <h3>16px</h3>
    <t-rate :default-value="5" size="16" />
    <h3>24px</h3>
    <t-rate :default-value="5" />
  </t-space>
</template>
