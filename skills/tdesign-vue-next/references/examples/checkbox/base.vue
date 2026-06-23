<!--
  TDesign TDesign Vue Next 示例：checkbox - base
  覆盖组件：Checkbox
  来源：组件库源码 packages/components/checkbox/_example/base.vue
-->

<template>
  <t-space>
    <t-checkbox>未选中项</t-checkbox>
    <t-checkbox>未选悬停项</t-checkbox>
    <t-checkbox :default-checked="true"> 选中项 </t-checkbox>
    <t-checkbox disabled> 未选禁用项 </t-checkbox>
    <t-checkbox disabled :default-checked="true"> 选中禁用项 </t-checkbox>
  </t-space>
</template>
