<!--
  TDesign TDesign Vue 2 示例：empty - descriptions
  覆盖组件：Empty
  来源：组件库源码 src/empty/_example/descriptions.vue
-->

<template>
  <t-empty :description="description" :title="title"> </t-empty>
</template>
<script>
export default {
  data() {
    return {
      title: 'Empty',
      description: 'Description',
    };
  },
  methods: {
    goToIndex() {
      console.log('go to index');
      location.href = '/';
    },
  },
};
</script>
