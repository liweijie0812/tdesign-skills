<!--
  TDesign TDesign Vue Next 示例：empty - descriptions
  覆盖组件：Empty
  来源：组件库源码 packages/components/empty/_example/descriptions.vue
-->

<template>
  <t-empty :description="description" :title="title"> </t-empty>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('空状态 Empty');
const description = ref('暂无数据 Description');
</script>
