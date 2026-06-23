<!--
  TDesign TDesign Vue Next 示例：input-adornment - select
  覆盖组件：Input-adornment
  来源：组件库源码 packages/components/input-adornment/_example/select.vue
-->

<template>
  <t-space class="adornment-select" direction="vertical">
    <t-input-adornment :prepend="protocolSelect">
      <t-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment :append="tldSelect">
      <t-tag-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment :prepend="protocolSelect" :append="tldSelect">
      <t-select
        :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))"
        default-value="tencent"
      />
    </t-input-adornment>
  </t-space>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import type { InputAdornmentProps } from 'tdesign-vue-next';

const protocolSelect = ref<InputAdornmentProps['prepend']>(() => (
  <t-select
    autoWidth
    options={['http://', 'https://'].map((value) => ({
      label: value,
      value,
    }))}
    defaultValue="http://"
  />
));
const tldSelect = ref<InputAdornmentProps['append']>(() => (
  <t-select
    autoWidth
    options={['.com', '.cn', '.net', '.org'].map((value) => ({
      label: value,
      value,
    }))}
    defaultValue=".cn"
  />
));
</script>
