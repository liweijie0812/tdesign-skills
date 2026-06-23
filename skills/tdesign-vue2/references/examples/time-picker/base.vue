<!--
  TDesign TDesign Vue 2 示例：time-picker - base
  覆盖组件：Time-picker
  来源：组件库源码 src/time-picker/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-time-picker v-model="time1"> </t-time-picker>
    <t-time-picker v-model="time2"> </t-time-picker>
  </t-space>
</template>

<script>
export default {
  name: 'timePickerBase',
  data() {
    return {
      time1: '20:22',
      time2: '21:22',
    };
  },
};
</script>
