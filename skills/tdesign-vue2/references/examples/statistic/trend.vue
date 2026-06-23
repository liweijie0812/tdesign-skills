<!--
  TDesign TDesign Vue 2 示例：statistic - trend
  覆盖组件：Statistic
  来源：组件库源码 src/statistic/_example/trend.vue
-->

<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" trendPlacement="right" />
  </t-space>
</template>
