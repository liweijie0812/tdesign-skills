<!--
  TDesign TDesign Mobile Vue 示例：overlay - base
  覆盖组件：Overlay
  来源：组件库源码 src/overlay/demos/base.vue
-->

<template>
  <t-button size="large" block variant="outline" theme="primary" @click="visible = true">基础用法</t-button>
  <t-overlay :visible="visible" @click="visible = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
