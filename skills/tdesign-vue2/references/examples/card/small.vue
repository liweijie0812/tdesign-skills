<!--
  TDesign TDesign Vue 2 示例：card - small
  覆盖组件：Card
  来源：组件库源码 src/card/_example/small.vue
-->

<template>
  <t-card
    :title="title"
    :actions="actions"
    size="small"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '标题',
      actions: '操作',
      infoMessage: `这是一段很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长的内容示例。`,
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('操作');
    },
  },
};
</script>
