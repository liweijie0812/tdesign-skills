<!--
  TDesign TDesign Vue Next 示例：watermark - image
  覆盖组件：Watermark
  来源：组件库源码 packages/components/watermark/_example/image.vue
-->

<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/site/logo-watermark.svg',
    }"
    :width="104"
    :height="65.5"
    :x="90"
    :y="100"
    :rotate="0"
    :removable="false"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
