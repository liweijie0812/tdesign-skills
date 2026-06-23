/**
 * TDesign TDesign React 示例：avatar - group-max
 * 覆盖组件：Avatar
 * 来源：组件库源码 packages/components/avatar/_example/group-max.tsx
 */

import React from 'react';
import { EllipsisIcon, UserIcon } from 'tdesign-icons-react';
import { Avatar, Space } from 'tdesign-react';

const { Group: AvatarGroup } = Avatar;

export default function GroupMaxAvatar() {
  return (
    <Space direction="vertical">
      <AvatarGroup size="large" max={2}>
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
        <Avatar>Avatar</Avatar>
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
      </AvatarGroup>

      <AvatarGroup size="large" max={2} collapseAvatar={<EllipsisIcon />}>
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
        <Avatar>Avatar</Avatar>
        <Avatar icon={<UserIcon />}></Avatar>
      </AvatarGroup>

      <AvatarGroup size="large" max={2} collapseAvatar="more">
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
        <Avatar>Avatar</Avatar>
        <Avatar icon={<UserIcon />}></Avatar>
      </AvatarGroup>
    </Space>
  );
}
