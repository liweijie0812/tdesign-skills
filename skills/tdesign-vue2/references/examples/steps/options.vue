<!--
  TDesign TDesign Vue 2 示例：steps - options
  覆盖组件：Steps
  来源：组件库源码 src/steps/_example/options.vue
-->

<template>
  <t-steps :current="current" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      options: [
        {
          title: '步骤一',
          content: '这里是提示文字',
        },
        {
          title: '步骤二',
          content: '这里是提示文字',
        },
        {
          title: '步骤三',
          content: '这里是提示文字',
        },
        {
          title: '步骤四',
          content: '这里是提示文字',
        },
      ],
    };
  },
  methods: {},
};
</script>
