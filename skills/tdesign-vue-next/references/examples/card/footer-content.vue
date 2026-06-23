<!--
  TDesign TDesign Vue Next 示例：card - footer-content
  覆盖组件：Card
  来源：组件库源码 packages/components/card/_example/footer-content.vue
-->

<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="标题" content="卡片内容" />
    </template>
  </t-card>
</template>
<script lang="tsx" setup>
import type { CardProps } from 'tdesign-vue-next';

const cover: CardProps['cover'] = 'https://tdesign.gtimg.com/site/source/card-demo.png';
</script>
