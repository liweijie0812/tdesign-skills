/**
 * TDesign TDesign React 示例：input - align
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/align.tsx
 */

import React from 'react';
import { Input, Space } from 'tdesign-react';

export default function InputExample() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input defaultValue="居左对齐" align="left" />
      <Input defaultValue="居中对齐" align="center" />
      <Input defaultValue="居右对齐" align="right" />
    </Space>
  );
}
