<!--
  TDesign TDesign Vue Next 示例：transfer - custom-render
  覆盖组件：Transfer
  来源：组件库源码 packages/components/transfer/_example/custom-render.vue
-->

<template>
  <t-transfer
    v-model="targetValue"
    theme="primary"
    :data="list"
    :checked-value="checkedValue"
    :transfer-item="transferItem"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import type { TransferProps } from 'tdesign-vue-next';

const list: TransferProps['data'] = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: `内容${i + 1}`,
    description: `第${i + 1}段信息`,
  });
}
const targetValue = ref([]);
const checkedValue = ref([]);
const transferItem: TransferProps['transferItem'] = (h, { data, index, type }) => {
  const sourceLabel = (
    <span class="transfer-item">
      {data.label} - {data.description}
    </span>
  );
  const targetLabel = (
    <span class="transfer-item">
      {index} - {data.label}
    </span>
  );
  return type === 'source' ? sourceLabel : targetLabel;
};
</script>
