/**
 * TDesign TDesign React 示例：badge - offset
 * 覆盖组件：Badge
 * 来源：组件库源码 packages/components/badge/_example/offset.tsx
 */

import React from 'react';
import { Badge, Button } from 'tdesign-react';

export default function BadgeExample() {
  return (
    <>
      <Badge count={2}>
        <Button>默认</Button>
      </Badge>
      <Badge count={2} offset={[10, 10]}>
        <Button>[10,10]</Button>
      </Badge>
      <Badge count={2} offset={[-10, 10]}>
        <Button>[-10,10]</Button>
      </Badge>
      <Badge count={2} offset={[-10, -10]}>
        <Button>[-10,-10]</Button>
      </Badge>
      <Badge count={2} offset={[10, -10]}>
        <Button>[10,-10]</Button>
      </Badge>
    </>
  );
}
