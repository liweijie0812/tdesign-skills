<!--
  TDesign TDesign Vue 2 示例：drawer - no-mask
  覆盖组件：Drawer
  来源：组件库源码 src/drawer/_example/no-mask.vue
-->

<template>
  <div>
    <t-drawer
      :visible="visible"
      :showOverlay="false"
      :onConfirm="handleClose"
      :preventScrollThrough="false"
      header="抽屉标题"
      @close="handleClose"
    >
      <p>抽屉的内容</p>
    </t-drawer>

    <t-button variant="outline" @click="handleClick">打开抽屉</t-button>
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
    setVisible(state) {
      this.visible = state;
    },
    handleClick() {
      this.setVisible(true);
    },
    handleClose() {
      this.setVisible(false);
    },
  },
};
</script>
