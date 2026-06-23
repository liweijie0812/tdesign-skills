<!--
  TDesign TDesign Vue Next 示例：slider - input-number-vertical
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/input-number-vertical.vue
-->

<template>
  <t-space>
    <div class="number-vertical-block">
      <t-slider v-model="value1" :layout="layout" :show-tooltip="true" :input-number-props="inputNumberProps" />
    </div>

    <div class="number-vertical-block">
      <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" :input-number-props="inputNumberProps" />
    </div>
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SliderProps } from 'tdesign-vue-next';

const value1 = ref(12);
const value2 = ref([30, 70]);
const inputNumberProps: SliderProps['inputNumberProps'] = {
  theme: 'column',
};
const layout: SliderProps['layout'] = 'vertical';
</script>
<style>
.number-vertical-block {
  display: inline-block;
  padding: 30px 24px;
  height: 300px;
}
</style>
