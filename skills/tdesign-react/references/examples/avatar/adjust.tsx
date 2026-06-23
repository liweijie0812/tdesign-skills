/**
 * TDesign TDesign React 示例：avatar - adjust
 * 覆盖组件：Avatar
 * 来源：组件库源码 packages/components/avatar/_example/adjust.tsx
 */

import React from 'react';
import { Avatar, Space } from 'tdesign-react';

export default function AdjustAvatar() {
  return (
    <Space>
      <Avatar style={{ marginRight: '40px' }}>王</Avatar>
      <Avatar style={{ marginRight: '40px' }}>王亿</Avatar>
      <Avatar style={{ marginRight: '40px' }}>王亿亿</Avatar>
    </Space>
  );
}
