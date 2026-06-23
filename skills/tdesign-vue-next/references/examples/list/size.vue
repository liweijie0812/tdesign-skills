<!--
  TDesign TDesign Vue Next 示例：list - size
  覆盖组件：List
  来源：组件库源码 packages/components/list/_example/size.vue
-->

<template>
  <t-space direction="vertical">
    <t-list :split="true" size="small">
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
    </t-list>

    <t-list :split="true">
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
    </t-list>

    <t-list :split="true" size="large">
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
      <t-list-item>列表内容的描述性文字</t-list-item>
    </t-list>
  </t-space>
</template>
