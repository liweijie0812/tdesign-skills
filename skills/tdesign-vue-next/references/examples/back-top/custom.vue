<!--
  TDesign TDesign Vue Next 示例：back-top - custom
  覆盖组件：Back-top
  来源：组件库源码 packages/components/back-top/_example/custom.vue
-->

<template>
  <t-space style="position: relative" direction="vertical">
    <t-space>
      <t-back-top style="position: relative" :visible-height="0" size="medium" :offset="[0, 0]"
        ><span>返回顶部</span></t-back-top
      >
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        content="返回顶部"
      ></t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        default="返回顶部"
      ></t-back-top>
    </t-space>
  </t-space>
</template>
