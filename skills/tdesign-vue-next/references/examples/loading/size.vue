<!--
  TDesign TDesign Vue Next 示例：loading - size
  覆盖组件：Loading
  来源：组件库源码 packages/components/loading/_example/size.vue
-->

<template>
  <t-space direction="vertical" size="large">
    <t-loading size="small" text="加载中(小)..."></t-loading>

    <t-loading size="26px" text="加载中(26px)..."></t-loading>

    <t-loading size="medium" text="加载中(中)..."></t-loading>

    <t-loading style="font-size: 46px" text="加载中(自定义样式)..."></t-loading>

    <t-loading size="large" text="加载中(大)..."></t-loading>
  </t-space>
</template>
