<!--
  TDesign TDesign Mobile Vue 示例：link - base
  覆盖组件：Link
  来源：组件库源码 src/link/demos/base.vue
-->

<template>
  <div class="tdesign-mobile-link-demo">
    <t-link href="/mobile-vue/overview" theme="primary">跳转链接</t-link>
    <t-link hover>跳转链接</t-link>
  </div>
</template>
<style scoped>
.tdesign-mobile-link-demo {
  height: 48px;
  background-color: var(--bg-color-demo, #fff);
  display: flex;
  justify-content: space-evenly;
}
</style>
