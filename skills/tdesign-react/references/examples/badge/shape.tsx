/**
 * TDesign TDesign React 示例：badge - shape
 * 覆盖组件：Badge
 * 来源：组件库源码 packages/components/badge/_example/shape.tsx
 */

import React from 'react';
import { Badge, Button } from 'tdesign-react';

export default function BadgeExample() {
  return (
    <>
      <Badge shape={'circle'} count={2}>
        <Button> circle</Button>
      </Badge>
      <Badge shape={'round'} count={99}>
        <Button>round</Button>
      </Badge>
    </>
  );
}
