/**
 * TDesign TDesign React 示例：input - clearable
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/clearable.tsx
 */

import React, { useState } from 'react';
import { Input } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState('Hello TDesign');
  return (
    <Input
      placeholder="请输入内容"
      value={value}
      clearable
      onChange={(value) => {
        onChange(value);
      }}
      onClear={() => {
        console.log('onClear');
      }}
    />
  );
}
