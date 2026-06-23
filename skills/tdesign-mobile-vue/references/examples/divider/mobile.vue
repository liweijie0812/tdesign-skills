<!--
  TDesign TDesign Mobile Vue 示例：divider - mobile
  覆盖组件：Divider
  来源：组件库源码 src/divider/demos/mobile.vue
-->

<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Divider 分割线</h1>
    <p class="summary">用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。</p>
    <tdesign-demo-block title="01 组件类型">
      <BaseDemo />
    </tdesign-demo-block>
    <tdesign-demo-block title="02 组件状态">
      <ThemeDemo />
    </tdesign-demo-block>
  </div>
</template>
<script lang="ts" setup>
import BaseDemo from './base.vue';
import ThemeDemo from './theme.vue';
</script>
<style lang="less" scoped>
@import '../style/index.less';
</style>
