<!--
  TDesign TDesign Vue 2 示例：statistic - slot
  覆盖组件：Statistic
  来源：组件库源码 src/statistic/_example/slot.vue
-->

<template>
  <t-space :size="32">
    <t-statistic title="Total Assets" :value="56.32" unit="%">
      <template #prefix>
        <control-platform-icon />
      </template>
    </t-statistic>
    <t-statistic title="Total Assets" :value="176059" prefix="$" unit="%" trend="increase" />

    <t-statistic title="Total Assets" :value="62.58">
      <template #suffix>
        <arrow-triangle-down-filled-icon style="color: #ee4d38" />
      </template>
    </t-statistic>
  </t-space>
</template>
<script>
import { ControlPlatformIcon, ArrowTriangleDownFilledIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ArrowTriangleDownFilledIcon,
    ControlPlatformIcon,
  },
};
</script>
