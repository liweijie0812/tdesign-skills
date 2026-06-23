<!--
  TDesign TDesign Vue Next 示例：rate - status
  覆盖组件：Rate
  来源：组件库源码 packages/components/rate/_example/status.vue
-->

<template>
  <t-space direction="vertical">
    <h3>未评分状态</h3>
    <t-rate />
    <h3>满分状态</h3>
    <t-rate :default-value="5" />
    <h3>半星状态</h3>
    <t-rate :default-value="4.5" allow-half />
  </t-space>
</template>
