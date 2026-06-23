<!--
  TDesign TDesign Vue Next 示例：range-input - popup
  覆盖组件：Range-input
  来源：组件库源码 packages/components/range-input/_example/popup.vue
-->

<template>
  <t-range-input-popup :panel="panel" />
</template>

<script lang="tsx" setup>
import type { RangeInputPopupProps } from 'tdesign-vue-next';

const panel: RangeInputPopupProps['panel'] = () => <div>hello world</div>;
</script>
