<!--
  TDesign TDesign Vue 2 示例：input-number - empty
  覆盖组件：Input-number
  来源：组件库源码 src/input-number/_example/empty.vue
-->

<template>
  <div>
    <t-input-number v-model="value" placeholder="输入"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
    };
  },
};
</script>
