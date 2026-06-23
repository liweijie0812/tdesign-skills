<!--
  TDesign TDesign Mobile Vue 示例：result - custom
  覆盖组件：Result
  来源：组件库源码 src/result/demos/custom.vue
-->

<template>
  <t-result>
    <template #image>
      <t-image src="https://tdesign.gtimg.com/mobile/demos/result1.png" class="external-class-image" />
    </template>
    <template #title>
      <div>自定义结果</div>
    </template>
    <template #description>
      <div>描述文字</div>
    </template>
  </t-result>
</template>

<style>
.external-class-image {
  width: 108px;
}
</style>
