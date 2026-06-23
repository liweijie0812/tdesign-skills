<!--
  TDesign TDesign Vue Next 示例：image-viewer - button
  覆盖组件：Image-viewer
  来源：组件库源码 packages/components/image-viewer/_example/button.vue
-->

<template>
  <div>
    <t-image-viewer
      v-model:visible="visible"
      :trigger="trigger"
      :images="['https://tdesign.gtimg.com/demo/demo-image-1.png']"
      :z-index="10000"
    >
    </t-image-viewer>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import type { ImageViewerProps } from 'tdesign-vue-next';

const visible = ref(false);
const trigger: ImageViewerProps['trigger'] = (
  h,
  {
    open,
  }: {
    open: () => void;
  },
) => <t-button onClick={open}>预览单张图片</t-button>;
</script>
