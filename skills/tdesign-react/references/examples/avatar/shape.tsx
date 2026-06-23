/**
 * TDesign TDesign React 示例：avatar - shape
 * 覆盖组件：Avatar
 * 来源：组件库源码 packages/components/avatar/_example/shape.tsx
 */

import React from 'react';
import { Avatar, Space } from 'tdesign-react';

export default function ShapeAvatar() {
  return (
    <Space>
      <Avatar style={{ marginRight: '40px' }}>W</Avatar>
      <Avatar shape="round" style={{ marginRight: '40px' }}>
        W
      </Avatar>
    </Space>
  );
}
