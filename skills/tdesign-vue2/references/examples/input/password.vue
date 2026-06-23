<!--
  TDesign TDesign Vue 2 示例：input - password
  覆盖组件：Input
  来源：组件库源码 src/input/_example/password.vue
-->

<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input type="password" default-value="520 TDesign">
      <lock-on-icon slot="prefix-icon"></lock-on-icon>
    </t-input>
    <!-- 使用 function 的形式定义 icon -->
    <t-input type="password" default-value="520 TDesign" :prefix-icon="renderPrefixIcon" />
  </t-space>
</template>
<script lang="jsx">
import { LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  methods: {
    renderPrefixIcon() {
      return <LockOnIcon></LockOnIcon>;
    },
  },
};
</script>
