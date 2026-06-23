<!--
  TDesign TDesign Mobile Vue 示例：watermark - movingImage
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/demos/movingImage.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
    }"
    movable
    :width="158"
    :height="22"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
