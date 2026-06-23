<!--
  TDesign TDesign Vue Next 示例：date-picker - custom-icon
  覆盖组件：Date-picker
  来源：组件库源码 packages/components/date-picker/_example/custom-icon.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-picker>
    <t-date-range-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-range-picker>
  </t-space>
</template>

<script lang="tsx" setup>
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import type { DateRangePickerProps } from 'tdesign-vue-next';

const renderPrefixIcon: DateRangePickerProps['prefixIcon'] = () => <BrowseIcon />;
</script>
