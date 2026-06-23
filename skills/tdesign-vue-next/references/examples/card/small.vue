<!--
  TDesign TDesign Vue Next 示例：card - small
  覆盖组件：Card
  来源：组件库源码 packages/components/card/_example/small.vue
-->

<template>
  <t-card :title="title" :actions="actions" size="small" hover-shadow :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler">操作</a>
    </template>
  </t-card>
</template>
<script lang="tsx" setup>
import { MessagePlugin } from 'tdesign-vue-next';
import type { CardProps } from 'tdesign-vue-next';

const clickHandler = () => {
  MessagePlugin.success('操作');
};
const title: CardProps['title'] = '标题';
const actions: CardProps['actions'] = '操作';
const infoMessage = `这是一段很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长的内容示例。`;
</script>
