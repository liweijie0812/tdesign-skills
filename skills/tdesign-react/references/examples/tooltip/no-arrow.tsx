/**
 * TDesign TDesign React 示例：tooltip - no-arrow
 * 覆盖组件：Tooltip
 * 来源：组件库源码 packages/components/tooltip/_example/no-arrow.tsx
 */

import React from 'react';
import { Button, Tooltip } from 'tdesign-react';

export default function BasicUsage() {
  return (
    <Tooltip content="文字提示仅展示文本内容" showArrow={false}>
      <Button variant="outline">不带箭头等文字提示</Button>
    </Tooltip>
  );
}
