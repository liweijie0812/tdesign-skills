<!--
  TDesign TDesign Vue Next 示例：textarea - events
  覆盖组件：Textarea
  来源：组件库源码 packages/components/textarea/_example/events.vue
-->

<template>
  <t-textarea
    v-model="value"
    placeholder="请输入"
    @keypress="onKeypress"
    @keydown="onKeydown"
    @keyup="onKeyup"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { TextareaProps } from 'tdesign-vue-next';

const value = ref('');
const onKeypress: TextareaProps['onKeypress'] = (value, e) => {
  console.log('onKeypress: ', value, e);
};
const onKeydown: TextareaProps['onKeydown'] = (value, e) => {
  console.log('onKeydown: ', value, e);
};
const onKeyup: TextareaProps['onKeyup'] = (value, e) => {
  console.log('onKeyup: ', value, e);
};
const onFocus: TextareaProps['onFocus'] = (value, e) => {
  console.log('onFocus: ', value, e);
};
const onBlur: TextareaProps['onBlur'] = (value, e) => {
  console.log('onBlur: ', value, e);
};
</script>
