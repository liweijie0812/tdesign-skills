<!--
  TDesign TDesign Vue 2 示例：skeleton - animation
  覆盖组件：Skeleton
  来源：组件库源码 src/skeleton/_example/animation.vue
-->

<template>
  <t-row class="t-skeleton-demo">
    <t-col v-for="(animation, index) in animations" :key="`animation-${index}`">
      <section class="t-skeleton-demo-card">
        <div class="header">
          {{ animation.label }}
        </div>
        <div class="content">
          <t-skeleton :animation="animation.value"></t-skeleton>
        </div>
      </section>
    </t-col>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      animations: [
        { label: '渐变加载动画', value: 'gradient' },
        { label: '闪烁加载动画', value: 'flashed' },
      ],
    };
  },
};
</script>
