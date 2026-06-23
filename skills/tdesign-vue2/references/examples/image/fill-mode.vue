<!--
  TDesign TDesign Vue 2 示例：image - fill-mode
  覆盖组件：Image
  来源：组件库源码 src/image/_example/fill-mode.vue
-->

<template>
  <t-space :breakLine="true" :size="16">
    <t-space v-for="item in mode" direction="vertical" align="start" :key="item">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :fit="item"
        :style="{ width: '120px', height: '120px' }"
      />
      <span>{{ item }}</span>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mode: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    };
  },
};
</script>
