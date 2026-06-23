<!--
  TDesign TDesign Mobile Vue 示例：link - linkSize
  覆盖组件：Link
  来源：组件库源码 src/link/demos/linkSize.vue
-->

<template>
  <div class="tdesign-mobile-link-demo">
    <t-link size="small" theme="primary">
      <template #suffixIcon>
        <jump-icon />
      </template>
      S跳转链接
    </t-link>
    <t-link size="medium" theme="primary">
      <template #suffixIcon>
        <jump-icon />
      </template>
      M跳转链接
    </t-link>
    <t-link size="large" theme="primary">
      <template #suffixIcon>
        <jump-icon />
      </template>
      L跳转链接
    </t-link>
  </div>
</template>
<script lang="ts" setup>
import { JumpIcon } from 'tdesign-icons-vue-next';
</script>
<style scoped>
.tdesign-mobile-link-demo {
  height: 48px;
  background-color: var(--bg-color-demo, #fff);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
