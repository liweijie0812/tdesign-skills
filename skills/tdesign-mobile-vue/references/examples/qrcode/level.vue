<!--
  TDesign TDesign Mobile Vue 示例：qrcode - level
  覆盖组件：Qrcode
  来源：组件库源码 src/qrcode/demos/level.vue
-->

<template>
  <t-slider :min="0" :max="3" :value="level" :marks="marks" :on-change="handleTabs" />
  <div class="qrcode-content">
    <t-qrcode :level="levelList[level]" value="https://tdesign.gtimg.com/site/tdesign-logo.png" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const levelList = ['L', 'M', 'Q', 'H'];
const level = ref(1);
const marks = ref({
  0: '7%',
  1: '15%',
  2: '25%',
  3: '30%',
});
const handleTabs = (val) => {
  level.value = val;
};
</script>
