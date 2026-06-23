<!--
  TDesign TDesign Mobile Vue 示例：watermark - image
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/demos/image.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
    }"
    :width="120"
    :height="20"
    :x="56"
    :y="76"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
