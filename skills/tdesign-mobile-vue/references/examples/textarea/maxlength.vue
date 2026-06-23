<!--
  TDesign TDesign Mobile Vue 示例：textarea - maxlength
  覆盖组件：Textarea
  来源：组件库源码 src/textarea/demos/maxlength.vue
-->

<template>
  <t-textarea v-model="value" name="标签文字" label="标签文字" placeholder="请输入文字" :maxlength="500" indicator />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
