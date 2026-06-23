<!--
  TDesign TDesign Mobile Vue 示例：calendar - without-popup
  覆盖组件：Calendar
  来源：组件库源码 src/calendar/demos/without-popup.vue
-->

<template>
  <t-calendar :use-popup="false" type="multiple" title="日历标题" @select="handleSelect" />
</template>

<script lang="ts" setup>
const handleSelect = (val: any) => {
  console.log(val);
};
</script>
