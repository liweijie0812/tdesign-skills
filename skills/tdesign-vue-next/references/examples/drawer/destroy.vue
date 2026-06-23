<!--
  TDesign TDesign Vue Next 示例：drawer - destroy
  覆盖组件：Drawer
  来源：组件库源码 packages/components/drawer/_example/destroy.vue
-->

<template>
  <div>
    <!-- 动画效果待开发 -->
    <t-drawer v-model:visible="visible" header="抽屉标题" destroy-on-close>
      <p>抽屉的内容</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">打开抽屉</t-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
