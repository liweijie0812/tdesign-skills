<!--
  TDesign TDesign Vue 2 示例：steps - no-sequence
  覆盖组件：Steps
  来源：组件库源码 src/steps/_example/no-sequence.vue
-->

<template>
  <t-steps theme="dot" :current="current" readonly>
    <t-step-item title="已完成的步骤" content="这里是提示文字"></t-step-item>
    <t-step-item title="进行中的步骤" content="这里是提示文字"></t-step-item>
    <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
    <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
  </t-steps>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
};
</script>
