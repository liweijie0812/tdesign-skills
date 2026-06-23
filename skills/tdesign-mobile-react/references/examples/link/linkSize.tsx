/**
 * TDesign TDesign Mobile React 示例：link - linkSize
 * 覆盖组件：Link
 * 来源：组件库源码 src/link/_example/linkSize.tsx
 */

import React from 'react';
import { Link } from 'tdesign-mobile-react';
import { JumpIcon } from 'tdesign-icons-react';

export default function Size() {
  return (
    <div className="demo-content">
      <Link theme="primary" size="small" suffixIcon={<JumpIcon />}>
        S号链接
      </Link>
      <Link theme="primary" size="medium" suffixIcon={<JumpIcon />}>
        M号链接
      </Link>
      <Link theme="primary" size="large" suffixIcon={<JumpIcon />}>
        L号链接
      </Link>
    </div>
  );
}
