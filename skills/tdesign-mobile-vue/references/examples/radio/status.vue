<!--
  TDesign TDesign Mobile Vue 示例：radio - status
  覆盖组件：Radio
  来源：组件库源码 src/radio/demos/status.vue
-->

<template>
  <t-radio-group v-model="radio1" disabled :options="options" class="radio-group-demo space" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');

const options = [
  {
    value: '1',
    label: '选项禁用-已选',
  },
  {
    value: '2',
    label: '选项禁用-默认',
  },
];

const groupChangeFn = (value: any, context: { e: Event }) => {
  console.log(value, context);
};
</script>
<style scoped>
.radio-group-demo {
  background-color: #fff;
}
.space {
  margin-bottom: 16px;
}
</style>
