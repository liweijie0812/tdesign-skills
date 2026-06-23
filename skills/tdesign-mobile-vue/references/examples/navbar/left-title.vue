<!--
  TDesign TDesign Mobile Vue 示例：navbar - left-title
  覆盖组件：Navbar
  来源：组件库源码 src/navbar/demos/left-title.vue
-->

<template>
  <t-navbar title="标题居中" :fixed="false" left-arrow>
    <template #right>
      <t-icon name="ellipsis" size="24px" />
    </template>
  </t-navbar>

  <t-navbar :fixed="false" left-arrow>
    <template #left>
      <span class="custom-title">标题左对齐</span>
    </template>
    <template #right>
      <t-icon name="home" size="24px" />
      <t-icon name="ellipsis" size="24px" />
    </template>
  </t-navbar>
</template>

<script lang="ts" setup>
import { Icon as TIcon } from 'tdesign-icons-vue-next';
</script>

<style lang="less" scoped>
.t-navbar {
  margin-bottom: 16px;
}

.custom-title {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
}

.t-icon-home {
  margin-right: 8px;
}
</style>
