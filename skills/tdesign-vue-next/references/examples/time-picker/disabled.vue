<!--
  TDesign TDesign Vue Next 示例：time-picker - disabled
  覆盖组件：Time-picker
  来源：组件库源码 packages/components/time-picker/_example/disabled.vue
-->

<template>
  <t-space direction="vertical">
    <h3>禁用整个选择器</h3>
    <t-time-picker v-model="time1" :disabled="true" />
    <h3>禁用指定时间</h3>
    <t-time-picker :disable-time="disableTime" />
    <h3>禁用指定时间 同时展示禁用的时间选项</h3>
    <t-time-picker :disable-time="disableTime" :hide-disabled-time="false" />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TimePickerProps } from 'tdesign-vue-next';

const time1 = ref('11:12:10');
const disableTime: TimePickerProps['disableTime'] = (h) => {
  const disableHour = [1, 2, 3];
  if (h > 4) {
    return {
      hour: disableHour,
      minute: [30, 31, 32, 33, 34],
    };
  }
  return {
    hour: disableHour,
  };
};
</script>
