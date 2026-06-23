<!--
  TDesign TDesign Vue Next 示例：slider - base
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/base.vue
-->

<template>
  <t-space direction="vertical" class="slider-demo-container">
    <t-slider v-model="value1" @change-end="onChangeEnd" />

    <t-slider v-model="value2" range @change-end="onChangeEnd" />
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SliderProps } from 'tdesign-vue-next';

const value1 = ref(12);
const value2 = ref([30, 70]);
const onChangeEnd: SliderProps['onChangeEnd'] = (value) => {
  console.log('change end value', value);
};
</script>
<style>
.slider-demo-container {
  padding: 30px 24px;
}
</style>
