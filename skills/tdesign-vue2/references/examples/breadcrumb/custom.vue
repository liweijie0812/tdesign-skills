<!--
  TDesign TDesign Vue 2 示例：breadcrumb - custom
  覆盖组件：Breadcrumb
  来源：组件库源码 src/breadcrumb/_example/custom.vue
-->

<template>
  <t-breadcrumb>
    <template v-slot:default>
      <t-breadcrumb-item>页面1</t-breadcrumb-item>
      <t-breadcrumb-item>页面2</t-breadcrumb-item>
      <t-breadcrumb-item>页面3</t-breadcrumb-item>
    </template>
    <template v-slot:separator> <chevron-right-icon name="chevron-right" /> </template>
  </t-breadcrumb>
</template>
<script>
import { ChevronRightIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronRightIcon,
  },
};
</script>
