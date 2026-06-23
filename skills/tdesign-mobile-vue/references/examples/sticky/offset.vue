<!--
  TDesign TDesign Mobile Vue 示例：sticky - offset
  覆盖组件：Sticky
  来源：组件库源码 src/sticky/demos/offset.vue
-->

<template>
  <t-sticky :offset-top="40">
    <t-button theme="danger" size="large" class="common-button">吸顶距离</t-button>
  </t-sticky>
</template>

<style lang="less" scoped>
.common-button {
  color: #fff;
  width: 104px;
  margin-left: 136px;
}
</style>
