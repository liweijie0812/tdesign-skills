<!--
  TDesign TDesign Mobile Vue 示例：tag - closable
  覆盖组件：Tag
  来源：组件库源码 src/tag/demos/closable.vue
-->

<template>
  <div>
    <div class="summary">可关闭标签</div>
    <div class="tag-demo">
      <t-tag v-if="show1" closable variant="light" @close="onClickClose(1)">文字标签</t-tag>
      <t-tag v-if="show2" closable variant="outline" @close="onClickClose(2)">文字标签</t-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show1 = ref(true);
const show2 = ref(true);
function onClickClose(index: number) {
  if (index === 1) {
    show1.value = false;
  }
  if (index === 2) {
    show2.value = false;
  }
}
</script>
