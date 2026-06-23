<!--
  TDesign TDesign Vue 2 示例：input-adornment - select
  覆盖组件：Input-adornment
  来源：组件库源码 src/input-adornment/_example/select.vue
-->

<template>
  <t-space direction="vertical" class="adornment-select" style="max-width: 500px">
    <t-input-adornment :prepend="protocolSelect">
      <t-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment :append="tldSelect">
      <t-tag-input placeholder="请输入内容" />
    </t-input-adornment>

    <t-input-adornment :prepend="protocolSelect" :append="tldSelect">
      <t-select
        :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))"
        defaultValue="tencent"
      />
    </t-input-adornment>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    protocolSelect() {
      return (
        <t-select
          autoWidth
          options={['http://', 'https://'].map((value) => ({ label: value, value }))}
          defaultValue="http://"
        />
      );
    },
    tldSelect() {
      return (
        <t-select
          autoWidth
          options={['.com', '.cn', '.net', '.org'].map((value) => ({ label: value, value }))}
          defaultValue=".cn"
        />
      );
    },
  },
};
</script>
