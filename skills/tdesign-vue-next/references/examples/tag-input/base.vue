<!--
  TDesign TDesign Vue Next 示例：tag-input - base
  覆盖组件：Tag-input
  来源：组件库源码 packages/components/tag-input/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" @focus="onFocus" @blur="onBlur" />

    <t-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

    <t-tag-input :default-value="tags3" label="UnControlled: " clearable />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TagInputProps } from 'tdesign-vue-next';

const tags1 = ref(['Vue', 'React']);
const tags2 = ref<TagInputProps['value']>(['Vue', 'React']);
const tags3 = ref<TagInputProps['defaultValue']>(['Vue', 'React']);
const onTagInputEnter: TagInputProps['onEnter'] = (val, context) => {
  console.log(val, context);
};
const onChange: TagInputProps['onChange'] = (val, context) => {
  console.log(val, context);
  tags2.value = val;
};
const onPaste: TagInputProps['onPaste'] = (context) => {
  console.log(context);
};
const onFocus: TagInputProps['onFocus'] = (val, ctx) => {
  console.log('focus:', val, ctx);
};
const onBlur: TagInputProps['onBlur'] = (val, ctx) => {
  console.log('blur:', val, ctx);
};
</script>
