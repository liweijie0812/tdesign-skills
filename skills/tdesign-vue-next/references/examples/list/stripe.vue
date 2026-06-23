<!--
  TDesign TDesign Vue Next 示例：list - stripe
  覆盖组件：List
  来源：组件库源码 packages/components/list/_example/stripe.vue
-->

<template>
  <t-list stripe>
    <t-list-item v-for="index in 4" :key="`stripe${index}`">列表内容的描述性文字</t-list-item>
  </t-list>
</template>
