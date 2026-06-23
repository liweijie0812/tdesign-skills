<!--
  TDesign TDesign Vue 2 示例：watermark - layout
  覆盖组件：Watermark
  来源：组件库源码 src/watermark/_example/layout.vue
-->

<template>
  <div>
    <h3>横平竖直的水印</h3>
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

    <h3>错位的水印</h3>
    <t-watermark
      :watermark-content="{
        text: '文字水印',
      }"
      :width="120"
      :height="60"
      :y="120"
      :x="80"
      layout="hexagonal"
    >
      <div style="height: 300px" />
    </t-watermark>
  </div>
</template>
