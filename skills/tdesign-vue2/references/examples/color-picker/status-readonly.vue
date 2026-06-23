<!--
  TDesign TDesign Vue 2 示例：color-picker - status-readonly
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/status-readonly.vue
-->

<template>
  <t-color-picker-panel v-model="color" disabled />
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
    };
  },
};
</script>
