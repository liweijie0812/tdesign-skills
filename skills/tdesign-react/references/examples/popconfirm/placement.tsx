/**
 * TDesign TDesign React 示例：popconfirm - placement
 * 覆盖组件：Popconfirm
 * 来源：组件库源码 packages/components/popconfirm/_example/placement.tsx
 */

import React from 'react';
import { Button, Popconfirm, Space } from 'tdesign-react';

export default function PlacementExample() {
  const $content = '请确认您要进行此操作';
  return (
    <Space>
      <Popconfirm content={$content} placement="left">
        <Button theme="primary">Left</Button>
      </Popconfirm>

      <Popconfirm content={$content} placement="top">
        <Button>Top</Button>
      </Popconfirm>

      <Popconfirm content={$content} placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
    </Space>
  );
}
