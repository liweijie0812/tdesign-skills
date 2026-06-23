<!--
  TDesign TDesign Vue Next 示例：switch - base
  覆盖组件：Switch
  来源：组件库源码 packages/components/switch/_example/base.vue
-->

<template>
  <t-space>
    <t-switch />
    <t-switch v-model="checked" @change="onChange" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { SwitchProps } from 'tdesign-vue-next';

const checked = ref(true);
const onChange: SwitchProps['onChange'] = (val) => {
  console.log(val);
};
</script>
