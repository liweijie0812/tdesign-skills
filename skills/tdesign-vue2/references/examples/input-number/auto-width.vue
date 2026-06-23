<!--
  TDesign TDesign Vue 2 示例：input-number - auto-width
  覆盖组件：Input-number
  来源：组件库源码 src/input-number/_example/auto-width.vue
-->

<template>
  <div>
    <t-input-number v-model="value" :min="0" :autoWidth="true"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
</script>
