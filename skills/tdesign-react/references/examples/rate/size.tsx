/**
 * TDesign TDesign React 示例：rate - size
 * 覆盖组件：Rate
 * 来源：组件库源码 packages/components/rate/_example/size.tsx
 */

import React from 'react';
import { Rate, Space } from 'tdesign-react';

export default function BasicRate() {
  return (
    <Space direction="vertical">
      <h3>16px</h3>
      <Rate size={`16`} defaultValue={5} />

      <h3>24px</h3>
      <Rate defaultValue={5} />
    </Space>
  );
}
