<!--
  TDesign TDesign Vue Next 示例：steps - vertical-no-sequence
  覆盖组件：Steps
  来源：组件库源码 packages/components/steps/_example/vertical-no-sequence.vue
-->

<template>
  <div class="setps-demo">
    <div class="tdesign-demo-block">
      <t-steps layout="vertical" theme="dot" :current="1" readonly>
        <t-step-item title="已完成的步骤" content="这里是提示文字" />
        <t-step-item title="进行中的步骤" content="这里是提示文字" />
        <t-step-item title="未进行的步骤" content="这里是提示文字" />
        <t-step-item title="未进行的步骤" content="这里是提示文字" />
      </t-steps>
      <t-steps layout="vertical" sequence="reverse" theme="dot" :current="1" readonly>
        <t-step-item title="已完成的步骤" content="这里是提示文字" />
        <t-step-item title="已完成的步骤" content="这里是提示文字" />
        <t-step-item title="进行中的步骤" content="这里是提示文字" />
        <t-step-item title="未进行的步骤" content="这里是提示文字" />
      </t-steps>
    </div>
  </div>
</template>

<style scoped>
.setps-demo .tdesign-demo-block {
  display: flex;
  justify-content: space-around;
}
</style>
