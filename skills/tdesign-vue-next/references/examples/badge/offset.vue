<!--
  TDesign TDesign Vue Next 示例：badge - offset
  覆盖组件：Badge
  来源：组件库源码 packages/components/badge/_example/offset.vue
-->

<template>
  <t-space size="large">
    <t-badge count="2">
      <div class="badge-block" />
    </t-badge>

    <t-badge count="2" :offset="[10, 10]">
      <div class="badge-block" />
    </t-badge>

    <t-badge count="2" :offset="[-10, 10]">
      <div class="badge-block" />
    </t-badge>

    <t-badge count="2" :offset="[-10, -10]">
      <div class="badge-block" />
    </t-badge>

    <t-badge count="2" :offset="[10, -10]">
      <div class="badge-block" />
    </t-badge>
  </t-space>
</template>

<style>
.badge-block {
  width: 40px;
  height: 40px;
  background: #eeeeee;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
