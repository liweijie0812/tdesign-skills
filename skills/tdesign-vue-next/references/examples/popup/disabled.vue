<!--
  TDesign TDesign Vue Next 示例：popup - disabled
  覆盖组件：Popup
  来源：组件库源码 packages/components/popup/_example/disabled.vue
-->

<template>
  <t-space>
    <t-popup :disabled="true" content="这是popup内容">
      <t-button variant="outline" disabled>禁用浮层显示</t-button>
    </t-popup>
  </t-space>
</template>
