<!--
  TDesign TDesign Vue 2 示例：time-picker - format
  覆盖组件：Time-picker
  来源：组件库源码 src/time-picker/_example/format.vue
-->

<template>
  <t-time-picker v-model="time" format="h:m:s a" />
</template>

<script>
export default {
  name: 'format',
  data() {
    return {
      time: '00:00:00 am',
    };
  },
};
</script>
