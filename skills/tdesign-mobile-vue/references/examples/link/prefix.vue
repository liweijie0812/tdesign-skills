<!--
  TDesign TDesign Mobile Vue 示例：link - prefix
  覆盖组件：Link
  来源：组件库源码 src/link/demos/prefix.vue
-->

<template>
  <div class="tdesign-mobile-link-demo">
    <t-link hover theme="primary">
      <template #prefixIcon>
        <link-icon />
      </template>
      跳转链接
    </t-link>
    <t-link>
      <template #prefixIcon>
        <link-icon />
      </template>
      跳转链接
    </t-link>
  </div>
</template>
<script lang="ts" setup>
import { LinkIcon } from 'tdesign-icons-vue-next';
</script>

<style scoped>
.tdesign-mobile-link-demo {
  height: 48px;
  background-color: var(--bg-color-demo, #fff);
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6.4vw;
  align-items: center;
}
</style>
