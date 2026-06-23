<!--
  TDesign TDesign Vue 2 示例：tree - expand-level
  覆盖组件：Tree
  来源：组件库源码 src/tree/_example/expand-level.vue
-->

<template>
  <t-space direction="vertical">
    <t-tree :data="items" hover :expand-level="1" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
};
</script>
