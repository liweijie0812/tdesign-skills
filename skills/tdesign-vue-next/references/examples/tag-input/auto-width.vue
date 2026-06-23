<!--
  TDesign TDesign Vue Next 示例：tag-input - auto-width
  覆盖组件：Tag-input
  来源：组件库源码 packages/components/tag-input/_example/auto-width.vue
-->

<template>
  <t-space direction="vertical">
    <!-- 宽度自适应场景下，如果存在 suffix，则需要设置右边距，否则清除图标会覆盖住标签 -->
    <t-tag-input v-model="tags" auto-width clearable />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tags = ref(['Vue', 'React']);
</script>
