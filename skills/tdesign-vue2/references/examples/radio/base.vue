<!--
  TDesign TDesign Vue 2 示例：radio - base
  覆盖组件：Radio
  来源：组件库源码 src/radio/_example/base.vue
-->

<template>
  <t-space>
    <t-radio>未选中项</t-radio>
    <t-radio :checked="true">选中项</t-radio>
    <t-radio :checked="true" disabled>选中禁用态</t-radio>
    <t-radio disabled>未选中禁用态</t-radio>
  </t-space>
</template>
