<!--
  TDesign TDesign Mobile Vue 示例：stepper - theme
  覆盖组件：Stepper
  来源：组件库源码 src/stepper/demos/theme.vue
-->

<template>
  <div class="stepper-example">
    <t-stepper default-value="3" theme="filled" />
    <t-stepper default-value="3" theme="outline" />
    <t-stepper default-value="3" />
  </div>
</template>

<style lang="less">
.stepper-example {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  background-color: var(--bg-color-demo, #fff);
}
</style>
