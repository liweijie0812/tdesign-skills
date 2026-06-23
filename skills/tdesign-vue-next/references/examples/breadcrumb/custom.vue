<!--
  TDesign TDesign Vue Next 示例：breadcrumb - custom
  覆盖组件：Breadcrumb
  来源：组件库源码 packages/components/breadcrumb/_example/custom.vue
-->

<template>
  <t-breadcrumb>
    <template #default>
      <t-breadcrumb-item>页面1</t-breadcrumb-item>
      <t-breadcrumb-item>页面2</t-breadcrumb-item>
      <t-breadcrumb-item>页面3</t-breadcrumb-item>
    </template>
    <template #separator>
      <ArrowRightIcon />
    </template>
  </t-breadcrumb>
</template>

<script setup>
import { ArrowRightIcon } from 'tdesign-icons-vue-next';
</script>
