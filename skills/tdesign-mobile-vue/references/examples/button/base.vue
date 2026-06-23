<!--
  TDesign TDesign Mobile Vue 示例：button - base
  覆盖组件：Button
  来源：组件库源码 src/button/demos/base.vue
-->

<template>
  <div class="row">
    <t-button size="large" theme="primary">填充按钮</t-button>
    <t-button size="large" theme="light">填充按钮</t-button>
    <t-button size="large">填充按钮</t-button>
  </div>
  <div class="row">
    <t-button size="large" theme="primary" variant="outline">描边按钮</t-button>
    <t-button size="large" theme="primary" variant="text">文字按钮</t-button>
  </div>
</template>

<style scoped lang="less">
.row {
  display: flex;
  padding: 0 16px;
}

.row + .row {
  margin-top: 16px;
}

.t-button + .t-button {
  margin-left: 16px;
}
</style>
