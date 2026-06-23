<!--
  TDesign TDesign Mobile Vue 示例：stepper - base
  覆盖组件：Stepper
  来源：组件库源码 src/stepper/demos/base.vue
-->

<template>
  <div class="stepper-example">
    <t-stepper v-model="integer" theme="filled" />
    <t-stepper v-model="decimal" theme="filled" :integer="false" :step="0.5" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const integer = ref(3);
const decimal = ref(3.5);
</script>

<style lang="less">
.stepper-example {
  padding: 16px;
  background-color: var(--bg-color-demo, #fff);
}
</style>
