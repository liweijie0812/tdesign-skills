<!--
  TDesign TDesign Vue Next 示例：button - block
  覆盖组件：Button
  来源：组件库源码 packages/components/button/_example/block.vue
-->

<template>
  <t-space direction="vertical" align="center">
    <t-button block theme="primary" variant="base">填充按钮</t-button>
    <t-button block variant="outline">描边按钮</t-button>
    <t-button block variant="dashed">虚框按钮</t-button>
    <t-button block variant="text">文字按钮</t-button>
  </t-space>
</template>

<style lang="less" scoped>
.t-button {
  min-width: 320px;
  max-width: 640px;
}
</style>
