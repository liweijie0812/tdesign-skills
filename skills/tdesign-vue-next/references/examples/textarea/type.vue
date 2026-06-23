<!--
  TDesign TDesign Vue Next 示例：textarea - type
  覆盖组件：Textarea
  来源：组件库源码 packages/components/textarea/_example/type.vue
-->

<template>
  <t-space direction="vertical">
    <t-textarea disabled default-value="禁用状态" />

    <t-textarea readonly default-value="只读状态" />

    <t-textarea default-value="普通状态" tips="这是普通文本提示" />
    <t-textarea status="success" default-value="成功状态" tips="校验通过文本提示" />
    <t-textarea status="warning" default-value="警告状态" tips="校验不通过文本提示" />
    <t-textarea status="error" default-value="错误状态" tips="校验存在严重问题文本提示" />
  </t-space>
</template>
