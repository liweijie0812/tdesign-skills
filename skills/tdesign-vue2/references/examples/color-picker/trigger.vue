<!--
  TDesign TDesign Vue 2 示例：color-picker - trigger
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/trigger.vue
-->

<template>
  <t-color-picker v-model="color" />
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
