<!--
  TDesign TDesign Vue Next 示例：breadcrumb - dropdown
  覆盖组件：Breadcrumb
  来源：组件库源码 packages/components/breadcrumb/_example/dropdown.vue
-->

<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumb-item>页面1</t-breadcrumb-item>
    <t-breadcrumb-item>页面2 <t-icon name="chevron-down" /></t-breadcrumb-item>
    <t-breadcrumb-item>页面3</t-breadcrumb-item>
  </t-breadcrumb>
</template>
