<!--
  TDesign TDesign Mobile Vue 示例：input - maxLength
  覆盖组件：Input
  来源：组件库源码 src/input/demos/maxLength.vue
-->

<template>
  <t-input label="标签文字" placeholder="请输入文字" :maxlength="10" tips="最大输入10个字符" />
  <t-input label="标签文字" placeholder="请输入文字" :maxcharacter="10" tips="最大输入10个字符，汉字算两个" />
</template>
