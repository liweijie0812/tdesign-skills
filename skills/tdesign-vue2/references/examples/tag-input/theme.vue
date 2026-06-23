<!--
  TDesign TDesign Vue 2 示例：tag-input - theme
  覆盖组件：Tag-input
  来源：组件库源码 src/tag-input/_example/theme.vue
-->

<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags" placeholder="添加新标签" :tag-props="{ theme: 'primary' }" />
    <t-tag-input v-model="tags" placeholder="添加新标签" :tag-props="{ theme: 'success' }" />
    <t-tag-input v-model="tags" placeholder="添加新标签" :tag-props="{ theme: 'warning' }" />
    <t-tag-input v-model="tags" placeholder="添加新标签" :tag-props="{ theme: 'danger' }" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React', 'Miniprogram'],
    };
  },
};
</script>
