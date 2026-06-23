<!--
  TDesign TDesign Vue Next 示例：swiper - placement
  覆盖组件：Swiper
  来源：组件库源码 packages/components/swiper/_example/placement.vue
-->

<template>
  <t-swiper class="tdesign-demo-block--swiper" :navigation="{ placement: 'outside' }">
    <t-swiper-item v-for="item in 6" :key="item">
      <div class="demo-item">{{ item }}</div>
    </t-swiper-item>
  </t-swiper>
</template>
