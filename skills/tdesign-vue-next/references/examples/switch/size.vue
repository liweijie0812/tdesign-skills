<!--
  TDesign TDesign Vue Next 示例：switch - size
  覆盖组件：Switch
  来源：组件库源码 packages/components/switch/_example/size.vue
-->

<template>
  <t-space>
    <t-switch v-model="checked" size="large" />
    <t-switch size="medium" />
    <t-switch size="small" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
