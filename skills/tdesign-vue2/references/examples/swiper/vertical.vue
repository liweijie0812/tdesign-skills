<!--
  TDesign TDesign Vue 2 示例：swiper - vertical
  覆盖组件：Swiper
  来源：组件库源码 src/swiper/_example/vertical.vue
-->

<template>
  <div class="tdesign-demo-block--swiper">
    <t-swiper direction="vertical" :navigation="{ showSlideBtn: 'never' }" :height="280" :autoplay="false">
      <t-swiper-item>
        <div class="demo-item">1</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">2</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">3</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">4</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">5</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">6</div>
      </t-swiper-item>
    </t-swiper>
  </div>
</template>
