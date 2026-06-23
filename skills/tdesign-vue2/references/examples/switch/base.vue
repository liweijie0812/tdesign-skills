<!--
  TDesign TDesign Vue 2 示例：switch - base
  覆盖组件：Switch
  来源：组件库源码 src/switch/_example/base.vue
-->

<template>
  <t-space>
    <t-switch size="large"></t-switch>
    <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
</script>
