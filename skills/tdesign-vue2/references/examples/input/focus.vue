<!--
  TDesign TDesign Vue 2 示例：input - focus
  覆盖组件：Input
  来源：组件库源码 src/input/_example/focus.vue
-->

<template>
  <t-input placeholder="请输入内容" @focus="onFocus" style="max-width: 500px" />
</template>
<script>
export default {
  methods: {
    onFocus() {
      console.log('focused');
    },
  },
};
</script>
