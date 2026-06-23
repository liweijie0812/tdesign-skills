<!--
  TDesign TDesign Vue 2 示例：breadcrumb - dropdown
  覆盖组件：Breadcrumb
  来源：组件库源码 src/breadcrumb/_example/dropdown.vue
-->

<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumb-item>页面1</t-breadcrumb-item>
    <t-breadcrumb-item>页面2 <chevron-down-icon name="chevron-down" /></t-breadcrumb-item>
    <t-breadcrumb-item>页面3</t-breadcrumb-item>
  </t-breadcrumb>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
};
</script>
