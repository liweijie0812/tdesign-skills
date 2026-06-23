<!--
  TDesign TDesign Mobile Vue 示例：stepper - min-max
  覆盖组件：Stepper
  来源：组件库源码 src/stepper/demos/min-max.vue
-->

<template>
  <div class="stepper-example">
    <t-stepper default-value="0" theme="filled" />
    <t-stepper
      v-model="number"
      theme="filled"
      :step="1"
      :min="0"
      :max="10"
      @overlimit="onOverlimit"
      @change="onChange"
      @blur="onBlur"
    />
    <t-stepper default-value="999" theme="filled" :max="999" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const number = ref(0);
const onChange = ($event: number) => {
  console.log(`change to ${$event}`);
};
const onBlur = ($event: number) => {
  console.log(`blur to ${$event}`);
};
const onOverlimit = ($type: string) => {
  console.log(`onOverlimit ${$type}`);
};
</script>

<style lang="less">
.stepper-example {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  background-color: var(--bg-color-demo, #fff);
}
</style>
