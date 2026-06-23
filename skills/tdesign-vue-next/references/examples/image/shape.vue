<!--
  TDesign TDesign Vue Next 示例：image - shape
  覆盖组件：Image
  来源：组件库源码 packages/components/image/_example/shape.vue
-->

<template>
  <t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        shape="square"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
      />
      <span>square</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
        shape="round"
      />
      <span>round</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        shape="circle"
        fit="cover"
      />
      <span>circle</span>
    </t-space>
  </t-space>
</template>
