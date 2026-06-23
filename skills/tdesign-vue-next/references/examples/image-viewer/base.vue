<!--
  TDesign TDesign Vue Next 示例：image-viewer - base
  覆盖组件：Image-viewer
  来源：组件库源码 packages/components/image-viewer/_example/base.vue
-->

<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer :images="[img]" :z-index="10000"></t-image-viewer>
  </div>
</template>
<script lang="ts" setup>
const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
</script>
<style scoped>
.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
