<!--
  TDesign TDesign Vue Next 示例：swiper - base
  覆盖组件：Swiper
  来源：组件库源码 packages/components/swiper/_example/base.vue
-->

<template>
  <t-swiper class="tdesign-demo-block--swiper" :duration="300" :interval="2000">
    <t-swiper-item v-for="item in 6" :key="item">
      <div class="demo-item">{{ item }}</div>
    </t-swiper-item>
  </t-swiper>
</template>
