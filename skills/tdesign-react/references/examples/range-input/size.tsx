/**
 * TDesign TDesign React 示例：range-input - size
 * 覆盖组件：Range-input
 * 来源：组件库源码 packages/components/range-input/_example/size.tsx
 */

import React from 'react';
import { RangeInput, Space } from 'tdesign-react';

export default function BaseExample() {
  return (
    <Space direction="vertical">
      <RangeInput size="small" />
      <RangeInput />
      <RangeInput size="large" />
    </Space>
  );
}
