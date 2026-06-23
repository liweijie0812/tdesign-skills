<!--
  TDesign TDesign Mobile Vue 示例：date-time-picker - hour-minute
  覆盖组件：Date-time-picker
  来源：组件库源码 src/date-time-picker/demos/hour-minute.vue
-->

<template>
  <t-cell :bordered="false" :note="pickerValue || ''" arrow hover title="选择时间" @click="visible = true" />
  <t-popup v-model="visible" placement="bottom">
    <t-date-time-picker
      :mode="[null, 'minute']"
      default-value="10:10"
      format="HH:mm"
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
const pickerValue = ref('');

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
  pickerValue.value = String(value);
  visible.value = false;
};
</script>
