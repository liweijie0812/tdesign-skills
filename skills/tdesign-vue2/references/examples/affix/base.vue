<!--
  TDesign TDesign Vue 2 示例：affix - base
  覆盖组件：Affix
  来源：组件库源码 src/affix/_example/base.vue
-->

<template>
  <div class="affix-base">
    <t-affix :offset-top="top" :offset-bottom="20" ref="affix">
      <t-button>固钉</t-button>
    </t-affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 140,
    };
  },
};
</script>
