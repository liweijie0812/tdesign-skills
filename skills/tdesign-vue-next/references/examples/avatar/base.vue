<!--
  TDesign TDesign Vue Next 示例：avatar - base
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/base.vue
-->

<template>
  <t-space :size="40">
    <t-avatar :icon="icon" />
    <t-avatar :image="image" :hide-on-load-failed="false" />
    <t-avatar>W</t-avatar>
  </t-space>
</template>
<script lang="tsx" setup>
import { computed } from 'vue';
import { UserIcon } from 'tdesign-icons-vue-next';
import type { AvatarProps } from 'tdesign-vue-next';

const icon = computed<AvatarProps['icon']>(() => () => <UserIcon />);
const image: AvatarProps['image'] = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>
