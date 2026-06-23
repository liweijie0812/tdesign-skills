<!--
  TDesign TDesign Mobile Vue 示例：date-time-picker - year-month
  覆盖组件：Date-time-picker
  来源：组件库源码 src/date-time-picker/demos/year-month.vue
-->

<template>
  <t-cell :bordered="false" :note="valueText || ''" arrow hover title="选择时间" @click="visible = true" />
  <t-popup v-model="visible" placement="bottom">
    <t-date-time-picker
      v-model="value"
      format="YYYY-MM"
      mode="month"
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
const value = ref<DateValue>('2021-09');
const valueText = ref('');
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
  valueText.value = String(value);
  visible.value = false;
};
</script>
