/**
 * TDesign TDesign Mobile React 示例：link - underline
 * 覆盖组件：Link
 * 来源：组件库源码 src/link/_example/underline.tsx
 */

import React from 'react';
import { Link } from 'tdesign-mobile-react';

export default function Underline() {
  return (
    <div className="demo-content">
      <Link size="small" theme="primary" underline>
        跳转链接
      </Link>
      <Link size="small" underline hover>
        跳转链接
      </Link>
    </div>
  );
}
