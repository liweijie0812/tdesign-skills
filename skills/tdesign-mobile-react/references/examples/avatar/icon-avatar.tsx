/**
 * TDesign TDesign Mobile React 示例：avatar - icon-avatar
 * 覆盖组件：Avatar
 * 来源：组件库源码 src/avatar/_example/icon-avatar.tsx
 */

import React from 'react';
import { Avatar } from 'tdesign-mobile-react';
import { UserIcon } from 'tdesign-icons-react';

export default function IconAvatar() {
  return (
    <div className="avatar-demo">
      <Avatar className="avatar-example" icon={<UserIcon />} />
      <Avatar className="avatar-example" shape="round" icon={<UserIcon />} />
    </div>
  );
}
