<!--
  TDesign TDesign Vue Next 示例：dropdown - split
  覆盖组件：Dropdown
  来源：组件库源码 packages/components/dropdown/_example/split.vue
-->

<template>
  <t-space>
    <t-dropdown :options="options" :min-column-width="88">
      <t-button theme="default" variant="outline"> 下拉菜单 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script lang="ts" setup>
import type { DropdownProps } from 'tdesign-vue-next';

const options: DropdownProps['options'] = [
  {
    content: '操作一',
    value: 1,
  },
  {
    content: '操作二',
    value: 2,
  },
  {
    content: '操作三',
    value: 3,
    divider: true,
  },
  {
    content: '操作四',
    value: 4,
  },
];
</script>
