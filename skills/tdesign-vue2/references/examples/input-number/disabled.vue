<!--
  TDesign TDesign Vue 2 示例：input-number - disabled
  覆盖组件：Input-number
  来源：组件库源码 src/input-number/_example/disabled.vue
-->

<template>
  <div>
    <t-input-number v-model="value" :max="15" :min="-2" :disabled="true"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
  methods: {},
};
</script>
