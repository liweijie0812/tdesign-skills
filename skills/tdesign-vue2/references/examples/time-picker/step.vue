<!--
  TDesign TDesign Vue 2 示例：time-picker - step
  覆盖组件：Time-picker
  来源：组件库源码 src/time-picker/_example/step.vue
-->

<template>
  <t-time-picker v-model="time1" :steps="[1, 2, 3]" />
</template>

<script>
export default {
  name: 'step',
  data() {
    return {
      time1: '09:18:17',
    };
  },
};
</script>
