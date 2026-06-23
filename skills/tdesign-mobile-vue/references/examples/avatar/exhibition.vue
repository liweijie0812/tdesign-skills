<!--
  TDesign TDesign Mobile Vue 示例：avatar - exhibition
  覆盖组件：Avatar
  来源：组件库源码 src/avatar/demos/exhibition.vue
-->

<template>
  <div class="avatar-group-demo">
    <t-avatar-group cascading="left-up" :max="5">
      <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
    </t-avatar-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imageList = ref([
  'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
  'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
]);
</script>

<style lang="less">
.avatar-group-demo {
  margin-left: 16px;
  margin-bottom: 16px;
}
</style>
