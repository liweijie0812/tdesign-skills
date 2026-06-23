<!--
  TDesign TDesign Mobile Vue 示例：layout - offset
  覆盖组件：Layout
  来源：组件库源码 src/layout/demos/offset.vue
-->

<template>
  <t-row gutter="16">
    <t-col span="8">
      <div class="dark">col-8</div>
    </t-col>
    <t-col span="8">
      <div class="dark">col-8</div>
    </t-col>
    <t-col span="8">
      <div class="dark">col-8</div>
    </t-col>
  </t-row>
</template>
<style scoped lang="less">
.dark {
  background-color: #0052d9;
}

.light {
  background-color: #366ef4;
}

.dark,
.light {
  color: #fff;
  font-size: 14px;
  line-height: 48px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
