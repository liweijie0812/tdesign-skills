<!--
  TDesign TDesign Vue 2 示例：notification - content
  覆盖组件：Notification
  来源：组件库源码 src/notification/_example/content.vue
-->

<template>
  <t-space direction="vertical" :size="20">
    <t-notification title="自定义内容(字符串)" content="这是一条消息通知" />
    <t-notification title="自定义内容(函数)" :content="content" />
    <t-notification title="自定义内容(插槽)">
      <span>这是一条消息通知</span>
    </t-notification>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    content() {
      return <div>这是一条消息通知</div>;
    },
  },
};
</script>
