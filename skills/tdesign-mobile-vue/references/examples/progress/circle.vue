<!--
  TDesign TDesign Mobile Vue 示例：progress - circle
  覆盖组件：Progress
  来源：组件库源码 src/progress/demos/circle.vue
-->

<template>
  <div class="example-progress">
    <div class="example-progress__item">
      <t-progress theme="circle" :percentage="30" />
    </div>
    <div class="example-progress__item">
      <t-progress theme="circle" :percentage="30" status="warning" />
    </div>
    <div class="example-progress__item">
      <t-progress theme="circle" :percentage="30" status="error" />
    </div>
    <div class="example-progress__item">
      <t-progress theme="circle" :percentage="100" status="success" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.example-progress {
  &__item:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
