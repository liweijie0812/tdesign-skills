<!--
  TDesign TDesign Vue Next 示例：slider - min-and-max
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/min-and-max.vue
-->

<template>
  <t-space class="slider-demo-container" direction="vertical">
    <t-slider v-model="value1" :show-tooltip="true" :max="max" :min="min" :marks="marks" :input-number-props="false" />

    <t-slider
      v-model="value2"
      range
      :show-tooltip="true"
      :max="max"
      :min="min"
      :marks="marks"
      :input-number-props="false"
    />
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SliderProps } from 'tdesign-vue-next';

const value1 = ref(12);
const value2 = ref([12, 20]);
const min: SliderProps['min'] = 10;
const max: SliderProps['max'] = 30;
const marks: SliderProps['marks'] = {
  10: 'min:10',
  30: 'max:30',
};
</script>
<style>
.slider-demo-container {
  padding: 30px 24px;
}
</style>
