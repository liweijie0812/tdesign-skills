<!--
  TDesign TDesign Vue Next 示例：transfer - search
  覆盖组件：Transfer
  来源：组件库源码 packages/components/transfer/_example/search.vue
-->

<template>
  <t-transfer v-model="targetValue" theme="primary" :data="list" :search="true" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { TransferProps } from 'tdesign-vue-next';

const list: TransferProps['data'] = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: `内容${i + 1}`,
  });
}
const targetValue = ref([]);
</script>
