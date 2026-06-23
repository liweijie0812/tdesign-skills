<!--
  TDesign TDesign Vue Next 示例：input-number - normal
  覆盖组件：Input-number
  来源：组件库源码 packages/components/input-number/_example/normal.vue
-->

<template>
  <t-space direction="vertical">
    <t-input-number v-model="value" theme="normal" :max="15" :min="0"></t-input-number>

    <t-input-number v-model="value" theme="normal" align="right">
      <template #label><span>金额：</span></template>
      <template #suffix><span>元</span></template>
    </t-input-number>

    <t-input-number v-model="value" theme="normal" align="right" label="机器：" suffix="台"></t-input-number>
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(3);
</script>
