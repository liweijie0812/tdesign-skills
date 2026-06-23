<!--
  TDesign TDesign Vue 2 示例：input - addon
  覆盖组件：Input
  来源：组件库源码 src/input/_example/addon.vue
-->

<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="请输入内容" />
    </t-input-adornment>
  </t-space>
</template>
