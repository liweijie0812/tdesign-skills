<!--
  TDesign TDesign Vue Next 示例：input - password
  覆盖组件：Input
  来源：组件库源码 packages/components/input/_example/password.vue
-->

<template>
  <t-space direction="vertical">
    <t-input type="password" default-value="520 TDesign">
      <template #prefix-icon>
        <lock-on-icon />
      </template>
    </t-input>
    <!-- 使用 function 的形式定义 icon -->
    <t-input type="password" default-value="520 TDesign" :prefix-icon="renderPrefixIcon" />
  </t-space>
</template>
<script lang="tsx" setup>
import { LockOnIcon } from 'tdesign-icons-vue-next';
import type { InputProps } from 'tdesign-vue-next';

const renderPrefixIcon: InputProps['prefixIcon'] = () => <LockOnIcon />;
</script>
