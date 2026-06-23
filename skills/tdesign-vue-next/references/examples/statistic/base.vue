<!--
  TDesign TDesign Vue Next 示例：statistic - base
  覆盖组件：Statistic
  来源：组件库源码 packages/components/statistic/_example/base.vue
-->

<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="USD" trend="increase" />
  </t-space>
</template>
