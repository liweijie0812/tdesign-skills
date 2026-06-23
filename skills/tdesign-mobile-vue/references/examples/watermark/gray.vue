<!--
  TDesign TDesign Mobile Vue 示例：watermark - gray
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/demos/gray.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
      isGrayscale: true,
    }"
    :x="56"
    :y="76"
    :width="120"
    :height="20"
    :alpha="0.3"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
