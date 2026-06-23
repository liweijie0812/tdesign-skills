<!--
  TDesign TDesign Vue 2 示例：notification - type
  覆盖组件：Notification
  来源：组件库源码 src/notification/_example/type.vue
-->

<template>
  <div>
    <t-notification theme="info" title="信息" content="这是一条消息通知" />
    <t-notification theme="success" title="成功" content="这是一条消息通知" />
    <t-notification theme="warning" title="警告" content="这是一条消息通知" />
    <t-notification theme="error" title="错误" content="这是一条消息通知" />
  </div>
</template>

<style scoped>
.t-notification + .t-notification {
  margin-top: 20px;
}
</style>
