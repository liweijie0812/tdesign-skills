<!--
  TDesign TDesign Vue Next 示例：avatar - size
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/size.vue
-->

<template>
  <t-space direction="vertical" :size="40">
    <t-space :size="40">
      <t-avatar size="small"> W </t-avatar>
      <t-avatar size="medium"> W </t-avatar>
      <t-avatar size="large"> W </t-avatar>
      <t-avatar size="100px"> W </t-avatar>
    </t-space>

    <t-space :size="40">
      <t-avatar shape="round" size="small"> W </t-avatar>
      <t-avatar shape="round" size="medium"> W </t-avatar>
      <t-avatar shape="round" size="large"> W </t-avatar>
      <t-avatar shape="round" size="100px"> W </t-avatar>
    </t-space>
  </t-space>
</template>
