/**
 * TDesign TDesign React 示例：rate - clearable
 * 覆盖组件：Rate
 * 来源：组件库源码 packages/components/rate/_example/clearable.tsx
 */

import React from 'react';
import { Rate, Space } from 'tdesign-react';

export default function BasicRate() {
  return (
    <Space direction="vertical">
      <h3>clearable: true</h3>
      <Rate defaultValue={3} clearable />
      <h3>clearable: false</h3>
      <Rate defaultValue={3} />
    </Space>
  );
}
