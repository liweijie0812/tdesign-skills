<!--
  TDesign TDesign Vue Next 示例：tooltip - theme
  覆盖组件：Tooltip
  来源：组件库源码 packages/components/tooltip/_example/theme.vue
-->

<template>
  <t-space>
    <t-tooltip content="文字提示仅展示文本内容">
      <t-button theme="default">default</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" theme="primary">
      <t-button theme="primary">primary</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" theme="success">
      <t-button theme="success">success</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" theme="danger">
      <t-button theme="danger">danger</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" theme="warning">
      <t-button theme="warning">warning</t-button>
    </t-tooltip>
    <t-tooltip content="文字提示仅展示文本内容" theme="light">
      <t-button variant="outline">light</t-button>
    </t-tooltip>
  </t-space>
</template>
