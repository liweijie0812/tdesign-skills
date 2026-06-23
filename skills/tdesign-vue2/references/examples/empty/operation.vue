<!--
  TDesign TDesign Vue 2 示例：empty - operation
  覆盖组件：Empty
  来源：组件库源码 src/empty/_example/operation.vue
-->

<template>
  <t-empty>
    <template #action>
      <t-button @click="goToIndex">返回首页</t-button>
    </template>
  </t-empty>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToIndex() {
      console.log('go to index');
      location.href = '/';
    },
  },
};
</script>
