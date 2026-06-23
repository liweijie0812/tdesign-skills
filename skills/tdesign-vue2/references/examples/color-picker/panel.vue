<!--
  TDesign TDesign Vue 2 示例：color-picker - panel
  覆盖组件：Color-picker
  来源：组件库源码 src/color-picker/_example/panel.vue
-->

<template>
  <t-space>
    <t-space direction="vertical">
      <label>只开启单色</label>
      <t-color-picker-panel
        v-model="color"
        :show-primary-color-preview="false"
        :color-modes="['monochrome']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
      />
    </t-space>
    <t-space direction="vertical">
      <label>只开启渐变（会过滤掉所有预设颜色的非渐变值）</label>
      <t-color-picker-panel
        v-model="color2"
        enable-alpha
        :color-modes="['linear-gradient']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
        :enable-multiple-gradient="false"
      /></t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
      color2: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    };
  },
  methods: {
    handleChange(value, context) {
      console.log(value, context);
    },
    handlePaletteChange(context) {
      console.log('色相面板改变', context);
    },
    handleRecentColorsChange(value) {
      console.log('最近使用颜色改变', value);
    },
  },
};
</script>
