<!--
  TDesign TDesign Vue 2 示例：tag-input - size
  覆盖组件：Tag-input
  来源：组件库源码 src/tag-input/_example/size.vue
-->

<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" size="small" clearable />

    <t-tag-input v-model="tags2" clearable />

    <t-tag-input v-model="tags3" size="large" clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React'],
      tags2: ['Vue', 'React'],
      tags3: ['Vue', 'React'],
    };
  },
};
</script>
