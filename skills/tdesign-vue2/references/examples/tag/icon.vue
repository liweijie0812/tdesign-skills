<!--
  TDesign TDesign Vue 2 示例：tag - icon
  覆盖组件：Tag
  来源：组件库源码 src/tag/_example/icon.vue
-->

<template>
  <t-space>
    <t-tag :icon="renderDiscountIcon">函数图标</t-tag>

    <t-tag>
      <template #icon>
        <discount-icon />
      </template>
      插槽图标
    </t-tag>
  </t-space>
</template>

<script lang="jsx">
import { DiscountIcon } from 'tdesign-icons-vue';

export default {
  components: { DiscountIcon },
  methods: {
    renderDiscountIcon() {
      return <DiscountIcon />;
    },
  },
};
</script>
