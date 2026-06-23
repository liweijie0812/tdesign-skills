<!--
  TDesign TDesign Vue 2 示例：input - clearable
  覆盖组件：Input
  来源：组件库源码 src/input/_example/clearable.vue
-->

<template>
  <t-input clearable v-model="value" placeholder="请输入" @clear="onClear" style="max-width: 500px" />
</template>

<script>
export default {
  data() {
    return {
      value: 'Hello TDesign',
    };
  },
  methods: {
    onClear() {
      console.log('clear');
    },
  },
};
</script>
