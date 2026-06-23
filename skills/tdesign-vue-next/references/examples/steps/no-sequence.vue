<!--
  TDesign TDesign Vue Next 示例：steps - no-sequence
  覆盖组件：Steps
  来源：组件库源码 packages/components/steps/_example/no-sequence.vue
-->

<template>
  <t-steps theme="dot" :current="current" readonly>
    <t-step-item title="已完成的步骤" content="这里是提示文字" />
    <t-step-item title="进行中的步骤" content="这里是提示文字" />
    <t-step-item title="未进行的步骤" content="这里是提示文字" />
    <t-step-item title="未进行的步骤" content="这里是提示文字" />
  </t-steps>
</template>

<script lang="ts" setup>
import type { StepsProps } from 'tdesign-vue-next';

const current: StepsProps['current'] = 1;
</script>
