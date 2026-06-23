<!--
  TDesign TDesign Vue Next 示例：avatar - group
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/group.vue
-->

<template>
  <t-space class="demo-avatar" direction="vertical" :size="40">
    <t-avatar-group>
      <t-avatar :image="image" />
      <t-avatar>W</t-avatar>
      <t-avatar :icon="icon" />
    </t-avatar-group>

    <t-avatar-group size="large">
      <t-avatar :image="image" />
      <t-avatar>W</t-avatar>
      <t-avatar :icon="icon" />
    </t-avatar-group>
  </t-space>
</template>
<script lang="tsx" setup>
import { UserIcon } from 'tdesign-icons-vue-next';
import type { AvatarProps } from 'tdesign-vue-next';

const icon: AvatarProps['icon'] = () => <UserIcon />;
const image: AvatarProps['image'] = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>
