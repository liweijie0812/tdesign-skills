<!--
  TDesign TDesign Vue 2 示例：tag-input - auto-width
  覆盖组件：Tag-input
  来源：组件库源码 src/tag-input/_example/auto-width.vue
-->

<template>
  <t-tag-input v-model="tags" auto-width clearable />
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React'],
    };
  },
};
</script>
