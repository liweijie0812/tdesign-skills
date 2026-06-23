/**
 * TDesign TDesign React 示例：input - auto-width
 * 覆盖组件：Input
 * 来源：组件库源码 packages/components/input/_example/auto-width.tsx
 */

import React from 'react';
import { Input } from 'tdesign-react';

export default function InputAutoWidth() {
  return (
    <div style={{ maxWidth: '500px' }}>
      <Input autoWidth defaultValue="宽度自适应" />
    </div>
  );
}
