<!--
  TDesign TDesign Vue 2 示例：popup - visible
  覆盖组件：Popup
  来源：组件库源码 src/popup/_example/visible.vue
-->

<template>
  <div>
    <t-popup :visible="visible">
      <t-button variant="outline" @click="onToggle">点击控制浮层显示</t-button>
      <template #content>
        <div>浮层显示与否可以在外部自由控制</div>
      </template>
    </t-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onToggle() {
      this.visible = !this.visible;
    },
  },
};
</script>
