<!--
  TDesign TDesign Vue 2 示例：config-provider - input
  覆盖组件：Config-provider
  来源：组件库源码 src/config-provider/_example/input.vue
-->

<template>
  <t-config-provider :globalConfig="globalConfig">
    <t-input type="password" default-value="520 TDesign" />
  </t-config-provider>
</template>

<script>
import { LockOnIcon, LockOffIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      globalConfig: {
        icon: {
          BrowseOffIcon: LockOnIcon,
          BrowseIcon: LockOffIcon,
        },
      },
    };
  },
};
</script>
