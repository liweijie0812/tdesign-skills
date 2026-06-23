<!--
  TDesign TDesign Vue 2 示例：popup - destroy
  覆盖组件：Popup
  来源：组件库源码 src/popup/_example/destroy.vue
-->

<template>
  <div>
    <t-popup content="当浮层内容被隐藏时，就会从 DOM 节点中移除" destroyOnClose>
      <t-button variant="outline">隐藏即销毁</t-button>
    </t-popup>
  </div>
</template>
