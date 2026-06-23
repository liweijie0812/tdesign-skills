<!--
  TDesign TDesign Vue Next 示例：date-picker - date-range
  覆盖组件：Date-picker
  来源：组件库源码 packages/components/date-picker/_example/date-range.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-range-picker
      allow-input
      clearable
      format="YYYY-MM-DD HH:mm:ss"
      :default-time="['00:00:00', '22:22:22']"
      @pick="onPick"
      @change="onChange"
      @month-change="onMonthChange"
      @year-change="onYearChange"
    />
    <t-date-range-picker
      enable-time-picker
      allow-input
      clearable
      @pick="onPick"
      @change="onChange"
      @month-change="onMonthChange"
      @year-change="onYearChange"
    />
  </t-space>
</template>

<script lang="ts" setup>
import type { DateRangePickerProps } from 'tdesign-vue-next';

const onPick: DateRangePickerProps['onPick'] = (value, context) => console.log('onPick:', value, context);

const onChange: DateRangePickerProps['onChange'] = (value, context) => {
  console.log('onChange:', value, context);
  console.log(
    'timestamp:',
    context.dayjsValue.map((d) => d.valueOf()),
  );
  console.log(
    'YYYYMMDD:',
    context.dayjsValue.map((d) => d.format('YYYYMMDD')),
  );
};

const onMonthChange: DateRangePickerProps['onMonthChange'] = (context) => {
  console.log('onMonthChange:', context);
};

const onYearChange: DateRangePickerProps['onYearChange'] = (context) => {
  console.log('onYearChange:', context);
};
</script>
