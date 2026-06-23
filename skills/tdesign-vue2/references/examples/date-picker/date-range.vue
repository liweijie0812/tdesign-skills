<!--
  TDesign TDesign Vue 2 示例：date-picker - date-range
  覆盖组件：Date-picker
  来源：组件库源码 src/date-picker/_example/date-range.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-range-picker allow-input clearable @pick="onPick" @change="onChange" />
    <t-date-range-picker enable-time-picker allow-input clearable @pick="onPick" @change="onChange" />
  </t-space>
</template>

<script>
export default {
  methods: {
    onPick(value, context) {
      console.log('onPick:', value, context);
    },
    onChange(value, context) {
      console.log('onChange:', value, context);
      console.log(
        'timestamp:',
        context.dayjsValue.map((d) => d.valueOf()),
      );
      console.log(
        'YYYYMMDD:',
        context.dayjsValue.map((d) => d.format('YYYYMMDD')),
      );
    },
  },
};
</script>
