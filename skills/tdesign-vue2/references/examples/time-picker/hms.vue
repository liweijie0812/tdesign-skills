<!--
  TDesign TDesign Vue 2 示例：time-picker - hms
  覆盖组件：Time-picker
  来源：组件库源码 src/time-picker/_example/hms.vue
-->

<template>
  <t-time-picker v-model="value" @change="timechange" @open="open" @close="close" @pick="pick" />
</template>

<script>
export default {
  name: 'hms',
  data() {
    return {
      value: '12:20:30',
    };
  },
  methods: {
    timechange(time) {
      console.log(time);
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
    pick(v) {
      console.log(v);
    },
  },
};
</script>
