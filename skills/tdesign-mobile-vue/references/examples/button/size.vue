<!--
  TDesign TDesign Mobile Vue 示例：button - size
  覆盖组件：Button
  来源：组件库源码 src/button/demos/size.vue
-->

<template>
  <div class="row">
    <t-button size="large" theme="primary">按钮 48</t-button>
    <t-button theme="primary">按钮 40</t-button>
    <t-button size="small" theme="primary">按钮 32</t-button>
    <t-button size="extra-small" theme="primary">按钮 28</t-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
}
</style>
