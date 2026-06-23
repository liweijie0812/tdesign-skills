<!--
  TDesign TDesign Vue 2 示例：list - scroll
  覆盖组件：List
  来源：组件库源码 src/list/_example/scroll.vue
-->

<template>
  <t-list style="max-height: 200px" @scroll="scrollHandler" :onScroll="onScroll">
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
  </t-list>
</template>

<script>
export default {
  methods: {
    scrollHandler(e) {
      console.log(e);
    },
    onScroll(e) {
      console.log('触发onScroll', e);
    },
  },
};
</script>
