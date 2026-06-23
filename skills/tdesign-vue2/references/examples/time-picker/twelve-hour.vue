<!--
  TDesign TDesign Vue 2 示例：time-picker - twelve-hour
  覆盖组件：Time-picker
  来源：组件库源码 src/time-picker/_example/twelve-hour.vue
-->

<template>
  <t-time-picker v-model="value" format="hh:mm:ss a" :hideDisabledTime="false" />
</template>

<script>
export default {
  name: 'twelveHours',
  data() {
    return {
      value: '10:20:30 am',
    };
  },
};
</script>
