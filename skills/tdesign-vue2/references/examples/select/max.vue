<!--
  TDesign TDesign Vue 2 示例：select - max
  覆盖组件：Select
  来源：组件库源码 src/select/_example/max.vue
-->

<template>
  <t-select v-model="value" placeholder="-请选择-" multiple :max="2" :options="options" style="width: 200px" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3' },
      ],
      value: [],
    };
  },
};
</script>
