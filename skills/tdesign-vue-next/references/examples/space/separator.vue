<!--
  TDesign TDesign Vue Next 示例：space - separator
  覆盖组件：Space
  来源：组件库源码 packages/components/space/_example/separator.vue
-->

<template>
  <t-space align="center">
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
    <template #separator>
      <t-divider layout="vertical" />
    </template>
  </t-space>

  <t-space align="center" :separator="separator">
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
    <template #separator>
      <t-divider layout="vertical" />
    </template>
  </t-space>
</template>

<script lang="tsx" setup>
import type { SpaceProps } from 'tdesign-vue-next';

const separator: SpaceProps['separator'] = () => <t-divider layout="vertical" />;
</script>
