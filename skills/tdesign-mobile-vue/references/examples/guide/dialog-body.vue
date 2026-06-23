<!--
  TDesign TDesign Mobile Vue 示例：guide - dialog-body
  覆盖组件：Guide
  来源：组件库源码 src/guide/demos/dialog-body.vue
-->

<template>
  <div class="dialog-body">
    <p>用户引导的说明文案</p>
    <div class="img-wrapper">
      <img src="https://tdesign.gtimg.com/demo/demo-image-1.png" alt="demo" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.dialog-body {
  .img-wrapper {
    border-radius: var(--td-radius-default);
    overflow: hidden;
    img {
      vertical-align: bottom;
      width: 100%;
    }
  }

  p {
    margin-bottom: 24px;
  }
}
</style>
