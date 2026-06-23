<!--
  TDesign TDesign Vue Next 示例：tooltip - duration
  覆盖组件：Tooltip
  来源：组件库源码 packages/components/tooltip/_example/duration.vue
-->

<template>
  <t-tooltip :key="renderId" default-visible :content="`提示在 ${timeout} 秒后消失`" :duration="5000">
    <t-button variant="outline" :disabled="Boolean(timeout)" @click="renderId += 1">定时消失</t-button>
  </t-tooltip>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, watch } from 'vue';

const timeout = ref(0);
const renderId = ref(0);
let timer: NodeJS.Timeout;
watch(
  renderId,
  () => {
    timeout.value = 5;
    timer = setInterval(() => {
      timeout.value -= 1;
      if (timeout.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  },
  {
    immediate: true,
  },
);
onUnmounted(() => {
  clearInterval(timer);
});
</script>
