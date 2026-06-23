<!--
  TDesign TDesign Mobile Vue 示例：switch - color
  覆盖组件：Switch
  来源：组件库源码 src/switch/demos/color.vue
-->

<template>
  <t-cell title="自定义颜色开关">
    <template #rightIcon>
      <t-switch :default-value="true" class="custom-color" />
    </template>
  </t-cell>
</template>

<style>
.custom-color {
  --td-switch-checked-color: #00a870;
}
</style>
