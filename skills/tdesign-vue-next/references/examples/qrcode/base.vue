<!--
  TDesign TDesign Vue Next 示例：qrcode - base
  覆盖组件：Qrcode
  来源：组件库源码 packages/components/qrcode/_example/base.vue
-->

<template>
  <div style="width: 100%">
    <t-space direction="vertical" align="center">
      <t-qrcode :value="text || '-'" />
      <t-input v-model="text" placeholder="-" />
    </t-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('https://tdesign.tencent.com/');
</script>
