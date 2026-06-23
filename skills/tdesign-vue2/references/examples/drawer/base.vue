<!--
  TDesign TDesign Vue 2 示例：drawer - base
  覆盖组件：Drawer
  来源：组件库源码 src/drawer/_example/base.vue
-->

<template>
  <div>
    <t-drawer :visible.sync="visible" header="抽屉标题" :onConfirm="onClickConfirm" :closeBtn="true">
      <p>抽屉的内容</p>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">打开抽屉</t-button>
  </div>
</template>

<script>
import { MessagePlugin as Message } from 'tdesign-vue';

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    onClickConfirm() {
      Message.info('数据保存中...', 1000);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.visible = false;
        Message.info('数据保存成功!');
      }, 1000);
    },
  },
};
</script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
