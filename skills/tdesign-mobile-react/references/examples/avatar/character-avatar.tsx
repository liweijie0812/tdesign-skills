/**
 * TDesign TDesign Mobile React 示例：avatar - character-avatar
 * 覆盖组件：Avatar
 * 来源：组件库源码 src/avatar/_example/character-avatar.tsx
 */

import React from 'react';
import { Avatar } from 'tdesign-mobile-react';

export default function CharacterAvatar() {
  return (
    <div className="avatar-demo">
      <Avatar className="avatar-example external-class-content" aria-label="字符头像">
        A
      </Avatar>
      <Avatar className="avatar-example external-class-content" shape="round">
        A
      </Avatar>
    </div>
  );
}
