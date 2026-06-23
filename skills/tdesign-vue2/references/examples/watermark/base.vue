<!--
  TDesign TDesign Vue 2 示例：watermark - base
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/_example/base.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      text: '文字水印',
    }"
    :width="120"
    :height="60"
    :y="120"
    :x="80"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
