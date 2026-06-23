<!--
  TDesign TDesign Vue Next 示例：tag - icon
  覆盖组件：Tag
  来源：组件库源码 packages/components/tag/_example/icon.vue
-->

<template>
  <t-space>
    <t-tag :icon="renderDiscountIcon">函数图标</t-tag>

    <t-tag>
      <template #icon>
        <t-icon name="discount" />
      </template>
      插槽图标
    </t-tag>
  </t-space>
</template>

<script lang="tsx" setup>
import type { TagProps } from 'tdesign-vue-next';

const renderDiscountIcon: TagProps['icon'] = () => {
  return <t-icon name="discount" />;
};
</script>
