/**
 * TDesign TDesign React 示例：input - password
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/password.tsx
 */

import React, { useState } from 'react';
import { LockOnIcon } from 'tdesign-icons-react';
import { Input, Space } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState('');
  return (
    <Space direction="vertical">
      <Input
        prefixIcon={<LockOnIcon />}
        placeholder="请输入"
        value={value}
        type="password"
        onChange={(value) => {
          onChange(value);
        }}
      />
      <Input
        prefixIcon={<LockOnIcon />}
        placeholder="请输入"
        value={value}
        type="password"
        onChange={(value) => {
          onChange(value);
        }}
      />
    </Space>
  );
}
