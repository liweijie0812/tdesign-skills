<!--
  TDesign TDesign Vue Next 示例：tag-input - max
  覆盖组件：Tag-input
  来源：组件库源码 packages/components/tag-input/_example/max.vue
-->

<template>
  <t-tag-input v-model="tags" placeholder="最多只能输入 3 个标签" :max="3" @enter="onEnter" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import type { TagInputProps } from 'tdesign-vue-next';

const tags = ref([]);
const onEnter: TagInputProps['onEnter'] = (value, { inputValue }) => {
  if (value.length >= 3 && inputValue) {
    MessagePlugin.warning('最多只能输入 3 个标签!');
  }
};
</script>
