<!--
  TDesign TDesign Vue Next 示例：grid - order
  覆盖组件：Grid
  来源：组件库源码 packages/components/grid/_example/order.vue
-->

<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :span="3" :order="4">
        <div>1 col-3-order-4</div>
      </t-col>
      <t-col :span="3" :order="3">
        <div>2 col-3-order-3</div>
      </t-col>
      <t-col :span="3" :order="2">
        <div>3 col-3-order-2</div>
      </t-col>
      <t-col :span="3" :order="1">
        <div>4 col-3-order-1</div>
      </t-col>
    </t-row>
  </t-space>
</template>
