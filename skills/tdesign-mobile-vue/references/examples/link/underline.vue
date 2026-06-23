<!--
  TDesign TDesign Mobile Vue 示例：link - underline
  覆盖组件：Link
  来源：组件库源码 src/link/demos/underline.vue
-->

<template>
  <div class="tdesign-mobile-link-demo">
    <t-link theme="primary" underline @click="clickHandle">跳转链接</t-link>
    <t-link hover underline>跳转链接</t-link>
  </div>
</template>
<script lang="ts" setup>
const clickHandle = () => {
  console.log('click');
};
</script>
<style scoped>
.tdesign-mobile-link-demo {
  height: 48px;
  background-color: var(--bg-color-demo, #fff);
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6.4vw;
  align-items: center;
}
</style>
