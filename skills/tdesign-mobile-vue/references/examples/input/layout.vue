<!--
  TDesign TDesign Mobile Vue 示例：input - layout
  覆盖组件：Input
  来源：组件库源码 src/input/demos/layout.vue
-->

<template>
  <t-input label="标签文字" layout="vertical" placeholder="请输入文字">
    <template #suffixIcon>
      <error-circle-filled-icon />
    </template>
  </t-input>
</template>

<script lang="ts" setup>
import { ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
</script>
