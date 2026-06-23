<!--
  TDesign TDesign Vue Next 示例：alert - operation
  覆盖组件：Alert
  来源：组件库源码 packages/components/alert/_example/operation.vue
-->

<template>
  <t-space style="width: 100%">
    <t-alert theme="info" message="这是一条普通的消息提示" close-btn>
      <template #operation>
        <span @click="handleOperation">相关操作</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script lang="tsx" setup>
const handleOperation = () => {
  alert('operation clicked');
};
</script>
