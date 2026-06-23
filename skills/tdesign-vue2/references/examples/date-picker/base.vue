<!--
  TDesign TDesign Vue 2 示例：date-picker - base
  覆盖组件：Date-picker
  来源：组件库源码 src/date-picker/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date2" @change="handleChange" :firstDayOfWeek="3" :inputProps="inputProps" readonly />
    <t-date-picker
      v-model="date"
      placeholder="可清除、可输入的日期选择器"
      clearable
      allow-input
      @change="handleChange"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      date2: '',
      inputProps: { inputClass: 'test-inputClass' },
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('onChange:', value, context);
      console.log('timestamp:', context.dayjsValue.valueOf());
      console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
    },
  },
};
</script>
