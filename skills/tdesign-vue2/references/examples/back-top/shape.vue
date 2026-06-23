<!--
  TDesign TDesign Vue 2 示例：back-top - shape
  覆盖组件：Back-top
  来源：组件库源码 src/back-top/_example/shape.vue
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
        shape="circle"
        :offset="[0, 0]"
        theme="light"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        shape="circle"
        :offset="[0, 0]"
        theme="primary"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        shape="circle"
        :offset="[0, 0]"
        theme="dark"
      ></t-back-top>
    </t-space>
  </t-space>
</template>
