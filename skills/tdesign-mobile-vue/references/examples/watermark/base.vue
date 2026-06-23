<!--
  TDesign TDesign Mobile Vue 示例：watermark - base
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/demos/base.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      text: '文字水印',
    }"
    :width="68"
    :height="52"
    :y="56"
    :x="56"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
