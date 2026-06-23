/**
 * TDesign TDesign React 示例：link - theme
 * 覆盖组件：Link
 * 来源：组件库源码 packages/components/link/_example/theme.tsx
 */

import React from 'react';
import { Link, Space } from 'tdesign-react';

export default function LinkExample() {
  return (
    <Space>
      <Link theme="default">跳转链接</Link>
      <Link theme="primary">跳转链接</Link>
      <Link theme="danger">跳转链接</Link>
      <Link theme="warning">跳转链接</Link>
      <Link theme="success">跳转链接</Link>
    </Space>
  );
}
