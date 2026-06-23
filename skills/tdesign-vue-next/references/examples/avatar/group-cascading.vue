<!--
  TDesign TDesign Vue Next 示例：avatar - group-cascading
  覆盖组件：Avatar
  来源：组件库源码 packages/components/avatar/_example/group-cascading.vue
-->

<template>
  <t-space direction="vertical" :size="40">
    <div class="demo-avatar-block">
      <t-avatar-group>
        <t-avatar :image="image" />
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon" />
      </t-avatar-group>
    </div>

    <div class="demo-avatar-block">
      <t-avatar-group cascading="left-up">
        <t-avatar :image="image" />
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon" />
      </t-avatar-group>
    </div>
  </t-space>
</template>
<script lang="tsx" setup>
import { UserIcon } from 'tdesign-icons-vue-next';
import type { AvatarProps } from 'tdesign-vue-next';

const icon: AvatarProps['icon'] = () => <UserIcon />;
const image: AvatarProps['image'] = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>
