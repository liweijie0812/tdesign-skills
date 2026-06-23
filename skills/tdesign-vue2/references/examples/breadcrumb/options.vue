<!--
  TDesign TDesign Vue 2 示例：breadcrumb - options
  覆盖组件：Breadcrumb
  来源：组件库源码 src/breadcrumb/_example/options.vue
-->

<template>
  <t-breadcrumb :options="options"> </t-breadcrumb>
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      options: [{ content: '页面1' }, { content: '页面2' }, { content: '页面3', href: '//tdesign.tencent.com/' }],
    };
  },
};
</script>
