<!--
  TDesign TDesign Vue Next 示例：loading - indicatorSlot
  覆盖组件：Loading
  来源：组件库源码 packages/components/loading/_example/indicatorSlot.vue
-->

<template>
  <t-loading :loading="true">
    <template #indicator>
      <t-icon name="loading" />
    </template>
  </t-loading>
</template>
