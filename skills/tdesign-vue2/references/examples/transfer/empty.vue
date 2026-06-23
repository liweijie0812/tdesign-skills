<!--
  TDesign TDesign Vue 2 示例：transfer - empty
  覆盖组件：Transfer
  来源：组件库源码 src/transfer/_example/empty.vue
-->

<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">默认暂无数据</p>
    <t-transfer :data="list" />
    <p style="margin: 10px">自定义空状态</p>
    <t-transfer :data="list" empty="No Data" />
  </t-space>
</template>
<script>
const initialList = [];
export default {
  data() {
    return {
      list: initialList,
    };
  },
};
</script>
