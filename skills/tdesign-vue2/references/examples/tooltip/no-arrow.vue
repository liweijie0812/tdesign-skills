<!--
  TDesign TDesign Vue 2 示例：tooltip - no-arrow
  覆盖组件：Tooltip
  来源：组件库源码 src/tooltip/_example/no-arrow.vue
-->

<template>
  <div>
    <t-tooltip content="文字提示仅展示文本内容" :showArrow="false">
      <t-button variant="outline">不带箭头的文字提示</t-button>
    </t-tooltip>
  </div>
</template>
