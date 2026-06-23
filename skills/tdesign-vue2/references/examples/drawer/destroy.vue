<!--
  TDesign TDesign Vue 2 示例：drawer - destroy
  覆盖组件：Drawer
  来源：组件库源码 src/drawer/_example/destroy.vue
-->

<template>
  <div>
    <!-- 动画效果待开发 -->
    <t-drawer :visible.sync="visible" header="抽屉标题" destroyOnClose>
      <p>抽屉的内容</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">打开抽屉</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>
