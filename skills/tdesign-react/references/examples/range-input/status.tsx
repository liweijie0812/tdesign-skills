/**
 * TDesign TDesign React 示例：range-input - status
 * 覆盖组件：Range-input
 * 来源：组件库源码 packages/components/range-input/_example/status.tsx
 */

import React from 'react';
import { RangeInput, Space } from 'tdesign-react';

export default function BaseExample() {
  return (
    <Space direction="vertical">
      <RangeInput status="success" />
      <RangeInput status="warning" />
      <RangeInput status="error" />
    </Space>
  );
}
