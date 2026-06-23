<!--
  TDesign TDesign Vue 2 示例：tag-input - max
  覆盖组件：Tag-input
  来源：组件库源码 src/tag-input/_example/max.vue
-->

<template>
  <t-tag-input v-model="tags" placeholder="最多只能输入 3 个标签" :max="3" @enter="onEnter" style="width: 80%" />
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    onEnter(value, { inputValue }) {
      if (value.length >= 3 && inputValue) {
        MessagePlugin.warning('最多只能输入 3 个标签!');
      }
    },
  },
};
</script>
