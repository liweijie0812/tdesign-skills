/**
 * TDesign TDesign React 示例：avatar - group
 * 覆盖组件：Avatar
 * 来源：组件库源码 packages/components/avatar/_example/group.tsx
 */

import React from 'react';
import { UserIcon } from 'tdesign-icons-react';
import { Avatar, Space } from 'tdesign-react';

const { Group: AvatarGroup } = Avatar;

export default function GroupAvatar() {
  return (
    <Space direction="vertical">
      <AvatarGroup>
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
        <Avatar>W</Avatar>
        <Avatar icon={<UserIcon />}></Avatar>
      </AvatarGroup>

      <AvatarGroup size="large">
        <Avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>
        <Avatar>W</Avatar>
        <Avatar icon={<UserIcon />}></Avatar>
      </AvatarGroup>
    </Space>
  );
}
