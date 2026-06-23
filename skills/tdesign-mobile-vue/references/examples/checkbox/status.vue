<!--
  TDesign TDesign Mobile Vue 示例：checkbox - status
  覆盖组件：Checkbox
  来源：组件库源码 src/checkbox/demos/status.vue
-->

<template>
  <t-checkbox-group :default-value="['checkbox1']" disabled>
    <t-checkbox value="checkbox1" label="选项禁用-已选" />
    <t-checkbox value="checkbox2" label="选项禁用-默认" />
  </t-checkbox-group>
</template>
