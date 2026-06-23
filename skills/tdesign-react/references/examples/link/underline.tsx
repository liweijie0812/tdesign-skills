/**
 * TDesign TDesign React 示例：link - underline
 * 覆盖组件：Link
 * 来源：组件库源码 packages/components/link/_example/underline.tsx
 */

import React from 'react';
import { Link, Space } from 'tdesign-react';

export default function LinkExample() {
  return (
    <Space>
      <Link theme="default" underline>
        跳转链接
      </Link>
      <Link theme="primary" underline>
        跳转链接
      </Link>
      <Link theme="danger" underline>
        跳转链接
      </Link>
      <Link theme="warning" underline>
        跳转链接
      </Link>
      <Link theme="success" underline>
        跳转链接
      </Link>
    </Space>
  );
}
