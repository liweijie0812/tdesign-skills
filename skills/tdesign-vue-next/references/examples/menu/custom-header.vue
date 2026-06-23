<!--
  TDesign TDesign Vue Next 示例：menu - custom-header
  覆盖组件：Menu
  来源：组件库源码 packages/components/menu/_example/custom-header.vue
-->

<template>
  <t-head-menu theme="dark" default-value="item2">
    <t-menu-item value="item1"> 菜单内容一 </t-menu-item>
    <t-menu-item value="item2"> 已选内容 </t-menu-item>
    <t-menu-item value="item3"> 菜单内容二 </t-menu-item>
    <t-menu-item value="item4" :disabled="true"> 菜单内容三 </t-menu-item>
    <template #operations>
      <div class="t-demo-menu--dark">
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="search" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="mail" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="user" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="ellipsis" /></template>
        </t-button>
      </div>
    </template>
  </t-head-menu>
</template>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;
    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
