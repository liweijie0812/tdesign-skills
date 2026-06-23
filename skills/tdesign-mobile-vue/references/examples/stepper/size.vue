<!--
  TDesign TDesign Mobile Vue 示例：stepper - size
  覆盖组件：Stepper
  来源：组件库源码 src/stepper/demos/size.vue
-->

<template>
  <div class="stepper-example">
    <t-stepper v-model="value" size="large" theme="filled" @change="handleChange" />
    <t-stepper default-value="3" :max="99" theme="filled" />
    <t-stepper default-value="3" size="small" theme="filled" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(3);

const handleChange = ($event: number) => {
  console.log(`change to ${$event}`);
};
</script>

<style lang="less">
.stepper-example {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  background-color: var(--bg-color-demo, #fff);
}
</style>
