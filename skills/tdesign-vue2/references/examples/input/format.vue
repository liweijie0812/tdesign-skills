<!--
  TDesign TDesign Vue 2 示例：input - format
  覆盖组件：Input
  来源：组件库源码 src/input/_example/format.vue
-->

<template>
  <t-input
    v-model="input"
    :status="inputStatus"
    :format="format"
    placeholder="请输入数字"
    :tips="tips"
    style="max-width: 500px"
  />
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  computed: {
    inputStatus() {
      if (isNaN(+this.input)) {
        return 'error';
      }
      return '';
    },
    tips() {
      if (!this.inputStatus) {
        return '';
      }
      return '请输入数字';
    },
  },
  methods: {
    format(val) {
      const reg = /(\d)(?=(?:\d{3})+$)/g;
      const str = val.replace(reg, '$1,');
      return str;
    },
  },
};
</script>
