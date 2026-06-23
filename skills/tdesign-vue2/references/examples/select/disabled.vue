<!--
  TDesign TDesign Vue 2 示例：select - disabled
  覆盖组件：Select
  来源：组件库源码 src/select/_example/disabled.vue
-->

<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-请选择-"
      disabled
      filterable
      style="width: 200px; display: inline-block; margin-right: 20px"
      :options="options"
    />
    <t-select
      v-model="value2"
      placeholder="-请选择-"
      multiple
      disabled
      style="width: 200px; display: inline-block"
      :options="options"
    />
  </t-space>
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
      value2: ['1', '2'],
      value: '',
    };
  },
};
</script>
