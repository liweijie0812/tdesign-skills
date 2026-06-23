<!--
  TDesign TDesign Vue Next 示例：date-picker - base
  覆盖组件：Date-picker
  来源：组件库源码 packages/components/date-picker/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-date-picker
      v-model="date2"
      @change="handleChange"
      @month-change="handleMonthChange"
      @year-change="handleYearChange"
    />

    <t-date-picker
      v-model="date"
      placeholder="可清除、可输入的日期选择器"
      clearable
      allow-input
      @change="handleChange"
      @month-change="handleMonthChange"
      @year-change="handleYearChange"
    />
  </t-space>
</template>

<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { ref } from 'vue';
import type {
  DatePickerTriggerSource,
  DatePickerMonthChangeTrigger,
  DatePickerYearChangeTrigger,
  DateValue,
} from 'tdesign-vue-next';

const date = ref('');
const date2 = ref('');

function handleChange(
  value: DateValue,
  context: {
    dayjsValue: Dayjs;
    trigger?: DatePickerTriggerSource;
  },
) {
  console.log('onChange:', value, context);
  console.log('timestamp:', context.dayjsValue.valueOf());
  console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
}

function handleMonthChange(context: {
  month: number;
  date: Date;
  e?: MouseEvent;
  trigger: DatePickerMonthChangeTrigger;
}) {
  console.log('onMonthChange:', context);
}

function handleYearChange(context: { year: number; date: Date; trigger: DatePickerYearChangeTrigger; e?: MouseEvent }) {
  console.log('onYearChange:', context);
}
</script>
