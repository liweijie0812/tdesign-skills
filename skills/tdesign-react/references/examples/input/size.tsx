/**
 * TDesign TDesign React 示例：input - size
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/size.tsx
 */

import React, { useState } from 'react';
import { Input, Space } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState(null);
  return (
    <Space direction="vertical" style={{ width: 500 }}>
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
        size="small"
      />
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
      />
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
        size="large"
      />
    </Space>
  );
}
