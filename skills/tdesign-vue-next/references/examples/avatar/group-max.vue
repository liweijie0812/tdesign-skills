<!--
  TDesign TDesign Vue Next 示例：avatar - group-max
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/group-max.vue
-->

<template>
  <t-space direction="vertical" :size="40">
    <t-avatar-group size="large" :max="2">
      <t-avatar :image="image" />
      <t-avatar>Avatar</t-avatar>
      <t-avatar :image="image" />
    </t-avatar-group>

    <t-avatar-group size="large" :max="2" :collapse-avatar="ellipsisIcon">
      <t-avatar :image="image" />
      <t-avatar>Avatar</t-avatar>
      <t-avatar :icon="icon" />
    </t-avatar-group>

    <t-avatar-group size="large" :max="2" collapse-avatar="more">
      <t-avatar :image="image" />
      <t-avatar>Avatar</t-avatar>
      <t-avatar :icon="icon" />
    </t-avatar-group>
  </t-space>
</template>
<script lang="tsx" setup>
import { UserIcon, EllipsisIcon } from 'tdesign-icons-vue-next';
import type { AvatarProps, AvatarGroupProps } from 'tdesign-vue-next';

const icon: AvatarProps['icon'] = () => <UserIcon />;
const ellipsisIcon: AvatarGroupProps['collapseAvatar'] = () => <EllipsisIcon />;
const image: AvatarProps['image'] = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>
