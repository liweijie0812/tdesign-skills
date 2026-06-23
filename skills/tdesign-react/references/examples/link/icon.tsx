/**
 * TDesign TDesign React 示例：link - icon
 * 覆盖组件：Link
 * 来源：组件库源码 packages/components/link/_example/icon.tsx
 */

import React from 'react';
import { JumpIcon, LinkIcon } from 'tdesign-icons-react';
import { Link, Space } from 'tdesign-react';

export default function LinkExample() {
  return (
    <Space>
      <Link theme="default" prefixIcon={<LinkIcon />}>
        跳转链接
      </Link>
      <Link theme="primary" underline href="https://tdesign.tencent.com/" target="_self" prefixIcon={<LinkIcon />}>
        跳转链接
      </Link>
      <Link theme="danger" underline href="https://tdesign.tencent.com/" target="_self" prefixIcon={<JumpIcon />}>
        跳转链接
      </Link>
      <Link
        theme="warning"
        underline
        href="https://tdesign.tencent.com/"
        target="_self"
        prefixIcon={<JumpIcon />}
        disabled
      >
        跳转链接
      </Link>
    </Space>
  );
}
