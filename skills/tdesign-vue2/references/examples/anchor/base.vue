<!--
  TDesign TDesign Vue 2 示例：anchor - base
  覆盖组件：Anchor
  来源：组件库源码 src/anchor/_example/base.vue
-->

<template>
  <div style="display: flex">
    <div style="flex: 1"></div>
    <t-anchor :affixProps="{ offsetTop: 150 }">
      <t-anchor-item href="#基础锚点" title="基础锚点"></t-anchor-item>
      <t-anchor-item href="#多级锚点" title="多级锚点"></t-anchor-item>
      <t-anchor-item href="#指定容器锚点" title="指定容器锚点"></t-anchor-item>
      <t-anchor-item href="#特定交互锚点" title="特定交互锚点"></t-anchor-item>
      <t-anchor-item href="#不同尺寸的锚点" title="不同尺寸的锚点" />
    </t-anchor>
  </div>
</template>
