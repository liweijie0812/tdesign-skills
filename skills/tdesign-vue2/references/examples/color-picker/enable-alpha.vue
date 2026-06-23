<!--
  TDesign TDesign Vue 2 示例：color-picker - enable-alpha
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/enable-alpha.vue
-->

<template>
  <t-color-picker-panel v-model="color" format="RGBA" :enable-alpha="true" @change="handleChange" />
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
