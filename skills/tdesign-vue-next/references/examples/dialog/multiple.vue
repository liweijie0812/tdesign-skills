<!--
  TDesign TDesign Vue Next 示例：dialog - multiple
  覆盖组件：Dialog
  来源：组件库源码 packages/components/dialog/_example/multiple.vue
-->

<template>
  <t-space>
    <t-button theme="primary" @click="showDialog">plugin打开多个dialog</t-button>
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DialogPlugin } from 'tdesign-vue-next';
import type { ButtonProps } from 'tdesign-vue-next';

const count = ref(0);
const showDialog: ButtonProps['onClick'] = () => {
  count.value += 1;
  const confirmDia = DialogPlugin.confirm({
    header: 'use ESC to close each dialog',
    body: `current dialog count: ${count.value}`,
    confirmBtn: 'more dialog',
    cancelBtn: 'cancel',
    onConfirm: ({ e }) => {
      console.log(e);
      showDialog();
    },
    onClose: ({ e, trigger }) => {
      console.log('e: ', e);
      console.log('trigger: ', trigger);
      count.value -= 1;
      confirmDia.hide();
    },
  });
};
</script>
