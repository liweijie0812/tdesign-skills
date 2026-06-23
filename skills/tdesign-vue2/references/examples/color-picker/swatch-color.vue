<!--
  TDesign TDesign Vue 2 示例：color-picker - swatch-color
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/swatch-color.vue
-->

<template>
  <t-space>
    <t-space direction="vertical" size="10px">
      <h6>自定义系统色</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="systemColors" />
    </t-space>
    <t-space direction="vertical" size="10px">
      <h6>完全不显示系统色</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="null" />
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
      systemColors: ['red', 'green', 'yellow', 'blue', 'purple'],
    };
  },
};
</script>
