<!--
  TDesign TDesign Mobile Vue 示例：switch - size
  覆盖组件：Switch
  来源：组件库源码 src/switch/demos/size.vue
-->

<template>
  <t-cell title="大尺寸 32">
    <template #rightIcon>
      <t-switch size="large" :default-value="true" />
    </template>
  </t-cell>
  <t-cell title="中尺寸 28">
    <template #rightIcon>
      <t-switch :default-value="true" />
    </template>
  </t-cell>
  <t-cell title="小尺寸 24">
    <template #rightIcon>
      <t-switch :default-value="true" size="small" />
    </template>
  </t-cell>
</template>

<style scoped>
.t-cell + .t-cell {
  margin-top: 16px;
}
</style>
