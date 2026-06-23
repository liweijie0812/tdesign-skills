<!--
  TDesign TDesign Mobile Vue 示例：input - prefix
  覆盖组件：Input
  来源：组件库源码 src/input/demos/prefix.vue
-->

<template>
  <t-input label="标签文字" placeholder="请输入文字">
    <template #prefixIcon>
      <app-icon />
    </template>
  </t-input>
  <t-input placeholder="请输入文字">
    <template #prefixIcon>
      <app-icon />
    </template>
  </t-input>
</template>

<script lang="ts" setup>
import { AppIcon } from 'tdesign-icons-vue-next';
</script>
