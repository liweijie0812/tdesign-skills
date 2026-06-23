<!--
  TDesign TDesign Vue Next 示例：typography - copyable
  覆盖组件：Typography
  来源：组件库源码 packages/components/typography/_example/copyable.vue
-->

<template>
  <div style="width: 100%">
    <t-typography-text copyable>This is a copyable text.</t-typography-text>
    <br />
    <t-typography-text
      :copyable="{
        tooltipProps: {
          content: 'click to copy the text',
        },
      }"
      >This is a copyable text.</t-typography-text
    >
    <br />
    <t-typography-text :copyable="copyableConfig">This is a copyable text.</t-typography-text>
  </div>
</template>

<script setup lang="tsx">
import { SmileIcon } from 'tdesign-icons-vue-next';

const copyableConfig = {
  suffix: <SmileIcon />,
  tooltipProps: {
    content: 'click to copy the text',
  },
};
</script>

<style scoped></style>
