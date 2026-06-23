<!--
  TDesign TDesign Vue Next 示例：grid - sort
  覆盖组件：Grid
  来源：组件库源码 packages/components/grid/_example/sort.vue
-->

<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :span="9" :push="3">
        <div>col-9 col-pull-3</div>
      </t-col>
      <t-col :span="3" :pull="9">
        <div>col-3 col-pull-9</div>
      </t-col>
    </t-row>
  </t-space>
</template>
