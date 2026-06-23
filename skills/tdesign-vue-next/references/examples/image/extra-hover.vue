<!--
  TDesign TDesign Vue Next 示例：image - extra-hover
  覆盖组件：Image
  来源：组件库源码 packages/components/image/_example/extra-hover.vue
-->

<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :overlay-content="renderMask"
    overlay-trigger="hover"
  />
</template>

<script lang="tsx" setup>
import type { ImageProps } from 'tdesign-vue-next';

const renderMask: ImageProps['overlayContent'] = () => (
  <div
    style={{
      background: 'rgba(0,0,0,.4)',
      color: '#fff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    预览
  </div>
);
</script>
