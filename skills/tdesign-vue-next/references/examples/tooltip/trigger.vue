<!--
  TDesign TDesign Vue Next 示例：tooltip - trigger
  覆盖组件：Tooltip
  来源：组件库源码 packages/components/tooltip/_example/trigger.vue
-->

<template>
  <t-space>
    <t-tooltip content="文字提示仅展示文本内容">
      <t-button variant="outline">悬浮时触发（默认）</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" trigger="focus">
      <t-input placeholder="获得焦点时触发" />
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" trigger="click">
      <t-button variant="outline">点击时触发</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" trigger="context-menu">
      <t-button variant="outline">右击时触发</t-button>
    </t-tooltip>
  </t-space>
</template>
<style lang="less" scoped>
.tdesign-tooltip-demo {
  > * {
    display: inline-block;
    width: auto;
    vertical-align: bottom;
    margin-right: 10px;
  }
}
</style>
