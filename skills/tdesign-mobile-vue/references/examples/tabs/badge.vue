<!--
  TDesign TDesign Mobile Vue 示例：tabs - badge
  覆盖组件：Tabs
  来源：组件库源码 src/tabs/demos/badge.vue
-->

<template>
  <div class="demo-tab-bar">
    <t-tabs default-value="first">
      <t-tab-panel value="first" :badge-props="{ dot: true, offset: [0, 1] }" label="选项" />
      <t-tab-panel value="second" :badge-props="{ count: 8, offset: [0, 1] }" label="选项" />
      <t-tab-panel value="third" label="选项" />
    </t-tabs>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.t-tabs {
  margin-bottom: 16px;
}
</style>
