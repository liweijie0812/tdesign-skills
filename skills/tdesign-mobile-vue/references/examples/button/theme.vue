<!--
  TDesign TDesign Mobile Vue 示例：button - theme
  覆盖组件：Button
  来源：组件库源码 src/button/demos/theme.vue
-->

<template>
  <div class="section-theme">
    <div class="row">
      <t-button size="large">填充按钮</t-button>
      <t-button size="large" variant="outline">描边按钮</t-button>
      <t-button size="large" variant="text">文字按钮</t-button>
    </div>

    <div class="row">
      <t-button size="large" theme="primary">填充按钮</t-button>
      <t-button size="large" theme="primary" variant="outline">描边按钮</t-button>
      <t-button size="large" theme="primary" variant="text">文字按钮</t-button>
    </div>

    <div class="row">
      <t-button size="large" theme="danger">填充按钮</t-button>
      <t-button size="large" theme="danger" variant="outline">描边按钮</t-button>
      <t-button size="large" theme="danger" variant="text">文字按钮</t-button>
    </div>

    <div class="row">
      <t-button size="large" theme="light">填充按钮</t-button>
      <t-button size="large" theme="light" variant="outline">描边按钮</t-button>
      <t-button size="large" theme="light" variant="text">文字按钮</t-button>
    </div>
  </div>
</template>

<style scoped>
.section-theme {
  overflow-y: auto;

  .row {
    margin: 0 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .row:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
