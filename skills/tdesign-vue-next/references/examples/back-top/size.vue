<!--
  TDesign TDesign Vue Next 示例：back-top - size
  覆盖组件：Back-top
  来源：组件库源码 packages/components/back-top/_example/size.vue
-->

<template>
  <t-space style="position: relative" direction="vertical">
    <t-space>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        theme="light"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        theme="primary"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        theme="dark"
      ></t-back-top>
    </t-space>
    <t-space>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="small"
        :offset="[0, 0]"
        theme="light"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="small"
        :offset="[0, 0]"
        theme="primary"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="small"
        :offset="[0, 0]"
        theme="dark"
      ></t-back-top>
    </t-space>
  </t-space>
</template>
