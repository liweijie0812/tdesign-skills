<!--
  TDesign TDesign Mobile Vue 示例：empty - buttonEmpty
  覆盖组件：Empty
  来源：组件库源码 src/empty/demos/buttonEmpty.vue
-->

<template>
  <t-empty :icon="userIcon" description="描述文字">
    <template #action>
      <t-button theme="primary" size="large">操作按钮</t-button>
    </template>
  </t-empty>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { InfoCircleFilledIcon } from 'tdesign-icons-vue-next';

const userIcon = () => h(InfoCircleFilledIcon);
</script>
