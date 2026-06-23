/**
 * TDesign TDesign React 示例：input - textarea
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/textarea.tsx
 */

import React, { useState } from 'react';
import { ErrorCircleFilledIcon, SearchIcon } from 'tdesign-icons-react';
import { Input } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState('');
  return (
    <Input
      prefixIcon={<SearchIcon />}
      suffixIcon={<ErrorCircleFilledIcon />}
      placeholder="请输入内容"
      value={value}
      onChange={(value) => {
        onChange(value);
      }}
    />
  );
}
