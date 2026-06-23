<!--
  TDesign TDesign Vue Next 示例：radio - size
  覆盖组件：Radio
  来源：组件库源码 packages/components/radio/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <t-radio-group size="small" default-value="1">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3">选项三</t-radio-button>
      <t-radio-button value="4">选项四</t-radio-button>
    </t-radio-group>

    <t-radio-group default-value="2">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3">选项三</t-radio-button>
      <t-radio-button value="4">选项四</t-radio-button>
    </t-radio-group>

    <t-radio-group size="large" default-value="3">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3">选项三</t-radio-button>
      <t-radio-button value="4">选项四</t-radio-button>
    </t-radio-group>
  </t-space>
</template>
