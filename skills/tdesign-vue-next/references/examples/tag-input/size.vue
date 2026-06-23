<!--
  TDesign TDesign Vue Next 示例：tag-input - size
  覆盖组件：Tag-input
  来源：组件库源码 packages/components/tag-input/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags1" size="small" clearable />

    <t-tag-input v-model="tags2" clearable />

    <t-tag-input v-model="tags3" size="large" clearable />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tags1 = ref(['Vue', 'React']);
const tags2 = ref(['Vue', 'React']);
const tags3 = ref(['Vue', 'React']);
</script>
