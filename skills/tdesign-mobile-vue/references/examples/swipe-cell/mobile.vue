<!--
  TDesign TDesign Mobile Vue 示例：swipe-cell - mobile
  覆盖组件：Swipe-cell
  来源：组件库源码 src/swipe-cell/demos/mobile.vue
-->

<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Swipecell 滑动操作</h1>
    <p class="summary">用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。</p>
    <left />
    <right />
    <double />
    <icon />
    <event />
  </div>
</template>

<script setup lang="ts">
import left from './left.vue';
import right from './right.vue';
import double from './double.vue';
import icon from './icon.vue';
import event from './event.vue';
</script>
