/**
 * TDesign TDesign React 示例：popconfirm - extends
 * 覆盖组件：Popconfirm
 * 来源：组件库源码 packages/components/popconfirm/_example/extends.tsx
 */

import React from 'react';
import { Button, Popconfirm } from 'tdesign-react';

export default function BasicUsageExample() {
  const $content = '请确认您要进行此操作';

  return (
    <Popconfirm content={$content} placement="right">
      <Button theme="primary">浮层在右边</Button>
    </Popconfirm>
  );
}
