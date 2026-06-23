<!--
  TDesign TDesign Vue 2 示例：list - base
  覆盖组件：List
  来源：组件库源码 src/list/_example/base.vue
-->

<template>
  <t-list>
    <t-list-item>
      列表内容的描述性文字
      <template #action>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作1 </t-link>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作2 </t-link>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作3 </t-link>
      </template>
    </t-list-item>
    <t-list-item>
      列表内容的描述性文字
      <template #action>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作1 </t-link>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作2 </t-link>
        <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作3 </t-link>
      </template>
    </t-list-item>
  </t-list>
</template>
