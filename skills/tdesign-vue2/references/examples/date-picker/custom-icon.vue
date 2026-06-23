<!--
  TDesign TDesign Vue 2 示例：date-picker - custom-icon
  覆盖组件：Date-picker
  来源：组件库源码 src/date-picker/_example/custom-icon.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-picker>
  </t-space>
</template>

<script lang="jsx">
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  data() {
    return {
      renderPrefixIcon: () => <BrowseIcon />,
    };
  },
};
</script>
