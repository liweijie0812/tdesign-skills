<!--
  TDesign TDesign Vue 2 示例：breadcrumb - base
  覆盖组件：Breadcrumb
  来源：组件库源码 src/breadcrumb/_example/base.vue
-->

<template>
  <t-breadcrumb :maxItemWidth="'150'">
    <t-breadcrumb-item>页面1</t-breadcrumb-item>
    <t-breadcrumb-item>页面2面包屑文案超长时悬浮显示文案全部信息</t-breadcrumb-item>
    <t-breadcrumb-item :maxWidth="'160'">面包屑中文案过长时可缩略显示，鼠标hover时显示全部</t-breadcrumb-item>
  </t-breadcrumb>
</template>
