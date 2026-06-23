/**
 * TDesign TDesign React 示例：input - borderless
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/borderless.tsx
 */

import React from 'react';
import { Input, Space } from 'tdesign-react';

export default function BorderlessInputExample() {
  return (
    <Space direction="vertical" style={{ width: 500 }}>
      <Input placeholder="please input" clearable />
      <Input placeholder="borderless input" borderless={true} clearable />
    </Space>
  );
}
