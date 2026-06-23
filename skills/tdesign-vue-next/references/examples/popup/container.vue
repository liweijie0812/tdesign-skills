<!--
  TDesign TDesign Vue Next 示例：popup - container
  覆盖组件：Popup
  来源：组件库源码 packages/components/popup/_example/container.vue
-->

<template>
  <t-space size="large">
    <t-popup content="触发元素的父元素是组件根元素，通过 CSSSelector 定义" attach="#myPopup">
      <div id="myPopup">
        <t-button variant="outline">父元素为组件本身</t-button>
      </div>
    </t-popup>
    <t-popup content="触发元素的父元素是组件跟元素，通过 Funnction 定义" :attach="getAttach">
      <t-button variant="outline">父元素为其他元素</t-button>
    </t-popup>
  </t-space>
</template>

<script lang="ts" setup>
function getAttach() {
  return document.querySelector('#second-popup');
}
</script>
