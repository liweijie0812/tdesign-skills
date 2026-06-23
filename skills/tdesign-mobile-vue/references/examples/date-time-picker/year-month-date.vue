<!--
  TDesign TDesign Mobile Vue 示例：date-time-picker - year-month-date
  覆盖组件：Date-time-picker
  来源：组件库源码 src/date-time-picker/demos/year-month-date.vue
-->

<template>
  <t-cell :bordered="false" :note="pickerValueText || ''" arrow hover title="选择时间" @click="visible = true" />
  <t-popup v-model="visible" placement="bottom">
    <t-date-time-picker
      :mode="['date']"
      :value="pickerValue"
      format="YYYY-MM-DD"
      start="2015-5-5"
      title="选择时间"
      @cancel="onCancel"
      @change="onChange"
      @confirm="onConfirm"
      @pick="onPick"
    />
  </t-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DateValue } from 'tdesign-mobile-vue';

const visible = ref(false);
const pickerValue = ref<DateValue>('2021-12-23');
const pickerValueText = ref('');
const onChange = (value: DateValue) => {
  console.log('change: ', value);
};

const onPick = (value: DateValue) => {
  console.log('pick: ', value);
};

const onCancel = () => {
  console.log('cancel');
  visible.value = false;
};

const onConfirm = (value: DateValue) => {
  console.log('confirm: ', value);
  pickerValue.value = value;
  pickerValueText.value = String(value);
  visible.value = false;
};
</script>
