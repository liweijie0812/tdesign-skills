<!--
  TDesign TDesign Vue Next 示例：badge - custom
  覆盖组件：Badge
  来源：组件库源码 packages/components/badge/_example/custom.vue
-->

<template>
  <t-space size="large">
    <t-badge count="2" dot>
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="new">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="99" color="#00A870">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="100" color="#0052D9" shape="round">
      <div class="badge-block"></div>
    </t-badge>
  </t-space>
</template>
<style scoped>
.badge-block {
  width: 40px;
  height: 40px;
  background: #eeeeee;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
