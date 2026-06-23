<!--
  TDesign TDesign Vue 2 示例：range-input - popup
  覆盖组件：Range-input
  来源：组件库源码 src/range-input/_example/popup.vue
-->

<template>
  <t-range-input-popup :panel="panel" />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      panel: () => <div>hello world</div>,
    };
  },
};
</script>
