/**
 * TDesign TDesign Mobile React 示例：avatar - badge-avatar
 * 覆盖组件：Avatar
 * 来源：组件库源码 src/avatar/_example/badge-avatar.tsx
 */

import React from 'react';
import { Avatar } from 'tdesign-mobile-react';
import { UserIcon } from 'tdesign-icons-react';

export default function BadgeAvatar() {
  return (
    <div className="avatar-demo">
      <Avatar
        className="avatar-example"
        image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
        badgeProps={{
          dot: true,
          offset: [4, 4],
        }}
      />
      <Avatar className="avatar-example external-class-content" badgeProps={{ count: 8, offset: [6, 6] }}>
        A
      </Avatar>
      <Avatar className="avatar-example" icon={<UserIcon />} badgeProps={{ count: 12, offset: [6, 6] }} />
    </div>
  );
}
