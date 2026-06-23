<!--
  TDesign TDesign Vue 2 示例：space - separator
  覆盖组件：Space
  来源：组件库源码 src/space/_example/separator.vue
-->

<template>
  <t-space align="center" :separator="separator">
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
    <t-button variant="text">Text</t-button>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    separator() {
      return <t-divider layout="vertical" />;
    },
  },
};
</script>
