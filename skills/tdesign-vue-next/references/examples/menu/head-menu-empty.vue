<!--
  TDesign TDesign Vue Next 示例：menu - head-menu-empty
  覆盖组件：Menu
  来源：组件库源码 packages/components/menu/_example/head-menu-empty.vue
-->

<template>
  <t-head-menu theme="light" value="item2">
    <t-menu-item value="item1"> 菜单内容一 </t-menu-item>
    <t-menu-item value="item2"> 已选内容 </t-menu-item>
    <t-menu-item value="item3"> 菜单内容二 </t-menu-item>
    <t-menu-item value="item4" :disabled="true"> 菜单内容三 </t-menu-item>
  </t-head-menu>
</template>
