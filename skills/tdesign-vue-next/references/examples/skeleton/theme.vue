<!--
  TDesign TDesign Vue Next 示例：skeleton - theme
  覆盖组件：Skeleton
  来源：组件库源码 packages/components/skeleton/_example/theme.vue
-->

<template>
  <div className="t-skeleton-demo">
    <div v-for="(theme, index) in themes" :key="`theme-${index}`" className="t-skeleton-demo-card">
      <div className="header">{{ theme.label }}</div>
      <div className="content">
        <t-skeleton :theme="theme.value"></t-skeleton>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const themes = [
  { label: '文本', value: 'text' },
  { label: '头像', value: 'avatar' },
  { label: '段落', value: 'paragraph' },
  { label: '头像描述', value: 'avatar-text' },
  { label: '选项卡', value: 'tab' },
  { label: '文章', value: 'article' },
];
</script>
