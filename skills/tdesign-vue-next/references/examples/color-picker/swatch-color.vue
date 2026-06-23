<!--
  TDesign TDesign Vue Next 示例：color-picker - swatch-color
  覆盖组件：Color-picker
  来源：组件库源码 packages/components/color-picker/_example/swatch-color.vue
-->

<template>
  <t-space>
    <t-space direction="vertical" size="small">
      <p>自定义系统色</p>
      <t-color-picker-panel v-model="color" :swatch-colors="systemColors" />
    </t-space>

    <t-space direction="vertical" size="small">
      <p>完全不显示系统色</p>
      <t-color-picker-panel v-model="color" :swatch-colors="null" />
    </t-space>
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { ColorPickerPanelProps } from 'tdesign-vue-next';

const color = ref('#0052d9');
const systemColors = ref<ColorPickerPanelProps['swatchColors']>(['red', 'green', 'yellow', 'blue', 'purple']);
</script>
<style scoped>
p {
  font-size: 12px;
}
</style>
