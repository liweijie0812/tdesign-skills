<!--
  TDesign TDesign Vue 2 示例：switch - size
  覆盖组件：Switch
  来源：组件库源码 src/switch/_example/size.vue
-->

<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked"></t-switch>
    <t-switch size="medium"></t-switch>
    <t-switch size="small"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
