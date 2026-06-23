<!--
  TDesign TDesign Vue 2 示例：color-picker - status-disabled
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/status-disabled.vue
-->

<template>
  <t-color-picker v-model="color" disabled />
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  },
};
</script>
