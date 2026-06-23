<!--
  TDesign TDesign Vue 2 示例：tree - base
  覆盖组件：Tree
  来源：组件库源码 src/tree/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <t-tree :data="items" activable hover transition />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '第一段',
          children: [
            {
              label: '第二段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第一段',
          children: [
            {
              label: '第二段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第一段',
          children: [
            {
              label: '第二段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第一段',
          children: [
            {
              label: '第二段',
            },
            {
              label: '第二段',
            },
          ],
        },
      ],
    };
  },
};
</script>
