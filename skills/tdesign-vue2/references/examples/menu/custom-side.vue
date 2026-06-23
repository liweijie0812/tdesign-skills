<!--
  TDesign TDesign Vue 2 示例：menu - custom-side
  覆盖组件：Menu
  来源：组件库源码 src/menu/_example/custom-side.vue
-->

<template>
  <t-menu theme="light" defaultValue="item2">
    <template #logo>
      <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
    </template>
    <t-menu-item value="item1">菜单内容</t-menu-item>
    <t-menu-item value="item2">菜单内容</t-menu-item>
    <t-menu-item value="item3">菜单内容</t-menu-item>
    <t-menu-item value="item4" :disabled="true">禁用菜单</t-menu-item>
  </t-menu>
</template>
