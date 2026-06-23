<!--
  TDesign TDesign Vue Next 示例：select - filterable
  覆盖组件：Select
  来源：组件库源码 packages/components/select/_example/filterable.vue
-->

<template>
  <t-space direction="vertical">
    <t-select
      v-model="value"
      placeholder="-请选择-"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      filterable
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    />
    <t-select
      v-model="value2"
      multiple
      placeholder="-请选择-"
      :options="options"
      :filter="filterMethod"
      style="width: 400px; display: inline-block"
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </t-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'tdesign-vue-next';

const options: SelectProps['options'] = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
  {
    label: 'option4',
    value: '4',
  },
  {
    label: 'OPTION5',
    value: '5',
  },
];
const value = ref('');
const value2 = ref([]);
const filterMethod: SelectProps['filter'] = (search, option) => {
  console.log('filter:', search, option);
  return option.label.indexOf(search) !== -1;
};
const handleBlur: SelectProps['onBlur'] = ({ value, e }) => {
  console.log('handleBlur: ', value, e);
};
const handleFocus: SelectProps['onFocus'] = ({ value, e }) => {
  console.log('handleFocus: ', value, e);
};
const handleEnter: SelectProps['onEnter'] = ({ value, e, inputValue }) => {
  console.log('handleEnter: ', value, e, inputValue);
};
</script>
