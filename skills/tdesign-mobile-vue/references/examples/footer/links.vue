<!--
  TDesign TDesign Mobile Vue 示例：footer - links
  覆盖组件：Footer
  来源：组件库源码 src/footer/demos/links.vue
-->

<template>
  <div class="footer-example">
    <t-footer :text="text" :links="links[0]" />
  </div>

  <div class="footer-example">
    <t-footer :text="text" :links="links[1]" />
  </div>
</template>

<script lang="ts" setup>
const text = 'Copyright © 2021-2031 TD.All Rights Reserved.';

const links = [
  [
    {
      name: '底部链接',
      url: '',
    },
  ],
  [
    {
      name: '底部链接',
      url: '',
    },
    {
      name: '底部链接',
      url: '',
    },
  ],
];
</script>

<style lang="less">
.footer-example {
  padding: 4px 0;
}

.footer-example:not(:last-child) {
  margin-bottom: 16px;
}
</style>
