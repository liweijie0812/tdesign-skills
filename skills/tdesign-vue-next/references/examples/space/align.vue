<!--
  TDesign TDesign Vue Next 示例：space - align
  覆盖组件：Space
  来源：组件库源码 packages/components/space/_example/align.vue
-->

<template>
  <t-space break-line>
    <t-space align="start" class="space-border">
      <div>start</div>
      <t-button>Button</t-button>
      <div class="space-block"></div>
    </t-space>
    <t-space align="center" class="space-border">
      <div>center</div>
      <t-button>Button</t-button>
      <div class="space-block"></div>
    </t-space>
    <t-space align="end" class="space-border">
      <div>end</div>
      <t-button>Button</t-button>
      <div class="space-block"></div>
    </t-space>
    <t-space align="baseline" class="space-border">
      <div>baseline</div>
      <t-button>Button</t-button>
      <div class="space-block"></div>
    </t-space>
  </t-space>
</template>

<style scoped>
.space-border {
  padding: 12px;
  border: 1px dashed var(--td-component-stroke);
}
.space-block {
  background: var(--td-bg-color-component);
  height: 60px;
  width: 60px;
}
</style>
