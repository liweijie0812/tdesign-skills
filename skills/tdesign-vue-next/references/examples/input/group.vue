<!--
  TDesign TDesign Vue Next 示例：input - group
  覆盖组件：Input
  来源：组件库源码 packages/components/input/_example/group.vue
-->

<template>
  <t-space direction="vertical">
    <div>
      <t-input-group separate>
        <t-input :style="{ width: '100px' }" default-value="0731" />
        <t-input default-value="12345677" />
      </t-input-group>
    </div>
    <div>
      <t-input-group separate>
        <t-input />
        <t-input />
      </t-input-group>
    </div>
    <div>
      <t-input-group>
        <t-input />
        <t-input />
      </t-input-group>
    </div>
    <div>
      <t-input-group separate>
        <t-input :style="{ width: '100px' }" default-value="0731" />
        <span :style="{ lineHeight: '32px' }">&nbsp;-&nbsp;</span>
        <t-input :style="{ width: '100px' }" default-value="12345" />
        <t-input :style="{ width: '100px' }" default-value="678901" />
        <t-input :style="{ width: '100px' }" />
      </t-input-group>
    </div>
  </t-space>
</template>
