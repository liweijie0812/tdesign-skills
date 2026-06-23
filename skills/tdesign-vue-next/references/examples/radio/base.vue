<!--
  TDesign TDesign Vue Next 示例：radio - base
  覆盖组件：Radio
  来源：组件库源码 packages/components/radio/_example/base.vue
-->

<template>
  <t-space>
    <t-radio>未选中项</t-radio>
    <t-radio allow-uncheck> 可取消选中项 </t-radio>
    <t-radio :checked="true"> 选中项 </t-radio>
    <t-radio :checked="true" disabled> 选中禁用态 </t-radio>
    <t-radio disabled> 未选中禁用态 </t-radio>
  </t-space>
</template>

<style>
.tdesign-radio-base .tdesign-demo-block {
  display: flex;
  justify-content: space-around;
}
</style>
